require('../models/db');
const Booking = require('../models/booking'); 
const User = require('../models/user'); 

exports.listBookings = async(req, res) => {
    let { limit = 4, page = 1, q } = req.query;

    const limitRecords = parseInt(limit);
    const skip = (page -1) * limit;

    let query = {};
    if(q) {
        query = {$text: {$search: q}};
    }
    
    try {
        const bookings = await Booking.find(query).limit(limitRecords).skip(skip);
        res.json({ page:page, limit:limitRecords, bookings});
    } catch (err) {
        res.status(400).json( {message: err })
    } 
};

exports.bookingById =  async (req, res, next) => {
    let paramID = req.params.id;
    const booking = await Booking.findById(paramID);
    if (booking) {
        res.status(200).json(booking);
    } else {
        next(new BookingNotFound(paramID));
    }
};

exports.insertSingleBooking = async(req, res) => {
    const newBooking = new Booking ({
        movieTitle: req.body.movieTitle,
        showingTime: req.body.showingTime,
        numberOfSeats: req.body.numberOfSeats,
        adult: req.body.adult,
        child: req.body.child,
        concession: req.body.concession
    });

    try {
        await newBooking.save();
        res.json(newBooking);
    } catch (err) {
        res.status(400).json({ message: err })
    }
};

exports.insertBookingIntoUser = async(req, res) => {
    let paramID = req.params.id;
    let { bookings } = req.body;
    
    try {
        const addBooking = await User.findOneAndUpdate({_id:paramID},{ $push : { bookings }},
            {safe: true, upsert: true});
        res.json(addBooking);
    } catch (err) {
        res.status(400).json( { message: err })
    }
};

exports.updateSingleBooking = async(req, res) => {
    let paramID = req.params.id;
    let { movieTitle, showingTime, numberOfSeats, adult,
        child, concession } = req.body

    try {
        const updateBooking = await Booking.updateOne({_id:paramID}, { movieTitle,
        showingTime, numberOfSeats, adult, child, concession });
        res.json(updateBooking);
    } catch (err) {
        res.status(400).json( { message: err })
    }
};

exports.deleteSingleBooking = async(req, res) => {
    let paramID = req.params.id;

    try {
        const deleteBooking = await Booking.deleteOne({_id:paramID});
        res.json(deleteBooking);
    } catch (err) {
        res.status(400).json( { message: err })
    }
};