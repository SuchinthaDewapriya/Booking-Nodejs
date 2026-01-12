const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/booking_db');
        console.log('MongoDB Connected');
    }catch{
        console.error('DB connection failed', error);
        process.exit(1);
    }
};

module.exports = connectDB;