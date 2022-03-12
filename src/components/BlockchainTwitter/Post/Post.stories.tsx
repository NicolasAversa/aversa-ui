import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Post } from './Post';

export default {
  title: 'Blockchain Twitter/Post',
  component: Post,
} as ComponentMeta<typeof Post>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Post> = (args) => <div className="w-full max-w-sm mx-auto"><Post {...args} /></div>;

export const Primary = Template.bind({});
Primary.args = {
  image: 'https://i.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.webp',
  user: 'Anonymous duck',
  body: 'Hi! I hope you are having a very nice day! I send you my best wishes from the beach',
};
