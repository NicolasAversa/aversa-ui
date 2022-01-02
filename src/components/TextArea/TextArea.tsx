import { DetailedHTMLProps, forwardRef, TextareaHTMLAttributes } from 'react';

type Props = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  (props, ref) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <textarea ref={ref} {...props} className="bg-gray-50 p-4 rounded-xl border border-gray-200" />
  ),
);
