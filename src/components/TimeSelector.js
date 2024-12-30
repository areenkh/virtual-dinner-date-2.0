import React, { useState } from 'react';
import './TimeSelector.css'; // Add a new CSS file for styling
import palestineFlag from '../images/areen.png'; // Add your image path
import secondPic from '../images/cafe.png';
import thirdPic from '../images/cafe2.png';
import fourthPic from '../images/japan.png';


function TimeSelector({ onTimeSet, onNext }) {
  const [selectedTime, setSelectedTime] = useState('');

  const images = [
    { name: 'First picture together', image: palestineFlag, caption: 'Me holding a Palestine flag' },
    { name: 'A special moment', image: secondPic, caption: 'When we had seafood in Sausalito' },
    { name: 'Another memory', image: thirdPic, caption: 'Your old apartments bathroom' },
    { name: 'Fun time', image: fourthPic, caption: 'When we went to Pacifica' },
  ];

  const timeOptions = [
    '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM',
    '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM',
    '7:00 PM', '7:30 PM',
    '8:00 PM', '8:30 PM',
    '9:00 PM'
  ];

  const handleNext = () => {
    if (!selectedTime) {
      alert('Please select a time for our virtual dinner!');
      return;
    }

    console.log('Time selected:', selectedTime); // Debugging
    onTimeSet(selectedTime);
    onNext();
  };

  return (
    <div className="time-selector-container">
      <h2 className="prompt">
        I have an interview and won’t be free before 2:00 PM EST. <br />
        Please choose a time that works for you in your time zone between 2:00 PM and 9:00 PM. 💕
      </h2>
      <div className="content">
        <div className="time-options">
          {timeOptions.map((time, index) => (
            <label key={index} className="time-option">
              <input
                type="radio"
                name="time"
                value={time}
                onChange={(e) => setSelectedTime(e.target.value)}
              />
              {time}
            </label>
          ))}
        </div>
        <div className="image-container">
            {images.map((img, index) => (
              <div key={index} className="image-content">
                <img src={img.image} alt={img.name} className="styled-image" />
                <p className="image-caption">{img.caption}</p>
              </div>
            ))}
        </div>
      </div>
      <button onClick={handleNext} className="next-button">Next Step: Food Fun! 🍴</button>
    </div>
  );
}

export default TimeSelector;