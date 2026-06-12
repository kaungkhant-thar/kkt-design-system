import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";
import { Spinner } from "./Spinner.js";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: { layout: "centered" },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    variant: { control: "select", options: ["default", "accent", "white"] },
    label: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: { size: "md", variant: "default" },
};

export const Accent: Story = {
  args: { size: "md", variant: "accent" },
};

export const White: Story = {
  render: () => (
    <div style={{ padding: "16px", backgroundColor: "#1a1a2e", borderRadius: "8px" }}>
      <Spinner variant="white" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
};

export const Accessibility: Story = {
  args: { size: "md", label: "Uploading file…" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const spinner = canvas.getByRole("status");

    await expect(spinner).toHaveAttribute("aria-label", "Uploading file…");
  },
};
