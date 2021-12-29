import { FC } from 'react';

type Props = {
  icon?: string;
};

const defaultProps = {
  icon: '',
};

export const Button: FC<Props> = ({ icon, children, ...props }) => (
  <button {...props} type="button" className="px-5 py-3 uppercase">
    {icon && <img src={icon} alt="Icon" />}
    {children}
  </button>
);

Button.defaultProps = defaultProps;
