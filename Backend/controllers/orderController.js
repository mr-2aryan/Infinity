const { sendOrderConfirmation } = require('../services/emailService');
const pool = require('../config/db');

const createOrder = async (req, res) => {
    try {
        const orderData = req.body;

        // Decrease quantity for each purchased item
        for (const item of orderData.items) {
            await pool.query(
                'UPDATE products SET quantity = quantity - $1 WHERE id = $2',
                [item.quantity, item.id]
            );
        }

        // Don't await the email sending - fire and forget for faster response
        sendOrderConfirmation(orderData).catch(err => console.error('Background email error:', err));
        res.json({ success: true, message: 'Order confirmed!' });
    } catch (err) {
        console.error('Error sending email:', err.message);
        res.status(500).json({ success: false, message: 'Failed to send confirmation email' });
    }
};

module.exports = { createOrder };
