const mongoose = require('mongoose');

async function connectToMongoDB(url) {
    try {
        await mongoose.connect(url);  // use the passed `url` instead of reading again from env
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

module.exports = connectToMongoDB;
