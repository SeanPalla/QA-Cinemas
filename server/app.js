const express= require('express')
require('../models/db');
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(express.static('public'))
   const invoiceRoutes = require('./routes/invoiceRoutes');
   app.use('/',invoiceRoutes);
