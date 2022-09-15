const mongoose = require('mongoose');
const invoiceSchema = new mongoose.Schema({
    total:{
        type:mongoose.Types.Decimal128,
        required:true,
        trim:true
    },
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],   
    movie: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
},   
{
    timestamps: true
 });

module.exports = mongoose.model('invoice', invoiceSchema);