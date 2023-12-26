// components/common/Datepicker.tsx
import React, { useState } from 'react';
import { FiCalendar } from 'react-icons/fi';

interface DatepickerProps {
  onSelectDate: (date: Date) => void;
}

const Datepicker: React.FC<DatepickerProps> = ({ onSelectDate }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(event.target.value);
    setSelectedDate(newDate);
    onSelectDate(newDate);
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="date"
        value={selectedDate?.toISOString().split('T')[0] || ''}
        onChange={handleDateChange}
        className="p-2 border rounded-md focus:outline-none focus:border-primary"
      />
      <FiCalendar className="text-gray-500" />
    </div>
  );
};

export default Datepicker;
