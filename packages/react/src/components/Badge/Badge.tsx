import React from "react";
import { cx } from "@kkt771/core";
import * as styles from "./Badge.css.js";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "danger" | "info";
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  function Badge({ variant = "default", className, children, ...rest }, ref) {
    return (
      <span
        ref={ref}
        role="status"
        className={cx(styles.base, styles.variants[variant], className)}
        {...rest}
      >
        {children}
      </span>
    );
  }
);
