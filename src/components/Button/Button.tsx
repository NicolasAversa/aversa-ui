import { FC } from 'react';

type Props = {
  icon?: string;
  color?: string;
  fullWidth?: boolean;
};

const defaultProps = {
  icon: '',
  color: 'indigo',
  fullWidth: false,
};

export const Button: FC<Props> = ({
  icon,
  fullWidth,
  color,
  children,
  ...props
}) => {
  const colors = {
    indigo: 'bg-indigo-200 text-indigo-800 shadow-indigo-200 hover:shadow-indigo-200',
  };

  const spacing: string = 'px-5 py-3 rounded-xl';
  const text: string = 'uppercase text-sm font-bold';
  const width: string = fullWidth ? 'w-full' : '';
  const animation: string = 'transition ease-in-out hover:-translate-y-1 shadow-md hover:shadow-lg';

  return (
    <button
      {...props}
      type="button"
      className={[text, spacing, width, animation, colors[color]].join(' ')}
    >
      {icon && <img src={icon} alt="Icon" />}
      {children}
    </button>
  );
};

Button.defaultProps = defaultProps;
