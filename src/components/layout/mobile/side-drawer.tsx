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
  side?: SheetVariants['side'];
}

const SideDrawer = ({
  children,
  side = 'left',
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
          <Hamburger size={24} toggled={false} />
        </SheetTrigger>
        <SheetContent side={side} showCloseButton={false}>
          {children}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SideDrawer;
