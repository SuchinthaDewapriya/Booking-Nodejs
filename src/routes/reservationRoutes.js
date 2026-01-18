const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');
const multer = require('multer');

const upload = multer();

router.get('/', reservationController.reservation);
router.post('/newReservation', upload.none(), reservationController.newReservation);

module.exports = router;