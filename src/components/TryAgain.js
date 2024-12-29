import React from 'react';
import sadFrog from '../images/sad-frog.gif'; 

function TryAgain({ onRetry }) {
  return (
    <div>
      <h2>Wrong Answer!</h2>
      <img className="reaction" src={sadFrog} alt="Sad Frog"/>
      <button onClick={onRetry}>Try Again</button>
    </div>
  );
}

export default TryAgain;
