import React from 'react';

export const Button = ({ children, className = '', ...props }: any) => {
  return (
    <button 
      className={`px-6 py-3 rounded-full font-medium transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
