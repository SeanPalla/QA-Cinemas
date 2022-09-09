const express = require('express');
const cors = require('cors');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const movieRoutes = require('./routes/movieRoutes');
const commentRoutes = require('./routes/commentRoutes');
const userRoute = require('./routes/userRouter');

app.use('/', movieRoutes);
app.use('/', commentRoutes);
app.use('/', userRoute);

app.listen(port, () => console.log("Working"));