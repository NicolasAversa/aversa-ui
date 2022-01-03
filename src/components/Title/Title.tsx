import { ReactNode } from 'react';

type Props = {
  level?: 1 | 2 | 3 | 4 | 5;
  weight?: 'normal' | 'medium' | 'bold';
  className?: string;
  children: ReactNode;
};

const defaultProps = {
  level: 1,
  weight: 'normal',
  className: '',
};

export const Title = ({
  level, weight, children, className,
}: Props) => {
  const weights = {
    normal: 'font-normal',
    medium: 'font-medium',
    bold: 'font-bold',
  };

  const selectedWeight = weights[weight as keyof typeof weights];
  const titles = [
    <h1 className={`${className} text-4xl ${selectedWeight}`}>{children}</h1>,
    <h2 className={`${className} text-3xl ${selectedWeight}`}>{children}</h2>,
    <h3 className={`${className} text-2xl ${selectedWeight}`}>{children}</h3>,
    <h4 className={`${className} text-xl ${selectedWeight}`}>{children}</h4>,
    <h5 className={`${className} text-lg ${selectedWeight}`}>{children}</h5>,
  ];
  return level ? titles[level - 1] : null;
};

Title.defaultProps = defaultProps;
