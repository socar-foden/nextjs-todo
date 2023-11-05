import { FC, InputHTMLAttributes } from 'react';

const CheckBox: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  checked,
  onChange,
}) => {
  return (
    <input
      type='checkbox'
      checked={checked}
      onChange={onChange}
      className='scale-150 cursor-pointer'
    />
  );
};

export default CheckBox;
