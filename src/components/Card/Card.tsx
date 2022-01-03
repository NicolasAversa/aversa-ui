import { ReactNode } from 'react';

type Props = {
  className?: string;
  children: ReactNode;
};

const defaultProps = {
  className: '',
};

export const Card = ({ className, children }: Props) => {
  const spacing = 'p-6 rounded-3xl';
  const effects = 'shadow-md border border-blue-50 bg-white';

  return (
    <section className={[spacing, effects, className].join(' ')}>
      {children}
    </section>
  );
};

Card.defaultProps = defaultProps;
