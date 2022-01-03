/* eslint-disable react/jsx-props-no-spreading */
import { Article } from 'components/Article';
import { Button } from 'components/Button';
import { Card } from 'components/Card';
import { Form } from 'components/Form';
import { TextArea } from 'components/TextArea';
import { Props } from './Home.stories';

export const Home = ({ onSubmit }:Props) => (
  <main className="max-w-screen-sm mx-auto space-y-4">
    <Card>
      <Form onSubmit={(data) => onSubmit(data)} className="flex flex-col space-y-4">
        {({ register }) => (
          <>
            <TextArea {...register('text')} placeholder="Write your message" />
            <Button submit className="self-end">Submit</Button>
          </>
        )}
      </Form>
    </Card>
    <section className="grid grid-cols-2 gap-4">
      <Article
        body="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        image="https://i.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.webp"
      />
      <Article
        body="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        image="https://i.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.webp"
      />
      <Article
        body="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        image="https://i.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.webp"
      />
      <Article
        body="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        image="https://i.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.webp"
      />
    </section>
  </main>
);
