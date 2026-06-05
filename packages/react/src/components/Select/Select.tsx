import React from "react";
import { cx } from "@kkt771/core";
import * as styles from "./Select.css.js";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "id"> {
  id: string;
  label: string;
  options: SelectOption[];
  placeholder?: string;
  helperText?: string;
  error?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    { id, label, options, placeholder, helperText, error, disabled = false, className, ...rest },
    ref
  ) {
    const hasError = Boolean(error);
    const descriptionId = helperText || error ? `${id}-description` : undefined;

    return (
      <div className={styles.wrapper}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <div className={styles.selectWrapper}>
          <select
            ref={ref}
            id={id}
            disabled={disabled}
            aria-invalid={hasError || undefined}
            aria-describedby={descriptionId}
            className={cx(styles.select, className)}
            {...rest}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
          </select>
          <span className={styles.chevron} aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
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
