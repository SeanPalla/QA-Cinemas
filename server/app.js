const express = require("express");
const expressSession = require("express-session");
const { default: mongoose } = require("mongoose");
const passport = require("./passport/setup");
const cookieParser = require("cookie-parser");

const cors = require("cors");
require("dotenv").config();
const app = express();

// Setting port varibale  to .env variable , else will default to 5001;
const port = process.env.PORT || 5001;

// Generate a Session config
app.use(
    expressSession({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false, // only want sessions upon logging in
        cookie: {
            maxAge: 1 * 60 * 1000, // 1 hour cookie
        },
    })
);

// Point to client server
app.use(cors({
    origin: process.env.CLIENT,
    credentials: true
})
);
//app.use(cookieParser(process.env.CLIENT));


app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser(process.env.SECRET));
app.use(passport.initialize());
app.use(passport.session());

const movieRoute = require("./routes/movieRoutes");
const commentRoute = require("./routes/commentRoutes");
const authRoute = require("./routes/authRouter");
const userRoute = require("./routes/userRouter");
const bookingRoute = require("./routes/bookingRoutes");
const invoiceRoutes = require("./routes/invoiceRoutes");

app.use("/", movieRoute);
app.use("/", commentRoute);
app.use("/", invoiceRoutes);
app.use("/", bookingRoute);
app.use("/", userRoute);
app.use("/", authRoute);

app.listen(port, () => console.log(`Working on ${port}`));
