import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateSelector({ onDateSet, onNext }) {
  const [localDate, setLocalDate] = useState(new Date());

  const handleDateChange = (date) => {
    setLocalDate(date);
  };

  const handleNext = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);  // Reset time part for accurate comparison

    if (localDate < today) {
      alert("Please select a date that is today or in the future.");
      return;
    }

    onDateSet(localDate.toISOString().split('T')[0]);  // Format date to YYYY-MM-DD
    onNext();
  };

  return (
    <div>
      <h2>Choose a date for our virtual dinner:</h2>
      <DatePicker
        selected={localDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        minDate={new Date()}  // Prevent past dates
      />
      <button onClick={handleNext}>Next Up: Food Fun! (っ˘ڡ˘ς) 🍴</button>
    </div>
  );
}

export default DateSelector;
