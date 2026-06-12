import React, { useId, useRef, useState, useCallback } from "react";
import { cx } from "@kkt771/core";
import * as styles from "./FileInput.css.js";

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export interface FileInputProps {
  id: string;
  label: string;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  helperText?: string;
  error?: string;
  onChange?: (files: File[]) => void;
  className?: string;
}

export const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  function FileInput(
    {
      id,
      label,
      accept,
      multiple = false,
      disabled = false,
      helperText,
      error,
      onChange,
      className,
    },
    ref
  ) {
    const descriptionId = helperText || error ? `${id}-description` : undefined;
    const [files, setFiles] = useState<File[]>([]);
    const [dragging, setDragging] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const mergedRef = useCallback(
      (node: HTMLInputElement | null) => {
        (inputRef as React.MutableRefObject<HTMLInputElement | null>).current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      },
      [ref]
    );

    const handleFiles = useCallback(
      (incoming: FileList | null) => {
        if (!incoming) return;
        const next = multiple ? [...files, ...Array.from(incoming)] : Array.from(incoming);
        setFiles(next);
        onChange?.(next);
      },
      [files, multiple, onChange]
    );

    const handleRemove = useCallback(
      (index: number) => {
        const next = files.filter((_, i) => i !== index);
        setFiles(next);
        onChange?.(next);
        if (inputRef.current) inputRef.current.value = "";
      },
      [files, onChange]
    );

    const handleDragOver = useCallback((e: React.DragEvent) => {
      e.preventDefault();
      setDragging(true);
    }, []);

    const handleDragLeave = useCallback(() => setDragging(false), []);

    const handleDrop = useCallback(
      (e: React.DragEvent) => {
        e.preventDefault();
        setDragging(false);
        if (disabled) return;
        handleFiles(e.dataTransfer.files);
      },
      [disabled, handleFiles]
    );

    return (
      <div className={cx(styles.wrapper, className)}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>

        <input
          ref={mergedRef}
          id={id}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          aria-describedby={descriptionId}
          aria-invalid={Boolean(error) || undefined}
          className={styles.hiddenInput}
          onChange={(e) => handleFiles(e.target.files)}
        />

        <button
          type="button"
          className={cx(styles.dropzone, dragging && styles.dropzoneActive)}
          aria-disabled={disabled || undefined}
          onClick={() => inputRef.current?.click()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <span className={styles.dropzoneIcon} aria-hidden="true">
            ↑
          </span>
          <span className={styles.dropzoneText}>
            Click to browse or drag & drop
          </span>
          {accept && (
            <span className={styles.dropzoneSubtext}>{accept}</span>
          )}
        </button>

        {files.length > 0 && (
          <ul className={styles.fileList} aria-label="Selected files">
            {files.map((file, i) => (
              <li key={`${file.name}-${i}`} className={styles.fileItem}>
                <span className={styles.fileName}>{file.name}</span>
                <span className={styles.fileSize}>{formatBytes(file.size)}</span>
                <button
                  type="button"
                  className={styles.removeButton}
                  aria-label={`Remove ${file.name}`}
                  onClick={() => handleRemove(i)}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}

        {error ? (
          <span id={descriptionId} className={styles.errorText} role="alert">
            {error}
          </span>
        ) : helperText ? (
          <span id={descriptionId} className={styles.helperText}>
            {helperText}
          </span>
        ) : null}
      </div>
    );
  }
);
