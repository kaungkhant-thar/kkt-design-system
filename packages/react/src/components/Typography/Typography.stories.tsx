import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Typography } from "./Typography.js";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  parameters: { layout: "padded" },
  argTypes: {
    variant: {
      control: "select",
      options: ["display", "heading", "body", "caption", "label"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Display: Story = {
  args: { variant: "display", children: "Display Text" },
};

export const Heading: Story = {
  args: { variant: "heading", children: "Heading Text" },
};

export const Body: Story = {
  args: { variant: "body", children: "Body text for paragraphs and longer content." },
};

export const Caption: Story = {
  args: { variant: "caption", children: "Caption text, muted and smaller." },
};

export const Label: Story = {
  args: { variant: "label", children: "Form Label" },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Typography variant="display">Display</Typography>
      <Typography variant="heading">Heading</Typography>
      <Typography variant="body">Body — the quick brown fox jumps over the lazy dog.</Typography>
      <Typography variant="caption">Caption — supplementary muted text</Typography>
      <Typography variant="label">Label</Typography>
    </div>
  ),
};

export const PolymorphicAs: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Typography variant="heading" as="h3">h3 with heading variant</Typography>
      <Typography variant="body" as="span">span with body variant</Typography>
    </div>
  ),
};
