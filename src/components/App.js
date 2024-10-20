import React, { useState } from 'react';
import InitialQuestion from './InitialQuestion';
import DateSelector from './DateSelector';
import FoodSelector from './FoodSelector';
import Confirmation from './Confirmation';

function App() {
  const [step, setStep] = useState(0);
  const [date, setDate] = useState('');
  const [food, setFood] = useState('');

  const handleNextStep = () => {
    setStep(step + 1);
  };

  return (
    <div className="app">
      {step === 0 && <InitialQuestion onAnswer={handleNextStep} />}
      {step === 1 && <DateSelector setDate={setDate} nextStep={handleNextStep} />}
      {step === 2 && <FoodSelector setFood={setFood} nextStep={handleNextStep} />}
      {step === 3 && <Confirmation date={date} food={food} />}
    </div>
  );
}

export default App;
