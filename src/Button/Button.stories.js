import Button from "./Button";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Button",
  component: Button
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Primary",
  startIcon: "download"
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  children: "Outlined"
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
  children: "Text"
};
