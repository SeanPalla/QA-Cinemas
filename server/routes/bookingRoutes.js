const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.get('/api/bookings/', bookingController.listBookings);
router.get('/api/bookings/:id', bookingController.bookingById);
router.post('/api/bookings/', bookingController.insertSingleBooking);
router.put('/api/bookings/:id', bookingController.insertBookingIntoUser);
router.patch('/api/bookings/:id', bookingController.updateSingleBooking);
router.delete('/api/bookings/:id', bookingController.deleteSingleBooking);

module.exports = router;


