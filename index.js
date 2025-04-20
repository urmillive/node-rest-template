#!/usr/bin/env node

const express = require('express');
const cors = require('cors');
const app  = express();

require('dotenv').config();
const dbConnection = require('./utils/db');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

// Connect to the database
dbConnection();

app.use(cors());
app.use(express.json());

app.use('/api/users',userRoutes);
app.use('/api/auth',authRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000} 🚀`);
});