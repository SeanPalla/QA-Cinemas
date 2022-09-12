const express= require('express')
const cors = require('cors');
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

const movieRoute = require('./routes/movieRoutes');
const commentRoute = require('./routes/commentRoutes');
const userRoute = require('./routes/userRouter');
const bookingRoute = require('./routes/bookingRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');

app.use('/', movieRoute);
app.use('/', userRoute);
app.use('/', bookingRoute);
app.use('/', commentRoute);
app.use('/', invoiceRoutes);

app.listen(port, () => console.log("Working"));