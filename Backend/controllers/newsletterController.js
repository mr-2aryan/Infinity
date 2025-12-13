const { sendSubscriptionEmail } = require('../services/emailService');

const subscribe = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ success: false, message: 'Email is required' });
        }
        await sendSubscriptionEmail(email);
        res.json({ success: true, message: 'Subscription successful!' });
    } catch (err) {
        console.error('Error subscribing:', err.message);
        res.status(500).json({ success: false, message: 'Failed to subscribe' });
    }
};

module.exports = { subscribe };
