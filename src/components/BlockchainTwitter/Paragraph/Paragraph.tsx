import { ReactNode } from 'react';

type Props = {
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  className?: string;
  children: ReactNode;
};

const defaultProps = {
  weight: 'normal',
  className: '',
};

export const Paragraph = ({ weight, children, className }: Props) => {
  const weights = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const selectedWeight = weights[weight as keyof typeof weights];
  return (
    <p className={`text-sm ${selectedWeight} ${className} text-gray-900`}>
      {children}
    </p>
  );
};

Paragraph.defaultProps = defaultProps;
