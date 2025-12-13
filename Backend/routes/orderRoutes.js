const express = require('express');
const router = express.Router();
const { createOrder } = require('../controllers/orderController');

router.post('/send-confirmation', createOrder);

module.exports = router;
