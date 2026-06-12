import { style, styleVariants } from "@vanilla-extract/css";

export const base = style({
  display: "flex",
  gap: "var(--kkt-spacing-3)",
  padding: "var(--kkt-spacing-3) var(--kkt-spacing-4)",
  borderRadius: "var(--kkt-border-radius-md)",
  border: "1px solid transparent",
  fontFamily: "var(--kkt-font-family-sans)",
  fontSize: "var(--kkt-font-size-sm)",
  lineHeight: "var(--kkt-font-line-height-normal)",
});

export const variants = styleVariants({
  info: {
    backgroundColor: "var(--kkt-color-semantic-accent-subtle)",
    borderColor: "var(--kkt-color-semantic-accent-default)",
    color: "var(--kkt-color-semantic-accent-default)",
  },
  success: {
    backgroundColor: "var(--kkt-color-semantic-success-subtle)",
    borderColor: "var(--kkt-color-semantic-success-default)",
    color: "var(--kkt-color-semantic-success-foreground)",
  },
  warning: {
    backgroundColor: "var(--kkt-color-semantic-warning-subtle)",
    borderColor: "var(--kkt-color-semantic-warning-default)",
    color: "var(--kkt-color-semantic-warning-foreground)",
  },
  error: {
    backgroundColor: "var(--kkt-color-semantic-danger-subtle)",
    borderColor: "var(--kkt-color-semantic-danger-default)",
    color: "var(--kkt-color-semantic-danger-foreground)",
  },
});

export const icon = style({
  flexShrink: 0,
  fontSize: "var(--kkt-font-size-base)",
  lineHeight: "var(--kkt-font-line-height-normal)",
});

export const body = style({
  flex: 1,
  minWidth: 0,
});

export const title = style({
  fontWeight: "var(--kkt-font-weight-medium)",
  marginBottom: "var(--kkt-spacing-1)",
});

export const closeButton = style({
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "var(--kkt-spacing-5)",
  height: "var(--kkt-spacing-5)",
  background: "none",
  border: "none",
  borderRadius: "var(--kkt-border-radius-sm)",
  cursor: "pointer",
  color: "inherit",
  opacity: 0.7,
  padding: 0,
  fontSize: "var(--kkt-font-size-sm)",
  lineHeight: 1,
  transition: "opacity 120ms ease",

  ":hover": {
    opacity: 1,
  },
  ":focus-visible": {
    outline: "2px solid currentColor",
    outlineOffset: "2px",
    opacity: 1,
  },
});
