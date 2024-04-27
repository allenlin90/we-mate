import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

const Header = forwardRef<
  HTMLElement,
  React.PropsWithChildren<{ className?: string }>
>(({ children, className }, ref) => {
  return (
    <>
      <nav
        ref={ref}
        className={cn(
          'absolute top-0 left-0 h-header w-full bg-glass-morphism',
          className
        )}
      >
        {children}
      </nav>
      <div className='header-height' />
    </>
  );
});

export default Header;
