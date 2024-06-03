import { Meta, StoryObj } from "@storybook/react";
import { Label } from "../components/Label";

const meta = {
  title: "UI/Labels/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select" },
    customColor: { control: "color" },
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: "hola mundo",
  },
};

export const Capitalize: Story = {
  args: {
    name: "hola mundo",
    capitalize: true,
  },
};

export const Secondary: Story = {
  args: {
    name: "hola mundo",
    color: "text-secondary",
  },
};

export const CustomColor: Story = {
  args: {
    name: "hola mundo",
    customColor: "cyan",
  },
};
