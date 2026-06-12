import { style, styleVariants, keyframes } from "@vanilla-extract/css";

const spin = keyframes({
  to: { transform: "rotate(360deg)" },
});

export const base = style({
  display: "inline-block",
  borderRadius: "var(--kkt-border-radius-full)",
  borderStyle: "solid",
  borderTopColor: "transparent",
  animation: `${spin} 0.6s linear infinite`,
  flexShrink: 0,
});

export const sizes = styleVariants({
  sm: {
    width: "var(--kkt-spacing-4)",
    height: "var(--kkt-spacing-4)",
    borderWidth: "2px",
  },
  md: {
    width: "var(--kkt-spacing-6)",
    height: "var(--kkt-spacing-6)",
    borderWidth: "2px",
  },
  lg: {
    width: "var(--kkt-spacing-8)",
    height: "var(--kkt-spacing-8)",
    borderWidth: "3px",
  },
});

export const variants = styleVariants({
  default: {
    borderColor: "var(--kkt-color-semantic-border-strong)",
    borderTopColor: "transparent",
  },
  accent: {
    borderColor: "var(--kkt-color-semantic-accent-default)",
    borderTopColor: "transparent",
  },
  white: {
    borderColor: "rgba(255,255,255,0.4)",
    borderTopColor: "transparent",
  },
});
