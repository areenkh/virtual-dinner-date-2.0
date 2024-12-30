import React, { useState } from 'react';
import './App.css';
import InitialQuestion from './InitialQuestion';
import PositiveMessage from './PositiveMessage';
import TimeSelector from './TimeSelector';
import FoodSelector from './FoodSelector';
import Confirmation from './Confirmation';
import HeartEffect from './HeartEffect'; 
import Footer from './Footer'; 

function App() {
  const [stage, setStage] = useState('initial');
  const [time, setTime] = useState(''); // Changed `date` to `time`
  const [food, setFood] = useState('');

  const handleAnswer = () => {
    setStage('positiveMessage');
  };

  const handlePositiveMessageNext = () => {
    setStage('timeSelection');
  };

  const handleTimeSelection = (selectedTime) => {
    setTime(selectedTime); // Set the selected time
    setStage('foodSelection');
  };

  const handleFoodSelection = (selectedFood) => {
    setFood(selectedFood);
    setStage('confirmation');
  };

  return (
    <div className="app">
      <HeartEffect />
      {stage === 'initial' && <InitialQuestion onAnswer={handleAnswer} />}
      {stage === 'positiveMessage' && <PositiveMessage onNext={handlePositiveMessageNext} />}
      {stage === 'timeSelection' && (
        <TimeSelector onTimeSet={handleTimeSelection} onNext={() => setStage('foodSelection')} />
      )}
      {stage === 'foodSelection' && (
        <FoodSelector onFoodSelect={handleFoodSelection} onNext={() => setStage('confirmation')} />
      )}
      {stage === 'confirmation' && <Confirmation date={time} food={food} />} {/* Updated `date` to `time` */}
      <Footer />
    </div>
  );
}

export default App;
