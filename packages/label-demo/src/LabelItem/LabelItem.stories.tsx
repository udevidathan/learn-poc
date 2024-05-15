import { StoryFn, Meta } from "@storybook/react";
import React from "react";
import { withDesign } from "storybook-addon-designs";

import { Label } from "../Label";

import { LabelItem } from "./index";

const LabelItemStory: Meta<typeof LabelItem> = {
  title: "V1 Components/LabelItem",
  component: LabelItem,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/PtwFhadxwUaxujtjfUuxZB/MBO-Styles-%26-Components?node-id=4956%3A31007",
    },
  },
};

export default LabelItemStory;

const Template: StoryFn<typeof LabelItem> = (args) => (
  <div style={{ width: "150px" }}>
    <LabelItem {...args} />{" "}
  </div>
);

export const Default = Template.bind({});
Default.args = {
  name: <Label>Job #</Label>,
  value: <Label variant="dark">23-00052</Label>,
};

export const DefaultEllipsis = Template.bind({});

DefaultEllipsis.args = {
  name: <Label>Job #</Label>,
  value: (
    <Label variant="dark" ellipsis>
      23-00052 23-00052 23-00052 23-00052 23-00052 23-00052
    </Label>
  ),
};

export const Block = Template.bind({});
Block.args = {
  name: <Label>Job #</Label>,
  value: (
    <Label variant="dark" ellipsis>
      23-00052
    </Label>
  ),
  block: true,
};
export const BlockEllipsis = Template.bind({});
BlockEllipsis.args = {
  name: <Label>Job #</Label>,
  value: (
    <Label variant="dark" ellipsis>
      23-00052 23-00052 23-00052 23-00052 23-00052
    </Label>
  ),
  block: true,
};
export const withAmount = Template.bind({});
withAmount.args = {
  name: <Label>Total</Label>,
  amount: (
    <Label variant="primary" customClassName="strong" size="xl">
      $12,000.5
    </Label>
  ),
  value: <Label size="xs">USD</Label>,
  block: true,
};
