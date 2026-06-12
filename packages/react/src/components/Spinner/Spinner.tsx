import React from "react";
import { cx } from "@kkt771/core";
import * as styles from "./Spinner.css.js";

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "accent" | "white";
  label?: string;
}

export const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  function Spinner(
    { size = "md", variant = "default", label = "Loading…", className, ...rest },
    ref
  ) {
    return (
      <span
        ref={ref}
        role="status"
        aria-label={label}
        className={cx(styles.base, styles.sizes[size], styles.variants[variant], className)}
        {...rest}
      />
    );
  }
);
