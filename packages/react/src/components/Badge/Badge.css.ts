import { style, styleVariants } from "@vanilla-extract/css";

export const base = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "var(--kkt-font-family-sans)",
  fontSize: "var(--kkt-font-size-xs)",
  fontWeight: "var(--kkt-font-weight-medium)",
  lineHeight: "var(--kkt-font-line-height-none)",
  paddingTop: "var(--kkt-spacing-1)",
  paddingBottom: "var(--kkt-spacing-1)",
  paddingLeft: "var(--kkt-spacing-2)",
  paddingRight: "var(--kkt-spacing-2)",
  borderRadius: "var(--kkt-border-radius-full)",
  whiteSpace: "nowrap",
});

export const variants = styleVariants({
  default: {
    backgroundColor: "var(--kkt-color-semantic-background-muted)",
    color: "var(--kkt-color-semantic-foreground-default)",
  },
  success: {
    backgroundColor: "var(--kkt-color-semantic-success-subtle)",
    color: "var(--kkt-color-semantic-success-foreground)",
  },
  warning: {
    backgroundColor: "var(--kkt-color-semantic-warning-subtle)",
    color: "var(--kkt-color-semantic-warning-foreground)",
  },
  danger: {
    backgroundColor: "var(--kkt-color-semantic-danger-subtle)",
    color: "var(--kkt-color-semantic-danger-foreground)",
  },
  info: {
    backgroundColor: "var(--kkt-color-semantic-accent-subtle)",
    color: "var(--kkt-color-semantic-accent-default)",
  },
});
