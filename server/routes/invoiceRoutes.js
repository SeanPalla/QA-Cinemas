const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');

router.get('/api/invoice/', invoiceController.allInvoice);
router.get('/api/invoice/:id', invoiceController.invoiceById);
router.post('/api/invoice/', invoiceController.createInvoice);
router.delete('/api/invoice/:id', invoiceController.deleteById);

module.exports = router;