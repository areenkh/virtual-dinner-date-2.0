import React, { useEffect } from 'react';
import cutecat from '../images/cutecat.gif';

function Confirmation({ date, food }) {
    useEffect(() => {
        const sendEmail = async () => {
            try {
                const response = await fetch('http://localhost:5001/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        date,
                        food,
                        userEmail: ['areen.khalaila@gmail.com', 'areenkh@brandeis.edu'],
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
        <div>
            <h2>🌟✨ Date Night is All Set! ✨🌟</h2>
            <p>We're going to have a virtual date on <strong>{date}</strong>! 🎉💖</p>
            <p>Get ready for some yummy <strong>{food}</strong>! Let's make it a night to remember! (≧◡≦) ♡</p>
            <img className="reaction" src={cutecat} alt="Cat Jumping" />
        </div>
    );
}

export default Confirmation;
