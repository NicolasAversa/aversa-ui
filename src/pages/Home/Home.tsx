/* eslint-disable react/jsx-props-no-spreading */
import { Post } from 'components/Post';
import { Button } from 'components/Button';
import { Card } from 'components/Card';
import { Form } from 'components/Form';
import { TextArea } from 'components/TextArea';
import { Props } from './Home.stories';

export const Home = ({ onSubmit }:Props) => (
  <main className="max-w-lg mx-auto space-y-8">
    <Form onSubmit={(data) => onSubmit(data)}>
      {({ register }) => (
        <Card>
          <TextArea {...register('text')} rows={2} placeholder="Write your crypto-tweet" />
          <Button submit className="self-end" fullWidth>Send crypto-twit</Button>
        </Card>
      )}
    </Form>
    <section className="grid gap-4">
      <Post
        user="Gratefully monkey"
        body="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        image="https://i.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.webp"
      />
      <Post
        user="Gratefully monkey"
        body="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        image="https://i.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.webp"
      />
      <Post
        user="Gratefully monkey"
        body="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        image="https://i.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.webp"
      />
      <Post
        user="Gratefully monkey"
        body="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        image="https://i.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.webp"
      />
    </section>
  </main>
);
