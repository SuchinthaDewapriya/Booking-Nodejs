const Reservation = require('../models/Reservation');

exports.reservation = async (req, res) => {
    try {
        const Reservations = await Reservation.find();
        res.render('reservations', {
        Reservations
    });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error loading reservations');
    }
};

exports.newReservation = async (req, res) => {
    try {

        const { FirstName, LastName } = req.body;
        await Reservation.create({
            FirstName,
            LastName
        });
        res.status(201).json({ success:true });
    } catch (error) {
        console.error('SAVE ERROR:', error);
        res.status(500).json( {success:false} );
    }
}