const express = require('express');
const router = express.Router();

// Save Order
const saveOrder = require('./save-order');
router.post('/saveOrder', function(req, res) {
    saveOrder(req.body, function(result) {
        res.json(result);
    })
});

module.exports = router;
