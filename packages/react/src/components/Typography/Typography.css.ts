import { style, styleVariants } from "@vanilla-extract/css";

export const base = style({
  fontFamily: "var(--kkt-font-family-sans)",
  color: "var(--kkt-color-semantic-foreground-default)",
  margin: 0,
});

export const variants = styleVariants({
  display: {
    fontSize: "var(--kkt-font-size-4xl)",
    fontWeight: "var(--kkt-font-weight-bold)",
    lineHeight: "var(--kkt-font-line-height-tight)",
    letterSpacing: "var(--kkt-font-letter-spacing-tight)",
  },
  heading: {
    fontSize: "var(--kkt-font-size-2xl)",
    fontWeight: "var(--kkt-font-weight-semibold)",
    lineHeight: "var(--kkt-font-line-height-tight)",
    letterSpacing: "var(--kkt-font-letter-spacing-tight)",
  },
  body: {
    fontSize: "var(--kkt-font-size-base)",
    fontWeight: "var(--kkt-font-weight-normal)",
    lineHeight: "var(--kkt-font-line-height-normal)",
    letterSpacing: "var(--kkt-font-letter-spacing-normal)",
  },
  caption: {
    fontSize: "var(--kkt-font-size-sm)",
    fontWeight: "var(--kkt-font-weight-normal)",
    lineHeight: "var(--kkt-font-line-height-normal)",
    color: "var(--kkt-color-semantic-foreground-muted)",
  },
  label: {
    fontSize: "var(--kkt-font-size-sm)",
    fontWeight: "var(--kkt-font-weight-medium)",
    lineHeight: "var(--kkt-font-line-height-none)",
    letterSpacing: "var(--kkt-font-letter-spacing-wide)",
  },
});
