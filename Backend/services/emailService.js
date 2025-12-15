const nodemailer = require('nodemailer');

// Configure email transporter (using Gmail as example)
// For production, use environment variables for credentials
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'aryanshahid098@gmail.com',
        pass: 'yiul yjro ktxo pnpg'
    }
});

// Send order confirmation email
const sendOrderConfirmation = async (orderData) => {
    const { customer, items, total, orderDate } = orderData;

    const itemsList = items.map(item =>
        `<li>${item.name} x ${item.quantity} - $${item.totalPrice.toFixed(2)}</li>`
    ).join('');

    // Email to customer
    const customerMailOptions = {
        from: 'Infinity <aryanshahid098@gmail.com>',
        to: customer.email,
        subject: '✅ Order Confirmation - Infinity',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background-color: #0f2e26; padding: 20px; text-align: center;">
                    <h1 style="color: #fdc402; margin: 0;">Infinity</h1>
                </div>
                
                <div style="padding: 30px; background-color: #f5f5f5;">
                    <h2 style="color: #0f2e26;">Thank You for Your Order!</h2>
                    <p>Hi ${customer.firstName} ${customer.lastName},</p>
                    <p>We've received your order and it's being processed. Here are the details:</p>
                    
                    <div style="background: white; padding: 20px; margin: 20px 0; border-radius: 8px;">
                        <h3 style="color: #0f2e26; margin-top: 0;">Order Summary</h3>
                        <ul style="list-style: none; padding: 0;">
                            ${itemsList}
                        </ul>
                        <hr style="border: 1px solid #ddd; margin: 15px 0;">
                        <p style="font-size: 18px; font-weight: bold; text-align: right;">
                            Total: $${total}
                        </p>
                    </div>
                    
                    <div style="background: white; padding: 20px; margin: 20px 0; border-radius: 8px;">
                        <h3 style="color: #0f2e26; margin-top: 0;">Shipping Address</h3>
                        <p>
                            ${customer.address}<br>
                            ${customer.city}, ${customer.zipCode}<br>
                            ${customer.country}
                        </p>
                        <p><strong>Phone:</strong> ${customer.phone}</p>
                    </div>
                    
                    <p style="margin-top: 30px;">
                        <strong>Estimated Delivery:</strong> 2-3 business days
                    </p>
                    
                    <p style="color: #666; font-size: 14px; margin-top: 30px;">
                        If you have any questions, please don't hesitate to contact us.
                    </p>
                </div>
                
                <div style="background-color: #0f2e26; padding: 20px; text-align: center; color: white; font-size: 12px;">
                    <p>© ${new Date().getFullYear()} Infinity. All rights reserved.</p>
                </div>
            </div>
        `
    };

    // Email to store owner (you)
    const adminMailOptions = {
        from: 'Infinity <aryanshahid098@gmail.com>',
        to: 'aryanshahid098@gmail.com', // Your email
        subject: '🔔 New Order Received - Infinity',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background-color: #0f2e26; padding: 20px; text-align: center;">
                    <h1 style="color: #fdc402; margin: 0;">Infinity</h1>
                </div>
                
                <div style="padding: 30px; background-color: #f5f5f5;">
                    <h2 style="color: #0f2e26;">🎉 New Order Received!</h2>
                    <p>A new order has been placed on your store.</p>
                    
                    <div style="background: white; padding: 20px; margin: 20px 0; border-radius: 8px;">
                        <h3 style="color: #0f2e26; margin-top: 0;">Customer Details</h3>
                        <p><strong>Name:</strong> ${customer.firstName} ${customer.lastName}</p>
                        <p><strong>Email:</strong> ${customer.email}</p>
                        <p><strong>Phone:</strong> ${customer.phone}</p>
                        <hr style="border: 1px solid #ddd; margin: 15px 0;">
                        <p><strong>Address:</strong><br>
                            ${customer.address}<br>
                            ${customer.city}, ${customer.zipCode}<br>
                            ${customer.country}
                        </p>
                    </div>
                    
                    <div style="background: white; padding: 20px; margin: 20px 0; border-radius: 8px;">
                        <h3 style="color: #0f2e26; margin-top: 0;">Order Items</h3>
                        <ul style="list-style: none; padding: 0;">
                            ${itemsList}
                        </ul>
                        <hr style="border: 1px solid #ddd; margin: 15px 0;">
                        <p style="font-size: 18px; font-weight: bold; text-align: right; color: #0f2e26;">
                            Total: $${total}
                        </p>
                    </div>
                    
                    <p style="color: #666; font-size: 12px; margin-top: 30px;">
                        Order Date: ${new Date(orderDate).toLocaleString()}
                    </p>
                </div>
            </div>
        `
    };

    try {
        // Send both emails in parallel
        await Promise.all([
            transporter.sendMail(customerMailOptions).then(() => console.log('Customer confirmation email sent')),
            transporter.sendMail(adminMailOptions).then(() => console.log('Admin notification email sent'))
        ]);

        return { success: true, message: 'Emails sent successfully' };
    } catch (error) {
        console.error('Email error:', error);
        // Don't throw here to prevent crashing the server if email fails in background
        console.error('Failed to send confirmation emails');
    }
};

// Send subscription confirmation email
const sendSubscriptionEmail = async (email) => {
    const mailOptions = {
        from: 'Infinity <aryanshahid098@gmail.com>',
        to: email,
        subject: '✨ Welcome to Infinity Newsletter!',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background-color: #0f2e26; padding: 20px; text-align: center;">
                    <h1 style="color: #fdc402; margin: 0;">Infinity</h1>
                </div>
                
                <div style="padding: 30px; background-color: #f5f5f5;">
                    <h2 style="color: #0f2e26; text-align: center;">Welcome to the Family! 🎉</h2>
                    
                    <div style="background: white; padding: 20px; margin: 20px 0; border-radius: 8px; text-align: center;">
                        <p style="font-size: 16px; line-height: 1.6; color: #333;">
                            Thank you for subscribing to our newsletter! You're now officially part of our community.
                        </p>
                        <p style="font-size: 16px; line-height: 1.6; color: #333;">
                            Get ready for:
                        </p>
                        <ul style="text-align: left; display: inline-block; color: #555;">
                            <li>🚀 Exclusive offers and discounts</li>
                            <li>🛋️ First look at new collections</li>
                            <li>💡 Interior design tips and trends</li>
                        </ul>
                        
                        <div style="margin-top: 25px;">
                            <a href="http://localhost:5173/shop" style="background-color: #fdc402; color: #0f2e26; padding: 12px 25px; text-decoration: none; font-weight: bold; border-radius: 4px; display: inline-block;">Start Shopping</a>
                        </div>
                    </div>
                </div>
                
                <div style="background-color: #0f2e26; padding: 20px; text-align: center; color: white; font-size: 12px;">
                    <p>You received this email because you subscribed to current trends updates.</p>
                    <p>© ${new Date().getFullYear()} Infinity. All rights reserved.</p>
                </div>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Subscription confirmation email sent to:', email);
        return { success: true, message: 'Subscription email sent' };
    } catch (error) {
        console.error('Subscription email error:', error);
        throw error;
    }
};

// Send contact form email
const sendContactEmail = async (contactData) => {
    const { name, email, subject, message } = contactData;

    const mailOptions = {
        from: `Infinity Contact Form <aryanshahid098@gmail.com>`, // Sender address should be authenticated user
        to: 'aryanshahid098@gmail.com', // Your email to receive inquiries
        replyTo: email, // Allow you to reply directly to the customer
        subject: `📩 New Contact Inquiry: ${subject}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background-color: #0f2e26; padding: 20px; text-align: center;">
                    <h1 style="color: #fdc402; margin: 0;">Infinity</h1>
                </div>
                
                <div style="padding: 30px; background-color: #f5f5f5;">
                    <h2 style="color: #0f2e26;">New Message from Website</h2>
                    
                    <div style="background: white; padding: 20px; margin: 20px 0; border-radius: 8px;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Subject:</strong> ${subject}</p>
                        <hr style="border: 1px solid #ddd; margin: 15px 0;">
                        <p><strong>Message:</strong></p>
                        <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #fdc402;">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                    </div>
                    
                    <p style="color: #666; font-size: 12px; margin-top: 20px;">
                        Received on ${new Date().toLocaleString()}
                    </p>
                </div>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Contact email sent from:', email);
        return { success: true, message: 'Contact email sent' };
    } catch (error) {
        console.error('Contact email error:', error);
        throw error;
    }
};

module.exports = { sendOrderConfirmation, sendSubscriptionEmail, sendContactEmail };
