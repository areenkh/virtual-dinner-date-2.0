import React, { useState } from 'react';

function DateSelector({ onDateSet, onNext }) {
  const [localDate, setLocalDate] = useState('');

  const handleDateChange = (event) => {
    setLocalDate(event.target.value);
  };

  const handleNext = () => {
    if (!localDate) {
      alert("Please select a date for our virtual dinner!");
      return;
    }

    // Use a more reliable method to get today's date
    const today = new Date();
    const currentDate = today.toISOString().split('T')[0];

    // Check if selected date is before today's date
    if (localDate < currentDate) {
      alert(`The date you selected (${localDate}) is in the past. Please choose today's date or later.`);
      return;
    }

    onDateSet(localDate);  // Pass the selected date upstream
    onNext();  // Go to the next step
  };

  return (
    <div>
      <h2>Choose a date for our virtual dinner:</h2>
      <input type="date" value={localDate} onChange={handleDateChange} />
      <button onClick={handleNext}>Next Up: Food Fun! (っ˘ڡ˘ς) 🍴</button>
    </div>
  );
}

export default DateSelector;
