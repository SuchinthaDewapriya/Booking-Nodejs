const { name } = require("ejs");

exports.home = (req, res) => {
    res.render('home');
};