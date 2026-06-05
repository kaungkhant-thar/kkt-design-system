import React, { useEffect, useRef, useCallback, useId } from "react";
import { cx } from "@kkt771/core";
import * as styles from "./Modal.css.js";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  closeOnBackdrop?: boolean;
  className?: string;
}

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  function Modal(
    { open, onClose, title, children, closeOnBackdrop = true, className },
    ref
  ) {
    const titleId = useId();
    const dialogRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<Element | null>(null);

    // Merge forwarded ref with internal
    const setRef = useCallback(
      (node: HTMLDivElement | null) => {
        (dialogRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      },
      [ref]
    );

    useEffect(() => {
      if (open) {
        triggerRef.current = document.activeElement;
        // Focus the dialog on next tick so it's in the DOM
        requestAnimationFrame(() => dialogRef.current?.focus());
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
        if (triggerRef.current instanceof HTMLElement) {
          triggerRef.current.focus();
        }
        triggerRef.current = null;
      }
      return () => {
        document.body.style.overflow = "";
      };
    }, [open]);

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Escape") {
          onClose();
          return;
        }

        if (e.key !== "Tab") return;

        const focusable = Array.from(
          dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      },
      [onClose]
    );

    const handleBackdropClick = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (closeOnBackdrop && e.target === e.currentTarget) onClose();
      },
      [closeOnBackdrop, onClose]
    );

    if (!open) return null;

    return (
      <div className={styles.backdrop} onClick={handleBackdropClick}>
        <div
          ref={setRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          tabIndex={-1}
          className={cx(styles.dialog, className)}
          onKeyDown={handleKeyDown}
        >
          <div className={styles.header}>
            <h2 id={titleId} className={styles.title}>
              {title}
            </h2>
            <button
              type="button"
              className={styles.closeButton}
              aria-label="Close"
              onClick={onClose}
            >
              ✕
            </button>
          </div>
          <div className={styles.body}>{children}</div>
        </div>
      </div>
    );
  }
);
