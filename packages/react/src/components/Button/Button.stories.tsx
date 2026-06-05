import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { Button } from "./Button.js";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: { layout: "centered" },
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "ghost"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// --- Variants ---

export const Primary: Story = {
  args: { children: "Button", variant: "primary" },
};

export const Secondary: Story = {
  args: { children: "Button", variant: "secondary" },
};

export const Ghost: Story = {
  args: { children: "Button", variant: "ghost" },
};

// --- Sizes ---

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

// --- States ---

export const Disabled: Story = {
  args: { children: "Disabled", disabled: true },
};

export const Loading: Story = {
  args: { children: "Loading", loading: true },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px" }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};

// --- Interaction tests ---

export const KeyboardActivation: Story = {
  args: { children: "Press Enter or Space" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");

    await userEvent.tab();
    await expect(button).toHaveFocus();

    const clicks: number[] = [];
    button.addEventListener("click", () => clicks.push(1));

    await userEvent.keyboard("{Enter}");
    await expect(clicks.length).toBe(1);

    await userEvent.keyboard(" ");
    await expect(clicks.length).toBe(2);
  },
};

export const DisabledBlocksClick: Story = {
  args: { children: "Disabled", disabled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");

    await expect(button).toBeDisabled();
    await expect(button).toHaveAttribute("aria-disabled", "true");
  },
};

export const LoadingState: Story = {
  args: { children: "Saving", loading: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");

    await expect(button).toHaveAttribute("aria-busy", "true");
    await expect(button).toBeDisabled();
  },
};

export const FocusVisible: Story = {
  args: { children: "Focus me" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");

    await userEvent.tab();
    await expect(button).toHaveFocus();
  },
};
