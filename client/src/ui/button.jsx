import { forwardRef } from 'react';
import { cn } from '../utils/classNames';

export const Button = forwardRef(({ className, variant = 'default', ...props }, ref) => (
    <button
        ref={ref}
        className={cn(
            'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors',
            variant === 'default' ? 'bg-blue-600 text-white hover:bg-blue-700' : '',
            className
        )}
        {...props}
    />
));
Button.displayName = 'Button';
