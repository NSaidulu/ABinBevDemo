const config = require('./../config');
const mongoose = require('mongoose');
mongoose.connect(config.dbUri,{ useNewUrlParser: true });

var Schema = mongoose.schema;

var OrderDetailsSchema = new Schema({
   orderId : {type : String, required : true, unique : true},
   productId : {type : String, required : true},
   quantity : {type : Number},
   price : {type : Number}
}, 
{
    timestamps: true
});

var OrderDetailsModel = mongoose.model('OrderDetails',OrderDetailsSchema);

module.exports = OrderDetailsModel;