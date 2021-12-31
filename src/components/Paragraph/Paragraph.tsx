import { ReactNode } from 'react';

type Props = {
  weight?: 'normal' | 'medium' | 'bold';
  className?: string;
  children: ReactNode;
};

const defaultProps = {
  weight: 'normal',
  className: '',
};

export const Paragraph = ({
  weight, children, className,
}: Props) => {
  const weights = {
    normal: 'font-normal',
    medium: 'font-medium',
    bold: 'font-bold',
  };

  const selectedWeight = weights[weight as keyof typeof weights];
  return (
    <p className={`text-base ${selectedWeight} ${className}`}>
      {children}
    </p>
  );
};

Paragraph.defaultProps = defaultProps;
