import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Cross as Hamburger } from 'hamburger-react';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  type SheetVariants,
} from '@/components/ui/sheet';

interface SideDrawerProps {
  size?: number;
  side?: SheetVariants['side'];
  showCloseButton?: boolean;
}

const SideDrawer = ({
  children,
  side = 'left',
  size = 24,
  showCloseButton = false,
}: React.PropsWithChildren<SideDrawerProps>) => {
  const { pathname } = useLocation();
  const pathnameRef = useRef('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open && pathnameRef.current && pathnameRef.current !== pathname) {
      setOpen(false);
    }

    pathnameRef.current = pathname;
  }, [open, pathname]);

  return (
    <div className='md:hidden'>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Hamburger size={size} toggled={open} onToggle={setOpen} />
        </SheetTrigger>
        <SheetContent side={side} showCloseButton={showCloseButton}>
          {children}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SideDrawer;
