require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/user', userRoutes);

app.listen(5000, () => {
    console.log("🚀 Server running on http://localhost:5000");
});