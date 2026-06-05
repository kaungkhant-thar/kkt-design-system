import { style, styleVariants, keyframes } from "@vanilla-extract/css";

export const base = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "var(--kkt-spacing-2)",
  fontFamily: "var(--kkt-font-family-sans)",
  fontWeight: "var(--kkt-font-weight-medium)",
  lineHeight: "var(--kkt-font-line-height-none)",
  borderRadius: "var(--kkt-border-radius-md)",
  border: "1px solid transparent",
  cursor: "pointer",
  textDecoration: "none",
  transition: "background-color 120ms ease, color 120ms ease, border-color 120ms ease, box-shadow 120ms ease",
  userSelect: "none",
  whiteSpace: "nowrap",

  ":focus-visible": {
    outline: "2px solid var(--kkt-color-semantic-accent-default)",
    outlineOffset: "2px",
  },

  selectors: {
    "&:disabled, &[aria-disabled='true']": {
      cursor: "not-allowed",
      opacity: "0.5",
      pointerEvents: "none",
    },
  },
});

export const variants = styleVariants({
  primary: {
    backgroundColor: "var(--kkt-color-semantic-accent-default)",
    color: "var(--kkt-color-semantic-foreground-on-accent)",
    borderColor: "var(--kkt-color-semantic-accent-default)",
    ":hover": {
      backgroundColor: "var(--kkt-color-semantic-accent-hover)",
      borderColor: "var(--kkt-color-semantic-accent-hover)",
    },
    ":active": {
      backgroundColor: "var(--kkt-color-primitive-blue-800)",
      borderColor: "var(--kkt-color-primitive-blue-800)",
    },
  },
  secondary: {
    backgroundColor: "var(--kkt-color-semantic-background-default)",
    color: "var(--kkt-color-semantic-foreground-default)",
    borderColor: "var(--kkt-color-semantic-border-default)",
    ":hover": {
      backgroundColor: "var(--kkt-color-semantic-background-muted)",
      borderColor: "var(--kkt-color-semantic-border-strong)",
    },
    ":active": {
      backgroundColor: "var(--kkt-color-semantic-background-subtle)",
    },
  },
  ghost: {
    backgroundColor: "transparent",
    color: "var(--kkt-color-semantic-foreground-default)",
    borderColor: "transparent",
    ":hover": {
      backgroundColor: "var(--kkt-color-semantic-background-muted)",
    },
    ":active": {
      backgroundColor: "var(--kkt-color-semantic-background-subtle)",
    },
  },
});

export const sizes = styleVariants({
  sm: {
    height: "var(--kkt-spacing-8)",
    paddingLeft: "var(--kkt-spacing-3)",
    paddingRight: "var(--kkt-spacing-3)",
    fontSize: "var(--kkt-font-size-sm)",
  },
  md: {
    height: "var(--kkt-spacing-10)",
    paddingLeft: "var(--kkt-spacing-4)",
    paddingRight: "var(--kkt-spacing-4)",
    fontSize: "var(--kkt-font-size-base)",
  },
  lg: {
    height: "var(--kkt-spacing-12)",
    paddingLeft: "var(--kkt-spacing-6)",
    paddingRight: "var(--kkt-spacing-6)",
    fontSize: "var(--kkt-font-size-lg)",
  },
});

const spin = keyframes({
  to: { transform: "rotate(360deg)" },
});

export const loading = style({
  position: "relative",
  color: "transparent",
  pointerEvents: "none",
});

export const spinner = style({
  position: "absolute",
  width: "1em",
  height: "1em",
  border: "2px solid white",
  borderTopColor: "transparent",
  borderRadius: "var(--kkt-border-radius-full)",
  animation: `${spin} 0.6s linear infinite`,
});
