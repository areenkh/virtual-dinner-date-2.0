import React from 'react';

function PositiveMessage({ onNext }) {
  return (
    <div>
      <h2>Yay! I'm so glad you said yes! 😺</h2>
      <img src="path_to_happy_cat_gif.gif" alt="Happy Cat" />
      <button onClick={onNext}>Next</button>  
    </div>
  );
}

export default PositiveMessage;
