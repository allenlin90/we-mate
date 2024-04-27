import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

const footer = forwardRef<
  HTMLElement,
  React.PropsWithChildren<{ className?: string }>
>(({ children, className }, ref) => {
  return (
    <>
      <div className='footer-height' />
      <footer
        ref={ref}
        className={cn('absolute bottom-0 left-0 h-footer w-full', className)}
      >
        {children}
      </footer>
    </>
  );
});

export default footer;
