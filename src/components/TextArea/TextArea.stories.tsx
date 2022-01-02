/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../Button';
import { Form } from '../Form';
import { TextArea } from './TextArea';

export default {
  title: 'TextArea',
  component: TextArea,
  argTypes: { onSubmit: { action: 'Form submission' } },
} as ComponentMeta<typeof TextArea>;

type Props = {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (data: {}) => void;
};

const Template: ComponentStory<typeof Form> = ({ onSubmit }: Props) => (
  <Form onSubmit={(data) => onSubmit(data)}>
    {({ register }) => (
      <div className="flex flex-col space-y-4 max-w-screen-sm mx-auto">
        <TextArea {...register('text')} />
        <Button submit className="w-1/4 self-end" color="red">Submit</Button>
      </div>
    )}
  </Form>
);

export const Default = Template.bind({});
