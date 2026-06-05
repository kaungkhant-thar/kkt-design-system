// --- Size scale ---

export type SizeScale = "xs" | "sm" | "md" | "lg" | "xl";

// --- Variant maps ---

export type ColorVariant =
  | "default"
  | "accent"
  | "success"
  | "danger"
  | "warning"
  | "ghost";

export type ButtonVariant = "solid" | "outline" | "ghost" | "link";

export type BadgeVariant = ColorVariant;

// --- Common prop shapes ---

export interface SizeProps {
  size?: SizeScale;
}

export interface VariantProps<V extends string = ColorVariant> {
  variant?: V;
}

export interface DisabledProps {
  disabled?: boolean;
}

export interface LoadingProps {
  loading?: boolean;
}

export interface PolymorphicProps {
  as?: keyof HTMLElementTagNameMap;
}

// Base props every component accepts
export interface BaseComponentProps
  extends SizeProps,
    DisabledProps,
    PolymorphicProps {
  className?: string;
}
