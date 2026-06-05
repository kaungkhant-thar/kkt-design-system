/**
 * Merges class name strings, filtering out falsy values.
 * Intentionally lightweight — no clsx/twMerge dependency for zero-dep core.
 */
export function cx(
  ...classes: Array<string | undefined | null | false>
): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Returns a copy of `props` with the listed keys omitted.
 * Used by adapter packages to strip component-specific props before
 * spreading onto a DOM element.
 */
export function filterProps<T extends Record<string, unknown>>(
  props: T,
  keys: ReadonlyArray<keyof T>
): Omit<T, (typeof keys)[number]> {
  const result = { ...props };
  for (const key of keys) {
    delete result[key];
  }
  return result as Omit<T, (typeof keys)[number]>;
}
