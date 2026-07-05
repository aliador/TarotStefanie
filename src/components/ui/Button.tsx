import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
    const variants = {
      primary: "bg-gradient-to-r from-pink-medium to-pink-dark text-white shadow-md lg:hover:shadow-lg lg:hover:-translate-y-1 active:scale-95 transition-all duration-300 rounded-2xl font-semibold",
      secondary: "bg-white/50 backdrop-blur-md border border-white lg:hover:bg-pink-light text-text-main active:scale-95 transition-all duration-300 rounded-2xl font-semibold",
      outline: "border border-pink-dark text-pink-dark lg:hover:bg-pink-medium lg:hover:text-white active:scale-95 transition-all duration-300 rounded-full",
      ghost: "lg:hover:bg-pink-light/40 backdrop-blur-sm border border-transparent lg:hover:border-pink-medium text-text-main active:scale-95 transition-all duration-300 rounded-2xl",
    };

    const sizes = {
      sm: "px-4 py-2.5 text-sm min-h-[44px]",
      md: "px-6 py-3 md:px-8 md:py-3.5 text-base font-medium min-h-[48px]",
      lg: "px-8 py-3.5 md:px-10 md:py-4 text-base md:text-lg font-medium min-h-[56px]",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-2xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-medium disabled:pointer-events-none disabled:opacity-50 touch-manipulation",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
