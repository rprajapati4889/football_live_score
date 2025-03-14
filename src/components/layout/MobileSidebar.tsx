
import React from 'react';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';

const MobileSidebar = () => {
  return (
    <div className="lg:hidden">
      <Drawer>
        <DrawerTrigger asChild>
          <button className="text-white p-2">
            <Menu size={24} />
          </button>
        </DrawerTrigger>
        <DrawerContent className="h-[90vh] bg-brand-dark-gray">
          <div className="h-full overflow-auto">
            <Sidebar />
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileSidebar;
