import { Paragraph } from '../Paragraph';
import { Title } from '../Title';

type Props = {
  image?: string;
  user?: string;
  body: string;
};

const defaultProps = {
  image: '',
  user: '',
};

export const Article = ({ image, user, body }: Props) => {
  const spacing = 'pb-6 rounded-3xl space-y-4';
  const imageContainer = 'p-2';
  const imageStyle = 'w-full h-auto rounded-xl';
  const textStyle = 'px-6';
  const effects = 'shadow-md border border-blue-50 bg-white';

  return (
    <article className={[spacing, effects].join(' ')}>
      {user && <Title level={3} weight="medium" className={textStyle}>{user}</Title>}
      {image && (
        <div className={imageContainer}>
          <img src={image} className={imageStyle} alt="Icon" />
        </div>
      )}
      <Paragraph className={textStyle}>{body}</Paragraph>
    </article>
  );
};

Article.defaultProps = defaultProps;
