import React from 'react';

function Confirmation({ date, food }) {
  return (
    <div>
      <h2>Confirmation</h2>
      <p>We'll be having a virtual date on {date}, ordering {food} for each other!</p>
      <button onClick={() => alert('Can\'t wait! 😊 See you then!')}>Confirm</button>
    </div>
  );
}

export default Confirmation;
