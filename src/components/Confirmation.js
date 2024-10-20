import React from 'react';

function Confirmation({ date, food }) {
  return (
    <div>
      <h2>Virtual Date Details</h2>
      <p>We're all set for our virtual date! 🎉</p>
      <p>We'll be enjoying a lovely evening on <strong>{date}</strong>, and we've got <strong>{food}</strong> on the menu!</p>
      <img src="path_to_celebration_gif.gif" alt="Celebration" />
    </div>
  );
}

export default Confirmation;
