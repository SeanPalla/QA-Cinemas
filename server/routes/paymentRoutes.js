const express = require('express')
const router = express.Router();
const stripe =require('stripe')(process.env.STRIPE_PRIVATE_KEY)


const tickets = new Map([
    [1, {priceInPence: 1000, name: "Adult Price"}],
    [2, {priceInPence: 700, name: "Child Price"}],
    [3, {priceInPence: 500, name: "Concession Price"}],
])

router.post("/create-checkout-session", async (req, res) => {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: req.body.items.map(item => {
          const ticket = tickets.get(item.id)
          return {
            price_data: {
              currency: "gbp",
              product_data: {
                name: ticket.name,
              },
              unit_amount: ticket.priceInPence
            },
            quantity: item.quantity,
          }
        }),
        success_url:`http://localhost:3000/success.html`,
        cancel_url: `http://localhost:3000/cancel.html`,
      })
      res.json({ url: session.url })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  });
module.exports = router;
