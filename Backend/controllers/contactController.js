const { sendContactEmail } = require('../services/emailService');

const submitContact = async (req, res) => {
    try {
        const contactData = req.body;
        // Basic validation
        if (!contactData.name || !contactData.email || !contactData.message) {
            return res.status(400).json({ success: false, message: 'Name, email, and message are required' });
        }
        await sendContactEmail(contactData);
        res.json({ success: true, message: 'Message sent successfully!' });
    } catch (err) {
        console.error('Error sending contact message:', err.message);
        res.status(500).json({ success: false, message: 'Failed to send message' });
    }
};

module.exports = { submitContact };
