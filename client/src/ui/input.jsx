import { forwardRef } from 'react';
import { cn } from '../utils/classNames';

export const Input = forwardRef(({ className, ...props }, ref) => (
    <input
        ref={ref}
        className={cn('w-full rounded-md border px-3 py-2 text-sm', className)}
        {...props}
    />
));
Input.displayName = 'Input';
