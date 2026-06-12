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

export const hiddenInput = style({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0,0,0,0)",
  whiteSpace: "nowrap",
  borderWidth: 0,
});

export const dropzone = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "var(--kkt-spacing-2)",
  padding: "var(--kkt-spacing-8) var(--kkt-spacing-4)",
  border: "2px dashed var(--kkt-color-semantic-border-default)",
  borderRadius: "var(--kkt-border-radius-md)",
  backgroundColor: "var(--kkt-color-semantic-background-default)",
  cursor: "pointer",
  transition: "border-color 120ms ease, background-color 120ms ease",
  fontFamily: "var(--kkt-font-family-sans)",
  textAlign: "center",

  ":hover": {
    borderColor: "var(--kkt-color-semantic-accent-default)",
    backgroundColor: "var(--kkt-color-semantic-accent-subtle)",
  },
  ":focus-visible": {
    outline: "2px solid var(--kkt-color-semantic-accent-default)",
    outlineOffset: "2px",
    borderColor: "var(--kkt-color-semantic-accent-default)",
  },

  selectors: {
    "&[aria-disabled='true']": {
      cursor: "not-allowed",
      opacity: 0.5,
      pointerEvents: "none",
    },
  },
});

export const dropzoneActive = style({
  borderColor: "var(--kkt-color-semantic-accent-default)",
  backgroundColor: "var(--kkt-color-semantic-accent-subtle)",
});

export const dropzoneIcon = style({
  fontSize: "var(--kkt-font-size-2xl)",
  lineHeight: 1,
  color: "var(--kkt-color-semantic-foreground-muted)",
});

export const dropzoneText = style({
  fontSize: "var(--kkt-font-size-sm)",
  color: "var(--kkt-color-semantic-foreground-default)",
  fontWeight: "var(--kkt-font-weight-medium)",
});

export const dropzoneSubtext = style({
  fontSize: "var(--kkt-font-size-xs)",
  color: "var(--kkt-color-semantic-foreground-muted)",
});

export const fileList = style({
  display: "flex",
  flexDirection: "column",
  gap: "var(--kkt-spacing-2)",
  listStyle: "none",
  margin: 0,
  padding: 0,
});

export const fileItem = style({
  display: "flex",
  alignItems: "center",
  gap: "var(--kkt-spacing-2)",
  padding: "var(--kkt-spacing-2) var(--kkt-spacing-3)",
  border: "1px solid var(--kkt-color-semantic-border-default)",
  borderRadius: "var(--kkt-border-radius-md)",
  backgroundColor: "var(--kkt-color-semantic-background-muted)",
  fontFamily: "var(--kkt-font-family-sans)",
  fontSize: "var(--kkt-font-size-sm)",
});

export const fileName = style({
  flex: 1,
  minWidth: 0,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  color: "var(--kkt-color-semantic-foreground-default)",
});

export const fileSize = style({
  flexShrink: 0,
  color: "var(--kkt-color-semantic-foreground-muted)",
  fontSize: "var(--kkt-font-size-xs)",
});

export const removeButton = style({
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
  color: "var(--kkt-color-semantic-foreground-muted)",
  padding: 0,
  fontSize: "var(--kkt-font-size-sm)",
  lineHeight: 1,
  transition: "color 120ms ease",

  ":hover": {
    color: "var(--kkt-color-semantic-danger-foreground)",
  },
  ":focus-visible": {
    outline: "2px solid var(--kkt-color-semantic-accent-default)",
    outlineOffset: "2px",
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
