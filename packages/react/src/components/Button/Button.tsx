import React from "react";
import { cx } from "@kkt/core";
import type { BaseComponentProps, LoadingProps } from "@kkt/core";
import * as styles from "./Button.css.js";

export interface ButtonProps
  extends BaseComponentProps,
    LoadingProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = "primary",
      size = "md",
      disabled = false,
      loading = false,
      className,
      children,
      onClick,
      onKeyDown,
      ...rest
    },
    ref
  ) {
    const isDisabled = disabled || loading;

    function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
      if ((e.key === "Enter" || e.key === " ") && !isDisabled) {
        e.preventDefault();
        e.currentTarget.click();
      }
      onKeyDown?.(e);
    }

    return (
      <button
        ref={ref}
        type="button"
        className={cx(
          styles.base,
          styles.variants[variant],
          styles.sizes[size],
          loading && styles.loading,
          className
        )}
        disabled={isDisabled}
        aria-disabled={isDisabled || undefined}
        aria-busy={loading || undefined}
        onClick={isDisabled ? undefined : onClick}
        onKeyDown={handleKeyDown}
        {...rest}
      >
        {loading && (
          <span className={styles.spinner} aria-hidden="true" />
        )}
        {children}
      </button>
    );
  }
);
