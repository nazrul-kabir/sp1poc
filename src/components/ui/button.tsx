import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'default' | 'lg';
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'defsult', children, ...props }) => {
  const baseClasses = 'font-medium rounded focus:outline-none';
  const sizeClasses = size === 'sm' ? 'text-sm px-3 py-1' : size === 'lg' ? 'text-lg px-5 py-3' : 'text-base px-4 py-2';

  let variantClasses = '';
  switch (variant) {
    case 'secondary':
      variantClasses = 'bg-gray-300 text-gray-800 hover:bg-gray-400';
      break;
    case 'ghost':
      variantClasses = 'bg-transparent text-gray-800 hover:bg-gray-300';
      break;
    case 'success':
      variantClasses = 'bg-green-500 text-white hover:bg-green-600';
      break;
    case 'warning':
      variantClasses = 'bg-yellow-500 text-white hover:bg-yellow-600';
      break;
    case 'danger':
      variantClasses = 'bg-red-500 text-white hover:bg-red-600';
      break;
    default:
      variantClasses = 'bg-blue-500 text-white hover:bg-blue-600';
  }

  return (
    <button className={`${baseClasses} ${sizeClasses} ${variantClasses}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
