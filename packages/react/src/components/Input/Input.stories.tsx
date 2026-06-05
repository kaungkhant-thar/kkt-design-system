import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { Input } from "./Input.js";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    id: "default-input",
    label: "Email",
    placeholder: "you@example.com",
  },
};

export const WithHelperText: Story = {
  args: {
    id: "helper-input",
    label: "Username",
    placeholder: "kaung",
    helperText: "Must be at least 3 characters.",
  },
};

export const WithError: Story = {
  args: {
    id: "error-input",
    label: "Password",
    type: "password",
    error: "Password must be at least 8 characters.",
  },
};

export const Disabled: Story = {
  args: {
    id: "disabled-input",
    label: "Disabled field",
    placeholder: "Cannot type here",
    disabled: true,
  },
};

// --- Interaction tests ---

export const FocusBehavior: Story = {
  args: {
    id: "focus-input",
    label: "Focus test",
    placeholder: "Tab to focus",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");

    await userEvent.tab();
    await expect(input).toHaveFocus();
  },
};

export const TypesText: Story = {
  args: {
    id: "type-input",
    label: "Type here",
    placeholder: "Start typing...",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");

    await userEvent.click(input);
    await userEvent.type(input, "Hello world");
    await expect(input).toHaveValue("Hello world");
  },
};

export const ErrorStateAttributes: Story = {
  args: {
    id: "aria-error-input",
    label: "Email",
    error: "Invalid email address.",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");

    await expect(input).toHaveAttribute("aria-invalid", "true");
    const describedBy = input.getAttribute("aria-describedby");
    await expect(describedBy).toBeTruthy();
    const errorEl = canvasElement.querySelector(`#${describedBy}`);
    await expect(errorEl).toBeTruthy();
    await expect(errorEl?.textContent).toBe("Invalid email address.");
  },
};
