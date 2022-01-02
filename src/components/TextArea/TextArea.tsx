type Props = {
  // eslint-disable-next-line no-unused-vars
  register: (name: string) => {};
  name: string;
};

export const TextArea = ({ register, name }: Props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <textarea {...register(name)} />
);
