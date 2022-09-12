const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    movieTitle:{
        type:String,
        trim:true
     },
     showingTime:{
        type:String,
        trim:true
     },
     numberOfSeats:{
        type:Number,
        trim:true
     },
     adult:{
        type:Number,
        trim:true
     },
     child:{
        type:Number,
        trim:true
     },
     concession:{
        type:Number,
        trim:true
     },
     user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]      
}, 
{
   timestamps: true
});

module.exports = mongoose.model('Booking', bookingSchema);