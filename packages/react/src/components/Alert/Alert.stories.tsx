import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within } from "storybook/test";
import { Alert } from "./Alert.js";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: { layout: "padded" },
  argTypes: {
    variant: { control: "select", options: ["info", "success", "warning", "error"] },
    title: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: { variant: "info", children: "Your log file is being processed." },
};

export const Success: Story = {
  args: { variant: "success", title: "Analysis complete", children: "12 anomalies identified across 3 services." },
};

export const Warning: Story = {
  args: { variant: "warning", title: "Large file detected", children: "Files over 100 MB may take several minutes to process." },
};

export const Error: Story = {
  args: { variant: "error", title: "Upload failed", children: "The file format is not supported. Please upload a .log or .txt file." },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "480px" }}>
      <Alert variant="info">Your log file is being processed.</Alert>
      <Alert variant="success" title="Analysis complete">12 anomalies identified.</Alert>
      <Alert variant="warning" title="Large file">Files over 100 MB may take longer.</Alert>
      <Alert variant="error" title="Upload failed">Unsupported file format.</Alert>
    </div>
  ),
};

export const Dismissible: Story = {
  render: () => {
    const [visible, setVisible] = useState(true);
    return visible ? (
      <Alert variant="info" onClose={() => setVisible(false)}>
        Click ✕ to dismiss this alert.
      </Alert>
    ) : (
      <p style={{ color: "#666", fontSize: "14px" }}>Alert dismissed.</p>
    );
  },
};

export const DismissInteraction: Story = {
  render: () => {
    const [visible, setVisible] = useState(true);
    return visible ? (
      <Alert variant="warning" title="Heads up" onClose={() => setVisible(false)}>
        This will be dismissed.
      </Alert>
    ) : (
      <span data-testid="dismissed">dismissed</span>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const alert = canvas.getByRole("alert");
    await expect(alert).toBeInTheDocument();

    const closeBtn = canvas.getByRole("button", { name: "Dismiss" });
    await userEvent.click(closeBtn);

    await expect(canvas.queryByRole("alert")).not.toBeInTheDocument();
  },
};

export const RoleAlert: Story = {
  args: { variant: "error", children: "Something went wrong." },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("alert")).toBeInTheDocument();
  },
};
