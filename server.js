const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Mock Gold Rate API
app.get('/api/gold-rate', (req, res) => {
    const rates = {
        "22K": "₹5,200/10gm",
        "24K": "₹5,750/10gm",
        lastUpdated: new Date().toISOString()
    };
    res.json(rates);
});

const PORT = 5000;
app.listen(PORT, () => 
    console.log(`Gold Rate API running on http://localhost:${PORT}`)
);
