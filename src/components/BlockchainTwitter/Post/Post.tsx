import { Paragraph } from '../Paragraph';

type Props = {
  image?: string;
  user?: string;
  body: string;
};

const defaultProps = {
  image: '',
  user: '',
};

export const Post = ({ image, user, body }: Props) => {
  const spacing = 'rounded-3xl';
  const imageStyle = 'w-full h-auto rounded-t-3xl';
  const effects = 'shadow-md bg-white';

  return (
    <article className={[spacing, effects].join(' ')}>
      {image && (
        <img src={image} className={imageStyle} alt={`Posted by ${user}`} />
      )}
      <div className="p-6 space-y-1">
        <Paragraph weight="semibold">{user}</Paragraph>
        <Paragraph>{body}</Paragraph>
      </div>
    </article>
  );
};

Post.defaultProps = defaultProps;
