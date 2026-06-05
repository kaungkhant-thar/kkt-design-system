import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within } from "storybook/test";
import { Select } from "./Select.js";

const FRUIT_OPTIONS = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "durian", label: "Durian", disabled: true },
];

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  parameters: { layout: "centered" },
  decorators: [(Story) => <div style={{ width: "280px" }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    id: "fruit-select",
    label: "Fruit",
    options: FRUIT_OPTIONS,
    placeholder: "Choose a fruit...",
  },
};

export const WithHelperText: Story = {
  args: {
    id: "helper-select",
    label: "Fruit",
    options: FRUIT_OPTIONS,
    placeholder: "Choose a fruit...",
    helperText: "Durian is disabled.",
  },
};

export const WithError: Story = {
  args: {
    id: "error-select",
    label: "Fruit",
    options: FRUIT_OPTIONS,
    error: "Please select a fruit.",
  },
};

export const Disabled: Story = {
  args: {
    id: "disabled-select",
    label: "Fruit",
    options: FRUIT_OPTIONS,
    disabled: true,
  },
};

// --- Interaction tests ---

export const SelectsOption: Story = {
  args: {
    id: "interact-select",
    label: "Fruit",
    options: FRUIT_OPTIONS,
    placeholder: "Choose a fruit...",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");

    await userEvent.selectOptions(select, "banana");
    await expect(select).toHaveValue("banana");
  },
};

export const ErrorStateAttributes: Story = {
  args: {
    id: "aria-select",
    label: "Fruit",
    options: FRUIT_OPTIONS,
    error: "Please select a fruit.",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");

    await expect(select).toHaveAttribute("aria-invalid", "true");
    const describedBy = select.getAttribute("aria-describedby");
    await expect(describedBy).toBeTruthy();
    const errorEl = canvasElement.ownerDocument.getElementById(describedBy!);
    await expect(errorEl?.textContent).toBe("Please select a fruit.");
  },
};

export const FocusBehavior: Story = {
  args: {
    id: "focus-select",
    label: "Fruit",
    options: FRUIT_OPTIONS,
    placeholder: "Choose a fruit...",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");

    await userEvent.tab();
    await expect(select).toHaveFocus();
  },
};
