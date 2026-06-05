import { style, keyframes } from "@vanilla-extract/css";

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const slideIn = keyframes({
  from: { opacity: 0, transform: "translateY(-8px) scale(0.98)" },
  to: { opacity: 1, transform: "translateY(0) scale(1)" },
});

export const backdrop = style({
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "var(--kkt-z-index-modal)",
  padding: "var(--kkt-spacing-4)",
  animation: `${fadeIn} 150ms ease`,
});

export const dialog = style({
  backgroundColor: "var(--kkt-color-semantic-background-default)",
  borderRadius: "var(--kkt-border-radius-xl)",
  boxShadow: "var(--kkt-shadow-xl)",
  width: "100%",
  maxWidth: "32rem",
  maxHeight: "calc(100vh - var(--kkt-spacing-8))",
  display: "flex",
  flexDirection: "column",
  animation: `${slideIn} 150ms ease`,
  outline: "none",
});

export const header = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "var(--kkt-spacing-5) var(--kkt-spacing-6)",
  borderBottom: "1px solid var(--kkt-color-semantic-border-default)",
  flexShrink: 0,
});

export const title = style({
  fontFamily: "var(--kkt-font-family-sans)",
  fontSize: "var(--kkt-font-size-lg)",
  fontWeight: "var(--kkt-font-weight-semibold)",
  color: "var(--kkt-color-semantic-foreground-default)",
  margin: 0,
});

export const closeButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "var(--kkt-spacing-8)",
  height: "var(--kkt-spacing-8)",
  borderRadius: "var(--kkt-border-radius-md)",
  border: "none",
  backgroundColor: "transparent",
  color: "var(--kkt-color-semantic-foreground-muted)",
  cursor: "pointer",
  flexShrink: 0,
  transition: "background-color 120ms ease, color 120ms ease",

  ":hover": {
    backgroundColor: "var(--kkt-color-semantic-background-muted)",
    color: "var(--kkt-color-semantic-foreground-default)",
  },

  ":focus-visible": {
    outline: "2px solid var(--kkt-color-semantic-accent-default)",
    outlineOffset: "2px",
  },
});

export const body = style({
  padding: "var(--kkt-spacing-5) var(--kkt-spacing-6)",
  overflowY: "auto",
  flexGrow: 1,
  fontFamily: "var(--kkt-font-family-sans)",
  fontSize: "var(--kkt-font-size-base)",
  color: "var(--kkt-color-semantic-foreground-default)",
  lineHeight: "var(--kkt-font-line-height-normal)",
});
