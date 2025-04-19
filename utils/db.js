
const mongoose = require('mongoose');
const dbConnection  = async () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log('Database connected 💻');
    }).catch((err) => {
        console.log('Error connecting to database', err);
    });
};

module.exports = dbConnection;
