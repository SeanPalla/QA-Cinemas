require('../models/db');
const Invoice = require('../models/invoice');
const User = require('../models/user');
const Movie = require('../models/movie');

exports.allInvoice = async (req, res) => {

    res.json(await Invoice.find());

    console.log("running")

};
exports.invoiceById =  async (req, res, next) => {

    const invoice = await Invoice.findById(req.params.id);

    if (invoice) {
        res.status(200).json(invoice);
    } else {
        next(new UserNotFoundError(req.params.id))
    }
};
exports.createInvoice =  async (req, res, next) => {
    try {
        const invoice = new Invoice(req.body);
        await invoice.save();
        res.status(201)
                .setHeader("Content-Location", `/invoice/${invoice.id}`)
                .json(user);
    } catch (error) {
        next(error);
    }
};
exports.deleteById = async (req, res, next) => {
    const invoice = await Invoice.findOneAndDelete({ _id: req.params.id });
    if (invoice) {
      res.status(200).json(invoice);
    } else {
      next(new UserNotFoundError(req.params.id));
    }
  };