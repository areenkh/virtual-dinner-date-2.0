import React, { useState } from 'react';
import PositiveMessage from './PositiveMessage';
import TryAgain from './TryAgain';
import './InitialQuestion.css'; // Include CSS for styling
import firstPic from '../images/couple1.png';
import secondPic from '../images/couple2.png';
import thirdPic from '../images/couple3.png';
import fourthPic from '../images/couple5.png';

function InitialQuestion({ onAnswer }) {
  const [response, setResponse] = useState('ask');

  const images = [
    { name: 'First picture together', image: firstPic, caption: 'Our first selfie together' },
    { name: 'A special moment', image: secondPic, caption: 'When we had seafood in Sausalito' },
    { name: 'Another memory', image: thirdPic, caption: 'Your old apartment\'s bathroom' },
    { name: 'Fun time', image: fourthPic, caption: 'When we went to Pacifica' },
  ];

  if (response === 'yes') {
    return <PositiveMessage onNext={onAnswer} />;
  } else if (response === 'no') {
    return <TryAgain onRetry={() => setResponse('ask')} />;
  }

  const handleYes = () => setResponse('yes');
  const handleNo = () => setResponse('no');

  return (
    <div className="main-container">
      <div className="content-box">
        <h3>Would you like to go out for a dinner date on our 1 year anniversary?👉🏻👈🏻</h3>
        <div className="button-group">
          <button className="button no" onClick={handleNo}>No</button>
          <button className="button yes" onClick={handleYes}>Yes!</button>
        </div>
        <div className="images-row">
          {images.map((img, index) => (
            <div key={index} className="image-content">
              <img src={img.image} alt={img.name} className="styled-image" />
              <p className="image-caption">{img.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InitialQuestion;
