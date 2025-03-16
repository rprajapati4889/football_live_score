
import React, { useState } from 'react';
import { Search, CalendarCheck } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <div className="relative w-full rounded-lg overflow-hidden">
      {/* Main header image */}
      <img 
        src="/uploads/99437104-c425-4796-9b9d-7aff9eadcbb7.png" 
        alt="Real Madrid players" 
        className="w-full h-48 md:h-56 object-fill"
      />
    </div>
  );
};

export default Header;
