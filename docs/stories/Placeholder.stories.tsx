import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { VERSION } from "@kkt/react";

function Placeholder(): React.JSX.Element {
  return (
    <div
      style={{
        padding: "var(--kkt-spacing-6)",
        fontFamily: "var(--kkt-font-family-sans)",
        background: "var(--kkt-color-semantic-background-subtle)",
        border: "1px solid var(--kkt-color-semantic-border-default)",
        borderRadius: "var(--kkt-border-radius-lg)",
        maxWidth: 400,
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: "var(--kkt-font-size-xl)",
          fontWeight: "var(--kkt-font-weight-semibold)",
          color: "var(--kkt-color-semantic-foreground-default)",
        }}
      >
        @kkt design system
      </h2>
      <p
        style={{
          marginTop: "var(--kkt-spacing-2)",
          fontSize: "var(--kkt-font-size-sm)",
          color: "var(--kkt-color-semantic-foreground-muted)",
        }}
      >
        Storybook is set up. Token CSS custom properties are loaded globally.
        <br />
        <code>@kkt/react</code> version: <strong>{VERSION}</strong>
      </p>
    </div>
  );
}

const meta: Meta<typeof Placeholder> = {
  title: "Design System/Placeholder",
  component: Placeholder,
};

export default meta;
type Story = StoryObj<typeof Placeholder>;

export const Default: Story = {};
