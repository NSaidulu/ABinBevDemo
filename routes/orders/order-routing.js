const express = require('express');
const router = express.Router();

// Save Order
const saveOrder = require('./save-order');
router.post('/saveOrder', function(req, res) {
    saveOrder(req.body, function(result) {
        res.json(result);
    })
});

///Get Invoice Details
const getInvoiceDetails = require('./get-invoice-details');
router.get('/invoiceDetails/:invoiceNumber', function(req, res) {
    getInvoiceDetails(req.params.invoiceNumber, function(result) {
        res.json(result);
    })
});

// Get Order Details
const getOrderDetails = require('./get-order-by-ordernumber');
router.get('/orderDetails/:orderId', function(req, res) {
    getOrderDetails(req.params.orderId, function(result) {
        res.json(result);
    })
});

module.exports = router;
