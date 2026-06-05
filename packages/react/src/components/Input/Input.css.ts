import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "var(--kkt-spacing-1)",
});

export const label = style({
  fontFamily: "var(--kkt-font-family-sans)",
  fontSize: "var(--kkt-font-size-sm)",
  fontWeight: "var(--kkt-font-weight-medium)",
  color: "var(--kkt-color-semantic-foreground-default)",
  lineHeight: "var(--kkt-font-line-height-none)",
});

export const input = style({
  fontFamily: "var(--kkt-font-family-sans)",
  fontSize: "var(--kkt-font-size-base)",
  color: "var(--kkt-color-semantic-foreground-default)",
  backgroundColor: "var(--kkt-color-semantic-background-default)",
  border: "1px solid var(--kkt-color-semantic-border-default)",
  borderRadius: "var(--kkt-border-radius-md)",
  height: "var(--kkt-spacing-10)",
  paddingLeft: "var(--kkt-spacing-3)",
  paddingRight: "var(--kkt-spacing-3)",
  width: "100%",
  boxSizing: "border-box",
  outline: "none",
  transition: "border-color 120ms ease, box-shadow 120ms ease",

  ":focus-visible": {
    borderColor: "var(--kkt-color-semantic-accent-default)",
    boxShadow: "0 0 0 2px var(--kkt-color-semantic-accent-subtle)",
  },

  selectors: {
    "&::placeholder": {
      color: "var(--kkt-color-semantic-foreground-muted)",
    },
    "&:disabled": {
      cursor: "not-allowed",
      opacity: "0.5",
      backgroundColor: "var(--kkt-color-semantic-background-muted)",
    },
    "&[aria-invalid='true']": {
      borderColor: "var(--kkt-color-semantic-danger-default)",
    },
    "&[aria-invalid='true']:focus-visible": {
      boxShadow: "0 0 0 2px var(--kkt-color-semantic-danger-subtle)",
    },
  },
});

export const helperText = style({
  fontFamily: "var(--kkt-font-family-sans)",
  fontSize: "var(--kkt-font-size-sm)",
  lineHeight: "var(--kkt-font-line-height-normal)",
  color: "var(--kkt-color-semantic-foreground-muted)",
});

export const errorText = style({
  fontFamily: "var(--kkt-font-family-sans)",
  fontSize: "var(--kkt-font-size-sm)",
  lineHeight: "var(--kkt-font-line-height-normal)",
  color: "var(--kkt-color-semantic-danger-foreground)",
});
