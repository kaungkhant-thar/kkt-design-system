import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within, waitFor } from "storybook/test";
import { Modal } from "./Modal.js";
import { Button } from "../Button/Button.js";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Modal>;

function ModalDemo({
  title = "Modal Title",
  children = <p>Modal body content.</p>,
  closeOnBackdrop = true,
}: {
  title?: string;
  children?: React.ReactNode;
  closeOnBackdrop?: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        closeOnBackdrop={closeOnBackdrop}
      >
        {children}
      </Modal>
    </>
  );
}

export const Default: Story = {
  render: () => <ModalDemo />,
};

export const LongContent: Story = {
  render: () => (
    <ModalDemo title="Long Content">
      {Array.from({ length: 20 }, (_, i) => (
        <p key={i}>Paragraph {i + 1} — scrollable content inside the modal.</p>
      ))}
    </ModalDemo>
  ),
};

export const WithInteractiveContent: Story = {
  render: () => (
    <ModalDemo title="With Actions">
      <p>This modal has focusable elements inside.</p>
      <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Confirm</Button>
      </div>
    </ModalDemo>
  ),
};

export const NoBackdropClose: Story = {
  render: () => (
    <ModalDemo title="Sticky Modal" closeOnBackdrop={false}>
      <p>Clicking the backdrop won't close this modal. Use the ✕ button.</p>
    </ModalDemo>
  ),
};

// --- Interaction tests ---

export const AriaAttributes: Story = {
  render: () => <ModalDemo title="Aria Test" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole("button", { name: "Open Modal" }));

    const dialog = await canvas.findByRole("dialog");
    await expect(dialog).toHaveAttribute("aria-modal", "true");
    await expect(dialog).toHaveAttribute("aria-labelledby");

    const labelId = dialog.getAttribute("aria-labelledby")!;
    const titleEl = canvasElement.ownerDocument.getElementById(labelId);
    await expect(titleEl?.textContent).toBe("Aria Test");
  },
};

export const EscapeDismissal: Story = {
  render: () => <ModalDemo title="Escape Test" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole("button", { name: "Open Modal" }));
    await canvas.findByRole("dialog");

    await userEvent.keyboard("{Escape}");

    await waitFor(() =>
      expect(canvas.queryByRole("dialog")).not.toBeInTheDocument()
    );
  },
};

export const FocusRestoration: Story = {
  render: () => <ModalDemo title="Focus Restoration" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: "Open Modal" });

    await userEvent.click(trigger);
    await canvas.findByRole("dialog");

    await userEvent.keyboard("{Escape}");

    await waitFor(() => expect(trigger).toHaveFocus());
  },
};

export const FocusTrap: Story = {
  render: () => (
    <ModalDemo title="Focus Trap">
      <div style={{ display: "flex", gap: "8px" }}>
        <Button variant="secondary" id="btn-cancel">Cancel</Button>
        <Button variant="primary" id="btn-confirm">Confirm</Button>
      </div>
    </ModalDemo>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole("button", { name: "Open Modal" }));
    const dialog = await canvas.findByRole("dialog");
    const withinDialog = within(dialog);

    // Dialog receives focus on open; Tab cycles: Close → Cancel → Confirm → wraps to Close
    await userEvent.tab();
    await expect(withinDialog.getByRole("button", { name: "Close" })).toHaveFocus();

    await userEvent.tab();
    await expect(withinDialog.getByRole("button", { name: "Cancel" })).toHaveFocus();

    await userEvent.tab();
    await expect(withinDialog.getByRole("button", { name: "Confirm" })).toHaveFocus();

    // Wrap forward — should cycle back to Close
    await userEvent.tab();
    await expect(withinDialog.getByRole("button", { name: "Close" })).toHaveFocus();

    // Shift+Tab wraps back to last
    await userEvent.tab({ shift: true });
    await expect(withinDialog.getByRole("button", { name: "Confirm" })).toHaveFocus();
  },
};
