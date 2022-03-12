import { ReactNode } from 'react';

type Props = {
  className?: string;
  children: ReactNode;
};

const defaultProps = {
  className: '',
};

export const Card = ({ className, children }: Props) => {
  const spacing = 'p-8 space-y-4 rounded-3xl';
  const effects = 'shadow-lg bg-white';

  return (
    <section className={[spacing, effects, className].join(' ')}>
      {children}
    </section>
  );
};

Card.defaultProps = defaultProps;
