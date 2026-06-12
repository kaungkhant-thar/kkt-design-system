import { style } from "@vanilla-extract/css";

export const wrapper = style({
  position: "relative",
  borderRadius: "var(--kkt-border-radius-md)",
  border: "1px solid var(--kkt-color-semantic-border-default)",
  overflow: "hidden",
  fontFamily: "var(--kkt-font-family-mono)",
});

export const header = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "var(--kkt-spacing-2)",
  paddingLeft: "var(--kkt-spacing-4)",
  paddingRight: "var(--kkt-spacing-2)",
  paddingTop: "var(--kkt-spacing-2)",
  paddingBottom: "var(--kkt-spacing-2)",
  backgroundColor: "var(--kkt-color-semantic-background-muted)",
  borderBottom: "1px solid var(--kkt-color-semantic-border-default)",
});

export const language = style({
  fontFamily: "var(--kkt-font-family-sans)",
  fontSize: "var(--kkt-font-size-xs)",
  fontWeight: "var(--kkt-font-weight-medium)",
  color: "var(--kkt-color-semantic-foreground-muted)",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
});

export const copyButton = style({
  display: "flex",
  alignItems: "center",
  gap: "var(--kkt-spacing-1)",
  padding: "var(--kkt-spacing-1) var(--kkt-spacing-2)",
  background: "none",
  border: "1px solid var(--kkt-color-semantic-border-default)",
  borderRadius: "var(--kkt-border-radius-sm)",
  cursor: "pointer",
  color: "var(--kkt-color-semantic-foreground-muted)",
  fontFamily: "var(--kkt-font-family-sans)",
  fontSize: "var(--kkt-font-size-xs)",
  lineHeight: "var(--kkt-font-line-height-none)",
  transition: "color 120ms ease, border-color 120ms ease, background-color 120ms ease",

  ":hover": {
    color: "var(--kkt-color-semantic-foreground-default)",
    borderColor: "var(--kkt-color-semantic-border-strong)",
    backgroundColor: "var(--kkt-color-semantic-background-subtle)",
  },
  ":focus-visible": {
    outline: "2px solid var(--kkt-color-semantic-accent-default)",
    outlineOffset: "2px",
  },
});

export const copyButtonCopied = style({
  color: "var(--kkt-color-semantic-success-foreground)",
  borderColor: "var(--kkt-color-semantic-success-default)",
});

export const pre = style({
  margin: 0,
  padding: "var(--kkt-spacing-4)",
  overflowX: "auto",
  backgroundColor: "var(--kkt-color-semantic-background-default)",
  fontSize: "var(--kkt-font-size-sm)",
  lineHeight: "var(--kkt-font-line-height-relaxed)",
  color: "var(--kkt-color-semantic-foreground-default)",
  fontFamily: "inherit",
});

export const code = style({
  fontFamily: "inherit",
  display: "block",
  whiteSpace: "pre",
});
