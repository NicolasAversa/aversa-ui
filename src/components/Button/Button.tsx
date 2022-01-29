import { ReactNode } from 'react';

type Props = {
  submit?: boolean;
  icon?: string;
  fullWidth?: boolean;
  color?: 'indigo' | 'red' | 'emerald';
  children: ReactNode;
  className?: string;
};

const defaultProps = {
  submit: false,
  icon: '',
  color: 'indigo',
  fullWidth: false,
  className: '',
};

export const Button = ({
  submit,
  icon,
  fullWidth,
  color,
  children,
  className,
}: Props) => {
  const colors = {
    indigo:
      'bg-indigo-400 text-indigo-50 shadow-indigo-200 hover:shadow-indigo-200',
    red: 'bg-red-400 text-red-50 shadow-red-200 hover:shadow-red-200',
    emerald:
      'bg-emerald-400 text-emerald-50 shadow-emerald-200 hover:shadow-emerald-200',
  };
  const spacing = 'px-6 py-2 rounded-lg';
  const text = 'text-sm font-semibold tracking-wide';
  const width = fullWidth ? 'w-full' : '';
  const animation = 'transition ease-in-out hover:-translate-y-1 shadow-md hover:shadow-lg';

  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={[
        text,
        spacing,
        width,
        animation,
        colors[color as keyof typeof colors],
        className,
      ].join(' ')}
    >
      {icon && <img src={icon} alt="Icon" />}
      {children}
    </button>
  );
};

Button.defaultProps = defaultProps;
