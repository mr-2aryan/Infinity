const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/api', require('./routes/productRoutes'));
app.use('/api', require('./routes/orderRoutes'));
app.use('/api', require('./routes/newsletterRoutes'));
app.use('/api', require('./routes/contactRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
