import { FC, InputHTMLAttributes } from 'react';

const TextInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  value,
  onChange,
}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className='focus:outline-none border border-gray-300 rounded-[8px] px-2 py-1'
    />
  );
};

export default TextInput;
