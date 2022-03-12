import { ReactNode } from 'react';
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';

type FormProps<TFormValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  className?: string;
  // eslint-disable-next-line no-unused-vars
  children: (methods: UseFormReturn<TFormValues>) => ReactNode;
};

const defaultProps = {
  className: '',
};

export const Form = <
  TFormValues extends Record<string, any> = Record<string, any>
>({
    onSubmit,
    children,
    className,
  }: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>();

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} className={className}>
      {children(methods)}
    </form>
  );
};

Form.defaultProps = defaultProps;
