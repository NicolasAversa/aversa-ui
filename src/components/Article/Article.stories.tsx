import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Article } from './Article';

export default {
  title: 'Article',
  component: Article,
} as ComponentMeta<typeof Article>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Article> = (args) => <div className="w-1/4 mx-auto"><Article {...args} /></div>;

export const Primary = Template.bind({});
Primary.args = {
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  image: 'https://i.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.webp',
};
