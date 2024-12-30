import React, { useEffect } from 'react';
import cutecat from '../images/handala.webp';
import firstPic from '../images/couple9.png';
import secondPic from '../images/couple6.png';
import thirdPic from '../images/couple7.png';
import fourthPic from '../images/couple8.png';
import './Confirmation.css';

function Confirmation({ date, food }) {

    const images = [
        { name: 'First picture together', image: firstPic, caption: 'Um Zenji and Abu Zenji' },
        { name: 'A lovely moment', image: secondPic, caption: 'Shittsburgh' },
        { name: 'Fun adventure', image: thirdPic, caption: 'Another pic in Shittsburgh' },
        { name: 'Another memory', image: fourthPic, caption: 'Your birthday picnic' },
    ];

    useEffect(() => {
        const sendEmail = async () => {
            try {
                const response = await fetch('https://virtual-dinner-date-2-0.onrender.com/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        date,
                        food,
                        userEmail: ['areen.khalaila@gmail.com', 'areenkh@brandeis.edu', 'noblehamideh98@gmail.com'],
                    }),
                });

                if (response.ok) {
                    console.log('Emails sent successfully');
                } else {
                    console.error('Error sending emails');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        sendEmail();
    }, [date, food]);

    return (
        <div className="confirmation-container">
            <h2>🇵🇸✨ Date Night is All Set! ✨🇵🇸</h2>
            <p>We're going to have a virtual date on <strong>{date}</strong>! 🎉💖</p>
            <p>Get ready for some yummy <strong>{food}</strong>! Let's make it a night to remember! (≧◡≦) ♡</p>
            <p>Both of us should have received a Confirmation email. Check you spam box, it's probably there.</p>
            <img className="reaction" src={cutecat} alt="Cat Jumping" />
            <div className="images-row">
                {images.map((img, index) => (
                    <div key={index} className="image-content">
                        <img src={img.image} alt={img.name} className="styled-image" />
                        <p className="image-caption">{img.caption}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Confirmation;