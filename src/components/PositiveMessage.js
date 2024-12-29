import React from 'react';
import pigeon from '../images/pigeon.webp'; 

function PositiveMessage({ onNext }) {
  const handleClick = () => {
    console.log('Next button clicked!');
    onNext();
  };
  return (
    <div>
      <h2>Yay! ✨🎉 You said yes! ٩(◕‿◕｡)۶</h2>
      <img className="reaction" src={pigeon} alt="pigeon with heart"/>
      <button onClick={onNext}>Let's Pick a Date! ✨📅💖</button>  
    </div>
  );
}

export default PositiveMessage;
