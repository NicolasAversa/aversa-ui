import { FC } from 'react';

type Props = {
  image?: string;
  body?: string;
};

const defaultProps = {
  image: '',
  body: '',
};

export const Card: FC<Props> = ({ image, body, ...props }) => {
  const spacing: string = 'px-4 py-8 rounded-xl';
  const imageStyle: string = '';
  const bodyStyle: string = 'text-base font-normal';
  const effects: string = 'shadow-md';

  return (
    <article className={[spacing, effects].join(' ')} {...props}>
      {image && <img src={image} className={imageStyle} alt="Icon" />}
      <p className={bodyStyle}>{body}</p>
    </article>
  );
};

Card.defaultProps = defaultProps;
