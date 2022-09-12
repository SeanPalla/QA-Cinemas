const express = require('express');
const expressSession = require('express-session');
const { default: mongoose } = require('mongoose');
const passport = require('./passport/setup');
const auth = require('./routes/authRouter');

const cors = require('cors');
require('dotenv').config();



const app = express();
const port = process.env.PORT || 5000;

app.use(expressSession({
    secret: "joiahjiufuioahefua", //placeholder secret while working on sessions/permissionss
    resave: false,
    saveUninitialized: false, // only want sessions upon logging in
    cookie: {
        maxAge: 1 * 60 * 1000 // 1 hour cookie
    }
}));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

const movieRoutes = require('./routes/movieRoutes');
const commentRoutes = require('./routes/commentRoutes');
const authRouter = require('./routes/authRouter');
const userRoute = require('./routes/userRouter');
const bookingRoute = require('./routes/bookingRoutes');

app.use('/', movieRoute);
app.use('/', commentRoute);
app.use('/', bookingRoute);
app.use('/', userRoute);
app.use('/', authRoute);

app.listen(port, () => console.log("Working"));