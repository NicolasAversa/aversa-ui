import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Home } from './Home';

export default {
  title: 'Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-50 py-6">
        <Story />
      </div>
    ),
  ],
  argTypes: { onSubmit: { action: 'Form submission' } },
} as ComponentMeta<typeof Home>;

export type Props = {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (data: {}) => void;
};

const Template: ComponentStory<typeof Home> = ({ onSubmit }: Props) => (
  <Home onSubmit={onSubmit} />
);

export const Default = Template.bind({});
