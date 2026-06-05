import { style, styleVariants } from "@vanilla-extract/css";

export const base = style({
  backgroundColor: "var(--kkt-color-semantic-background-default)",
  borderRadius: "var(--kkt-border-radius-lg)",
  padding: "var(--kkt-spacing-4)",
  border: "1px solid var(--kkt-color-semantic-border-default)",
});

export const elevations = styleVariants({
  flat: {
    boxShadow: "var(--kkt-shadow-none)",
  },
  raised: {
    boxShadow: "var(--kkt-shadow-sm)",
  },
  elevated: {
    boxShadow: "var(--kkt-shadow-md)",
  },
});
