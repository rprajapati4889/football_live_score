import React, { useState } from 'react';
import { format, addDays } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface DateSelectorProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ selectedDate, onDateChange }) => {
  const days = [
    { name: 'Wednesday', days: -2 },
    { name: 'Yesterday', days: -1 },
    { name: 'Today', days: 0 },
    { name: 'Tomorrow', days: 1 },
    { name: 'Sunday', days: 3 },
    { name: 'Monday', days: 4 },
  ];

  return (
    <div className="flex justify-between items-center mt-4">
      <div className="flex gap-2 overflow-x-auto pb-2">
        {days.map((day) => {
          const date = addDays(new Date(), day.days);
          const isSelected = format(selectedDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd');
          const currentDay = format(date, 'dd');
          const currentMonth = format(date, 'MMM');
          
          return (
            <Button
              key={day.name}
              onClick={() => onDateChange(date)}
              variant={isSelected ? "default" : "outline"}
              className={`${
                isSelected ? 'bg-brand-yellow text-black' : 'bg-transparent text-gray-400'
              } rounded-full px-4 py-1 min-w-[110px] text-sm whitespace-nowrap border-gray-700`}
            >
              <div className="flex flex-col items-center">
                <span>{day.name}</span>
                <span className="text-xs">{currentDay} {currentMonth}</span>
              </div>
            </Button>
          );
        })}
      </div>
      
      <Popover>
        <PopoverTrigger asChild>
          <Button 
            variant="outline" 
            className="rounded-full border-brand-yellow text-brand-yellow gap-2"
          >
            <CalendarIcon className="h-4 w-4" />
            <span>View Calendar</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-brand-dark-gray border-gray-700" align="end">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => date && onDateChange(date)}
            initialFocus
            className={cn("p-3 pointer-events-auto bg-brand-dark-gray text-white")}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DateSelector;