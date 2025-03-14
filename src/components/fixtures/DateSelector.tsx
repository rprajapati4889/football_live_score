
import React from 'react';
import { format, addDays, subDays } from 'date-fns';
import { Button } from '@/components/ui/button';

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
    <div className="flex gap-2 overflow-x-auto pb-2 mt-4">
      {days.map((day) => {
        const date = addDays(new Date(), day.days);
        const isSelected = format(selectedDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd');
        
        return (
          <Button
            key={day.name}
            onClick={() => onDateChange(date)}
            variant={isSelected ? "default" : "outline"}
            className={`${
              isSelected ? 'bg-brand-yellow text-black' : 'bg-transparent text-gray-400'
            } rounded-full px-4 py-1 min-w-[120px] text-sm whitespace-nowrap border-gray-700`}
          >
            <div className="flex flex-col items-center">
              <span>{day.name}</span>
              <span className="text-xs">{format(date, 'dd MMM')}</span>
            </div>
          </Button>
        );
      })}
    </div>
  );
};

export default DateSelector;
