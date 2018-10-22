const express = require('express');
const router = express.Router();

// Get Products List
const getProductsList = require('./get-products-list');
router.get('/getList', function(req, res) {
    getProductsList(function(result) {
        res.json(result);
    })
});

module.exports = router;
