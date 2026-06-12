import React, { useId } from "react";
import { cx } from "@kkt771/core";
import * as styles from "./Alert.css.js";

const ICONS: Record<string, string> = {
  info: "ℹ",
  success: "✓",
  warning: "⚠",
  error: "✕",
};

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "info" | "success" | "warning" | "error";
  title?: string;
  onClose?: () => void;
  children: React.ReactNode;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(
    { variant = "info", title, onClose, children, className, ...rest },
    ref
  ) {
    const titleId = useId();

    return (
      <div
        ref={ref}
        role="alert"
        aria-labelledby={title ? titleId : undefined}
        className={cx(styles.base, styles.variants[variant], className)}
        {...rest}
      >
        <span className={styles.icon} aria-hidden="true">
          {ICONS[variant]}
        </span>
        <div className={styles.body}>
          {title && (
            <div id={titleId} className={styles.title}>
              {title}
            </div>
          )}
          {children}
        </div>
        {onClose && (
          <button
            type="button"
            className={styles.closeButton}
            aria-label="Dismiss"
            onClick={onClose}
          >
            ✕
          </button>
        )}
      </div>
    );
  }
);
