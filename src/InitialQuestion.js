import React from 'react';

function InitialQuestion({ onAnswer }) {
  const handleYes = () => {
    alert("Yay! I'm so glad you said yes! 😺 Let's pick a date!");
    onAnswer();  // Moves to the next component to pick a date
  };

  const handleNo = () => {
    alert("Oh no! 😿 Please reconsider! A virtual dinner date could be really fun!");
    // Do not change state, just show the alert. The question will be asked again because the state doesn't change.
  };

  return (
    <div>
      <h2>Would you like to go out for a virtual dinner date?</h2>
      <button onClick={handleNo}>No</button>
      <button onClick={handleYes}>Yes!</button>
    </div>
  );
}

export default InitialQuestion;
