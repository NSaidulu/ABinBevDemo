var express = require('express');
var router = express.Router();

//Register Retailer
const registerRetailer = require('./register-retailer');
router.post('/register', function(req, res) {
    registerRetailer(req.body, function(result) {
        res.json(result);
    })
});

//Fetch Retailer Details
const findRetailer = require('./find-retailer');
router.get('/findRetailer/:retailerId', function(req, res) {
    findRetailer(req.params.retailerId, function(result) {
        res.json(result);
    })
})



module.exports = router;
