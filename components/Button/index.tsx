import { ButtonHTMLAttributes, FC } from 'react';
import { ButtonVariant } from './type';
import { twMerge } from 'tailwind-merge';
import { ButtonClassMap } from './constants';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  loading?: boolean;
}

const Button: FC<Props> = ({
  variant = 'primary',
  loading = false,
  disabled = false,
  children,
  ...props
}) => {
  return (
    <button
      className={twMerge(
        'rounded-[8px] text-white py-1 px-3 hover:opacity-70',
        ButtonClassMap[variant],
        disabled && 'bg-gray-400 hover:opacity-100'
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
