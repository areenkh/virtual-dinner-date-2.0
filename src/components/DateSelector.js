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
    onDateSet(localDate);  // Correctly use the passed prop to set date
    onNext();  // Proceed to the next step
  };

  return (
    <div>
      <h2>Choose a date for our virtual dinner:</h2>
      <input type="date" value={localDate} onChange={handleDateChange} />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default DateSelector;
