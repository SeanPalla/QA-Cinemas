const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        trim:true
     },
     dateOfBirth:{
        type:Date,
        required:true,
        trim:true
     },
     email:{
        type:String,
        required:true,
        unique:true,
        match: /.+\@.+\..+/,
        trim:true
     },
     username:{
        type:String,
        required:true,
        unique:true,
        trim:true
     },
     phoneNumber:{
        type:String,
        minLength:11,
        maxLength:11,
        required:false,
        trim:true
     },
     role:{
        type:String,
        default:"MEMBER",
        enum:{ values:["MEMBER","ADMIN"], message:'{VALUE} is not a valid role'},
        required:true,
        trim:true
     },
     address:{
        buildingNameOrNumber:{
           type:String,
           required:true,
           trim:true
        },
        streetName:{
           type:String,
           required:true,
           trim:true
        },
        addressLine2:{
           type:String,
           required:false,
           trim:true
        },
        postcode:{
           type:String,
           required:true,
           trim:true,
           match:/^(([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))\s?[0-9][A-Za-z]{2}))$/,
        },
        city:{
           type:String,
           required:true,
           trim:true
        }
     },
     bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }] 
 });
 
 UserSchema.plugin(passportLocalMongoose);
 const UserModel = new mongoose.model("users", UserSchema);
 module.exports = UserModel;

 // Removed as was not necessary 
 //   password:{
   //      type:String,
   //      required:true,
   //      minLength:7,
   //      match:/(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/,
   //      trim:true
   //   },

