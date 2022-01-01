import { ReactNode } from 'react';

type Props = {
  icon?: string;
  fullWidth?: boolean;
  color?: 'indigo' | 'red' | 'emerald';
  children: ReactNode;
};

const defaultProps = {
  icon: '',
  color: 'indigo',
  fullWidth: false,
};

export const Button = ({
  icon,
  fullWidth,
  color,
  children,
}: Props) => {
  const colors = {
    indigo:
      'bg-indigo-200 text-indigo-800 shadow-indigo-200 hover:shadow-indigo-200',
    red: 'bg-red-200 text-red-800 shadow-red-200 hover:shadow-red-200',
    emerald:
      'bg-emerald-200 text-emerald-800 shadow-emerald-200 hover:shadow-emerald-200',
  };
  const spacing = 'px-5 py-3 rounded-xl';
  const text = 'uppercase text-sm font-bold';
  const width = fullWidth ? 'w-full' : '';
  const animation = 'transition ease-in-out hover:-translate-y-1 shadow-md hover:shadow-lg';

  return (
    <button
      type="button"
      className={[
        text,
        spacing,
        width,
        animation,
        colors[color as keyof typeof colors],
      ].join(' ')}
    >
      {icon && <img src={icon} alt="Icon" />}
      {children}
    </button>
  );
};

Button.defaultProps = defaultProps;
