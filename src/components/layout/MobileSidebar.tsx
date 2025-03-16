import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';

const MobileSidebar = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button className="text-white p-2">
            <Menu size={20} />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="h-full bg-brand-dark-gray">
          <div className="h-full overflow-auto">
            <Sidebar />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;