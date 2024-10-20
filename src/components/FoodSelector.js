import React from 'react';
import './FoodSelector.css'; 

function FoodSelector({ onFoodSelect, onNext }) {  // Changed prop names to match App.js
  const foods = [
    { name: 'Pizza', image: '/path/to/pizza.jpg' },
    { name: 'Sushi', image: '/path/to/sushi.jpg' },
    { name: 'Burger', image: '/path/to/burger.jpg' },
    { name: 'Salad', image: '/path/to/salad.jpg' }
  ];

  const handleFoodSelect = (food) => {
    onFoodSelect(food.name);  // Use the correct function name
    onNext();  // Call the next step
  };

  return (
    <div className="food-container">
      <h2>What would you like to order for our dinner?</h2>
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
