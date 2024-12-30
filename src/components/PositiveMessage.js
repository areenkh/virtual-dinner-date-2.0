import React from 'react';
import catplay from '../images/catplay.gif'; 
import smile from '../images/nabil1.png'; 

function PositiveMessage({ onNext }) {
  const handleClick = () => {
    console.log('Next button clicked!');
    onNext();
  };
  return (
    <div>
      <h2>Yay! ✨🎉 You said yes! ٩(◕‿◕｡)۶</h2>
      {/* <img className="reaction" src={catplay} alt="Cat Playing"/> */}
      <img className="reaction" src={smile} alt="BF Smiling"/>
      <button onClick={onNext}>Let's Pick a Time! ✨📅💖</button>  
    </div>
  );
}

export default PositiveMessage;