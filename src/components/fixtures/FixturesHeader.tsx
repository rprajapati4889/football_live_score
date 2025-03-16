
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const FixturesHeader = () => {
  return (
    <div className="flex justify-between items-center mb-4 mt-4 bg-brand-dark-gray rounded-lg p-2">
      <div className="flex items-center gap-2">
        <span className="flex items-center gap-2 text-white text-sm px-3">
          <span className="bg-brand-yellow w-3 h-3 rounded-full"></span>
          Live [1]
        </span>
      </div>
      
      <div className="relative flex-1 max-w-xs mx-auto">
        <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        <Input 
          type="search" 
          placeholder="Search For Matches" 
          className="pl-8 bg-[#2D2D2D] border-none text-white h-8" 
        />
      </div>
      
      <div className="flex items-center">
      <Select defaultValue="all">
          <SelectTrigger className="w-40 bg-[#2D2D2D] border-none text-white">
            <SelectValue placeholder="All Matches" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Matches</SelectItem>
            <SelectItem value="live">Live Matches</SelectItem>
            <SelectItem value="upcoming">Upcoming</SelectItem>
            <SelectItem value="finished">Finished</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FixturesHeader;
