import type { SizeScale, ColorVariant, ButtonVariant } from "./types.js";

/**
 * Shape that every vanilla-extract component style contract must satisfy.
 * Adapter packages call `createGlobalThemeContract` or `styleVariants`
 * against these keys so token changes propagate automatically.
 */

export type SizeVariantMap<T> = Record<SizeScale, T>;
export type ColorVariantMap<T> = Record<ColorVariant, T>;
export type ButtonVariantMap<T> = Record<ButtonVariant, T>;

// Style contract for a component that supports both size and color variants
export interface ComponentStyleContract<StyleValue = string> {
  base: StyleValue;
  sizes: SizeVariantMap<StyleValue>;
  variants: ColorVariantMap<StyleValue>;
}

// Style contract for interactive components (adds focus/hover/disabled states)
export interface InteractiveStyleContract<StyleValue = string>
  extends ComponentStyleContract<StyleValue> {
  states: {
    hover: StyleValue;
    focus: StyleValue;
    active: StyleValue;
    disabled: StyleValue;
  };
}
