import { DetailedHTMLProps, forwardRef, TextareaHTMLAttributes } from 'react';

type Props = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export const TextArea = forwardRef<HTMLTextAreaElement, Props>((props, ref) => (
  <textarea
    ref={ref}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    className="p-4 rounded-lg border border-gray-200 w-full placeholder:text-sm placeholder:text-gray-400"
  />
));
