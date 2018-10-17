var express = require('express');
var router = express.Router();

//Register Retailer
const registerRetailer = require('./register-retailer');
router.post('/register', function(req, res, next) {
    registerRetailer(req.body, function(result) {
        res.json(result);
    })
});



module.exports = router;
