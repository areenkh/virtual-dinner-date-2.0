import React, { useState } from 'react';
import InitialQuestion from './InitialQuestion';
import DateSelector from './DateSelector';
import FoodSelector from './FoodSelector';
import Confirmation from './Confirmation';

function App() {
  const [step, setStep] = useState(0);
  const [date, setDate] = useState('');  // Initialize with empty string
  const [food, setFood] = useState('');  // Initialize with empty string

  const handleAnswer = () => {
    setStep(1);  // Change to date selector step
  };

  return (
    <div className="app">
      {step === 0 && <InitialQuestion onAnswer={handleAnswer} />}
      {step === 1 && <DateSelector setDate={setDate} nextStep={() => setStep(2)} />}
      {step === 2 && <FoodSelector setFood={setFood} nextStep={() => setStep(3)} />}
      {step === 3 && <Confirmation date={date} food={food} />}
    </div>
  );
}

export default App;
