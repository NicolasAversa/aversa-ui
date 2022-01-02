import { ReactNode } from 'react';
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';

type FormProps<TFormValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  // eslint-disable-next-line no-unused-vars
  children: (methods: UseFormReturn<TFormValues>) => ReactNode;
};

export const Form = <TFormValues extends Record<string, any> = Record<string, any>>({
  onSubmit,
  children,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>();

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
  );
};
