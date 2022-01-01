import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from './Card';

export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Card> = (args) => <div className="w-1/4 mx-auto"><Card {...args} /></div>;

export const Primary = Template.bind({});
Primary.args = {
  user: '0x123j123h12g312tg3fv3v',
  body: 'Lorem ipsum asda da sda s da s da sd',
  image: 'https://i.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.webp',
};
