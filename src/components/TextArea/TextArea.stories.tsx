import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextArea } from './TextArea';

export default {
  title: 'TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <TextArea {...args} />
);

export const Default = Template.bind({});
Default.args = { placeholder: 'Write your message', rows: 3 };
