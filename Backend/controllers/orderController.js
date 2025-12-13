const { sendOrderConfirmation } = require('../services/emailService');

const createOrder = async (req, res) => {
    try {
        const orderData = req.body;
        await sendOrderConfirmation(orderData);
        res.json({ success: true, message: 'Order confirmed and email sent!' });
    } catch (err) {
        console.error('Error sending email:', err.message);
        res.status(500).json({ success: false, message: 'Failed to send confirmation email' });
    }
};

module.exports = { createOrder };
