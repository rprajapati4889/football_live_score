
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarCheck } from 'lucide-react';

const Header = () => {
  return (
    <div className="relative h-40 w-full overflow-hidden rounded-t-lg">
      <img 
        src="/lovable-uploads/99437104-c425-4796-9b9d-7aff9eadcbb7.png" 
        alt="Real Madrid players" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex items-end p-4">
        <div className="flex justify-between items-center w-full">
          <div>
            <span className="flex items-center gap-2 text-white text-sm">
              <span className="bg-brand-yellow w-3 h-3 rounded-full"></span>
              Live
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="type">
              <SelectTrigger className="w-40 bg-brand-dark-gray/80 border-none text-white">
                <SelectValue placeholder="League Calendar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="type">League Calendar</SelectItem>
              </SelectContent>
            </Select>
            <button className="bg-brand-yellow text-black p-2 rounded-md">
              <CalendarCheck size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
