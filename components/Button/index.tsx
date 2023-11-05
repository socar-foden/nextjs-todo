import { ButtonHTMLAttributes, FC } from 'react';
import { ButtonVariant } from './type';
import { twMerge } from 'tailwind-merge';
import { ButtonClassMap } from './constants';
import Spinner from '../Spinner';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isLoading?: boolean;
}

const Button: FC<Props> = ({
  variant = 'primary',
  isLoading = false,
  disabled = false,
  children,
  ...props
}) => {
  return (
    <button
      className={twMerge(
        'rounded-[8px] text-white py-1 px-3 hover:opacity-70 h-8 break-keep relative transition-all',
        ButtonClassMap[variant],
        isLoading && 'hover:opacity-100',
        disabled && 'bg-gray-400 hover:opacity-100'
      )}
      {...props}
    >
      <span className={twMerge(isLoading ? 'invisible' : 'visible')}>
        {children}
      </span>
      {isLoading && (
        <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
          <Spinner />
        </div>
      )}
    </button>
  );
};

export default Button;
