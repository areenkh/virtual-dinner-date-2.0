import React from 'react';
import './FoodSelector.css'; // Ensure this is correctly linked

function FoodSelector({ setFood, nextStep }) {
  const foods = [
    { name: 'Pizza', image: '/path/to/pizza.jpg' },
    { name: 'Sushi', image: '/path/to/sushi.jpg' },
    { name: 'Burger', image: '/path/to/burger.jpg' },
    { name: 'Salad', image: '/path/to/salad.jpg' }
  ];

  const handleFoodSelect = (food) => {
    setFood(food.name);
    nextStep();
  };

  return (
    <div className="food-container">
      <h2>What would you like to order for our dinner?</h2> {/* Added descriptive text */}
      {foods.map((food, index) => (
        <div key={index} className="food-item" onClick={() => handleFoodSelect(food)}>
          <img src={food.image} alt={food.name} className="food-image" />
          <p>{food.name}</p>
        </div>
      ))}
    </div>
  );
}

export default FoodSelector;
