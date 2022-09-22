const express = require("express");
const app = express();
require("dotenv").config();
const stripe = require("stripe")(process.env.YOUR_SECRET_KEY);
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
const router = express.Router();

router.post("/payment", cors(), async (req, res) => {
  let { amount, id } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "gbp",
      description: "Tickets",
      payment_method: id,
      confirm: true,
    });
    console.log("Payment", payment);
    res.json({
      message: "Payment successful",
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
});

module.exports = router;
