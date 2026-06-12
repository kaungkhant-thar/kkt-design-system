import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within } from "storybook/test";
import { CodeBlock } from "./CodeBlock.js";

const meta: Meta<typeof CodeBlock> = {
  title: "Components/CodeBlock",
  component: CodeBlock,
  parameters: { layout: "padded" },
  argTypes: {
    language: { control: "text" },
    showCopyButton: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof CodeBlock>;

const LOG_SAMPLE = `[2024-01-15 03:42:17] ERROR kernel: Out of memory: Kill process 14821 (node) score 892
[2024-01-15 03:42:17] INFO  systemd: node.service: Main process exited
[2024-01-15 03:42:18] WARN  nginx: upstream timed out (110: Connection timed out)
[2024-01-15 03:42:19] ERROR postgres: could not connect to the primary server`;

const JSON_SAMPLE = `{
  "anomalies": [
    {
      "severity": "critical",
      "message": "OOM killer triggered",
      "timestamp": "2024-01-15T03:42:17Z",
      "process": "node (14821)"
    }
  ],
  "root_cause": "Memory exhaustion under sustained load"
}`;

export const LogOutput: Story = {
  args: {
    code: LOG_SAMPLE,
    language: "log",
  },
};

export const JsonAnalysis: Story = {
  args: {
    code: JSON_SAMPLE,
    language: "json",
  },
};

export const NoCopyButton: Story = {
  args: {
    code: LOG_SAMPLE,
    language: "log",
    showCopyButton: false,
  },
};

export const NoLanguage: Story = {
  args: {
    code: "npm install @kkt771/react",
  },
};

export const CopyInteraction: Story = {
  args: {
    code: "console.log('hello')",
    language: "js",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const copyBtn = canvas.getByRole("button", { name: "Copy code" });

    await expect(copyBtn).toBeInTheDocument();
    await userEvent.click(copyBtn);

    await expect(
      canvas.getByRole("button", { name: "Copied" })
    ).toBeInTheDocument();
  },
};
