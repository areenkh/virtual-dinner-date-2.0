import React from 'react';

function TryAgain({ onRetry }) {
  return (
    <div>
      <h2>Oh no! 😿 Please reconsider! A virtual dinner date could be really fun!</h2>
      <img src="path_to_sad_cat_gif.gif" alt="Sad Cat" />
      <button onClick={onRetry}>Try Again</button>
    </div>
  );
}

export default TryAgain;
