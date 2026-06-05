import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card.js";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: { layout: "centered" },
  argTypes: {
    elevation: { control: "select", options: ["flat", "raised", "elevated"] },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Flat: Story = {
  args: {
    elevation: "flat",
    children: "Flat card with no shadow",
    style: { width: "300px" },
  },
};

export const Raised: Story = {
  args: {
    elevation: "raised",
    children: "Raised card with subtle shadow",
    style: { width: "300px" },
  },
};

export const Elevated: Story = {
  args: {
    elevation: "elevated",
    children: "Elevated card with prominent shadow",
    style: { width: "300px" },
  },
};

export const AllElevations: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
      <Card elevation="flat" style={{ width: "200px" }}>Flat</Card>
      <Card elevation="raised" style={{ width: "200px" }}>Raised</Card>
      <Card elevation="elevated" style={{ width: "200px" }}>Elevated</Card>
    </div>
  ),
};

export const WithContent: Story = {
  render: () => (
    <Card elevation="raised" style={{ width: "300px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <strong>Card Title</strong>
        <p style={{ margin: 0, color: "gray" }}>This card accepts any child content without layout restrictions.</p>
      </div>
    </Card>
  ),
};
