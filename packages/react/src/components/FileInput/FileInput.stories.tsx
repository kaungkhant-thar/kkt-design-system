import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within } from "storybook/test";
import { FileInput } from "./FileInput.js";

const meta: Meta<typeof FileInput> = {
  title: "Components/FileInput",
  component: FileInput,
  parameters: { layout: "padded" },
  argTypes: {
    multiple: { control: "boolean" },
    disabled: { control: "boolean" },
    accept: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof FileInput>;

export const Default: Story = {
  args: {
    id: "file-default",
    label: "Upload file",
  },
};

export const LogFiles: Story = {
  args: {
    id: "file-logs",
    label: "Upload log file",
    accept: ".log,.txt",
    helperText: "Accepts .log and .txt files up to 50 MB",
  },
};

export const Multiple: Story = {
  args: {
    id: "file-multiple",
    label: "Upload log files",
    accept: ".log,.txt",
    multiple: true,
    helperText: "Select one or more log files",
  },
};

export const WithError: Story = {
  args: {
    id: "file-error",
    label: "Upload log file",
    accept: ".log,.txt",
    error: "File size exceeds the 50 MB limit.",
  },
};

export const Disabled: Story = {
  args: {
    id: "file-disabled",
    label: "Upload log file",
    disabled: true,
    helperText: "File upload is currently unavailable.",
  },
};

export const DropzoneAccessibility: Story = {
  args: { id: "file-a11y", label: "Upload log file" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const dropzone = canvas.getByRole("button", { name: /browse/i });
    await expect(dropzone).toBeInTheDocument();

    await userEvent.tab();
    await expect(dropzone).toHaveFocus();
  },
};
