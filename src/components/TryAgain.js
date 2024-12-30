import React from 'react';
import sadFrog from '../images/sad-frog.gif'; 
import middleFinger from '../images/middleFinger.png'; 


function TryAgain({ onRetry }) {
  return (
    <div>
      <h2>Wrong Answer Zenji!</h2>
      <img className="reaction" src={sadFrog} alt="Sad Frog"/>
      <img className="reaction" src={middleFinger} alt="Middle Finger"/>
      <button onClick={onRetry}>Try Again</button>
    </div>
  );
}

export default TryAgain;
