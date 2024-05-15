import { StoryFn, Meta } from "@storybook/react";
import React from "react";
import { withDesign } from "storybook-addon-designs";

import { Icon, Icons } from "../IconComponents";

import { Label } from "./index";

const LabelStory: Meta<typeof Label> = {
  title: "V1 Components/Label",
  component: Label,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/PtwFhadxwUaxujtjfUuxZB/MBO-Styles-%26-Components?node-id=4956%3A31007",
    },
  },
};

export default LabelStory;

const Template: StoryFn<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default Label",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Label",
  variant: "primary",
  wordBreak: "break-word",
};

export const Action = Template.bind({});
Action.args = {
  children: "Action Label",
  variant: "action",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary Label",
  variant: "secondary",
};

export const Success = Template.bind({});
Success.args = {
  children: (
    <>
      <Icons name={Icon.STATUS} status variant="success" /> Success Label
    </>
  ),
  variant: "success",
};

export const Danger = Template.bind({});
Danger.args = {
  children: (
    <>
      <Icons name={Icon.STATUS} status variant="error" /> Danger Label
    </>
  ),
  variant: "error",
};

export const Warning = Template.bind({});
Warning.args = {
  children: (
    <>
      <Icons name={Icon.STATUS} status variant="warning" /> Warning Label
    </>
  ),
  type: "value",
  variant: "warning",
};

export const Light = Template.bind({});
Light.args = {
  children: "Light Label",
  variant: "light",
};

export const Dark = Template.bind({});
Dark.args = {
  children: "Dark Label",
  type: "name",
  variant: "dark",
};

export const NameSmallPrimary = Template.bind({});
NameSmallPrimary.args = {
  children: "Name Small Primary",
  type: "name",
  variant: "primary",
};

export const ValueLargeSecondary = Template.bind({});
ValueLargeSecondary.args = {
  children: "Value Large Secondary",
  type: "value",
  size: "lg",
  variant: "secondary",
};

export const CustomLabel = Template.bind({});
CustomLabel.args = {
  children: "Custom Label",
  variant: "success",
};

export const Badge = Template.bind({});
Badge.args = {
  type: "badge",
  display: true,
  variant: "success",
  children: (
    <>
      <Icons name={Icon.STATUS} /> <label> Test label </label>{" "}
    </>
  ),
};

export const Ellipsis = Template.bind({});
Ellipsis.args = {
  children: "Ellipsis Label",
  ellipsis: true,
};

export const LabelStrong = Template.bind({});
LabelStrong.args = {
  children: "Strong Label",
  customClassName: "strong",
};

export const LabelChip = Template.bind({});
LabelChip.args = {
  type: "chip",
  children: (
    <>
      Label Chip
      <Icons name={Icon.STATUS} />
    </>
  ),
};

export const Labelwhite = Template.bind({});
Labelwhite.args = {
  variant: "white",
  customClassName: "strong",
  children: (
    <div style={{ background: "gray", padding: "1rem" }}>
      <span>While Label</span>
    </div>
  ),
};
