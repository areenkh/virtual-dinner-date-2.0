// HeartEffect.js
import React, { useEffect, useState } from 'react';
import './HeartEffect.css'; // Ensure the CSS is in a separate file and imported

const HeartEffect = () => {
  const [hearts, setHearts] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHearts(currentHearts =>
        currentHearts.map(heart => ({
          ...heart,
          time: heart.time - 20,
          y: heart.y - 0.5
        })).filter(heart => heart.time > 0)
      );
    }, 20);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (mouseDown) {
      const heart = {
        x: mousePosition.x,
        y: mousePosition.y,
        time: 3000,
        scale: Math.random() * 0.8 + 0.2,
        bound: 30 + Math.random() * 20,
        direction: 1 - Math.round(Math.random()) * 2
      };
      setHearts(currentHearts => [...currentHearts, heart]);
    }
  }, [mousePosition, mouseDown]);

  const handleMouseMove = event => {
    setMousePosition({ x: event.pageX, y: event.pageY });
  };

  const handleTouchMove = event => {
    setMousePosition({ x: event.touches[0].pageX, y: event.touches[0].pageY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
      onTouchStart={handleTouchMove}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setMouseDown(false)}
      style={{ position: 'relative', width: '100%', height: '100%' }}
    >
      {hearts.map((heart, index) => (
        <div
          key={index}
          className="heart"
          style={{
            left: `${heart.x}px`,
            top: `${heart.y}px`,
            transform: `scale(${heart.scale})`,
            opacity: Math.max(heart.time / 3000, 0)
          }}
        />
      ))}
    </div>
  );
};

export default HeartEffect;
