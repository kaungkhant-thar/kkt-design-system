import React from "react";
import { cx } from "@kkt771/core";
import * as styles from "./Card.css.js";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevation?: "flat" | "raised" | "elevated";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  function Card({ elevation = "flat", className, children, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={cx(styles.base, styles.elevations[elevation], className)}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
