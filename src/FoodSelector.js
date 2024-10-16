import React from 'react';

function FoodSelector({ setFood, nextStep }) {
  const handleFoodSelect = (food) => {
    setFood(food);  // Set the selected food
    nextStep();     // Move to the next step automatically
  };

  return (
    <div>
      <h2>What should we order?</h2>
      <button onClick={() => handleFoodSelect('Pizza')}>Pizza</button>
      <button onClick={() => handleFoodSelect('Sushi')}>Sushi</button>
    </div>
  );
}

export default FoodSelector;
