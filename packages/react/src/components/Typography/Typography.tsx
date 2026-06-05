import React from "react";
import { cx } from "@kkt771/core";
import * as styles from "./Typography.css.js";

export type TypographyVariant = "display" | "heading" | "body" | "caption" | "label";

const defaultTags: Record<TypographyVariant, keyof React.JSX.IntrinsicElements> = {
  display: "h1",
  heading: "h2",
  body: "p",
  caption: "span",
  label: "label",
};

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: keyof React.JSX.IntrinsicElements;
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  function Typography({ variant = "body", as, className, children, ...rest }, ref) {
    const Tag = (as ?? defaultTags[variant]) as React.ElementType;

    return (
      <Tag
        ref={ref}
        className={cx(styles.base, styles.variants[variant], className)}
        {...rest}
      >
        {children}
      </Tag>
    );
  }
);
