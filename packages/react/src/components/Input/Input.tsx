import React from "react";
import { cx } from "@kkt771/core";
import * as styles from "./Input.css.js";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "id"> {
  id: string;
  label: string;
  helperText?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input(
    { id, label, helperText, error, disabled = false, className, ...rest },
    ref
  ) {
    const hasError = Boolean(error);
    const descriptionId = helperText || error ? `${id}-description` : undefined;

    return (
      <div className={styles.wrapper}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          disabled={disabled}
          aria-invalid={hasError || undefined}
          aria-describedby={descriptionId}
          className={cx(styles.input, className)}
          {...rest}
        />
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
