const { name } = require("ejs");
const User = require('../models/User');

exports.home = (req, res) => {
    res.render('home');
};
exports.reservation = async (req, res) => {
    try {
        const Users = await User.find();
        res.render('reservations', {
        Users
    });
    } catch (error) {
        res.send('Error loading');
    }
};
