const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('User', reservationSchema);