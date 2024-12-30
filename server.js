const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Set SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Email route
app.post('/send-email', async (req, res) => {
    const { date, food, userEmails } = req.body;

    // Email content for the recipient
    const emailContentRecipient = `
        Hello,
        This is a confirmation email that you have selected ${food} for our 1 year anniversary dinner date at ${date} on January 3.
        I can't wait :3
    `;

    // Email content for the owner
    const emailContentOwner = `
        Hello,
        The following email was sent to ${userEmails}:
        ---
        ${emailContentRecipient}
    `;

    // Email to recipient
    const mailOptionsRecipient = {
        to: userEmails,
        from: process.env.EMAIL_USER, // Your verified sender email in SendGrid
        subject: 'Your Virtual Dinner Date Details',
        text: emailContentRecipient,
    };

    // Email to owner (you)
    const mailOptionsOwner = {
        to: process.env.EMAIL_USER,
        from: process.env.EMAIL_USER, // Your verified sender email in SendGrid
        subject: `Copy of Email Sent to ${userEmails}`,
        text: emailContentOwner,
    };

    try {
        // Send email to recipient
        await sgMail.send(mailOptionsRecipient);
        console.log('Recipient email sent successfully.');

        // Send email to owner
        await sgMail.send(mailOptionsOwner);
        console.log('Owner email sent successfully.');

        res.status(200).send('Emails sent successfully');
    } catch (error) {
        console.error('Error sending emails:', error.response ? error.response.body.errors : error.message);
        res.status(500).send('Error sending emails');
    }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
