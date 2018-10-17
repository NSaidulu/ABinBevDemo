const config = require('./../config');
const mongoose = require('mongoose');
mongoose.connect(config.dbUri,{ useNewUrlParser: true });

var Schema = mongoose.Schema;

var MasterOrderSchema = new Schema({
    orderId : {type : String, required : true},
    orderNumber : {type : String, required : true, unique : true},
    retqilerId : {type : String, required : true},
    orderDate : {type : Date},
    orderValue : {type : Number},
    PONumber : {type : String, unique : true},
    invoiceNumber : {type : String, Unique : true},
    orderStatus : {type : String, enum : ['Pending','Verified','Approved','Rejected','Completed']},
    invoiceStatus : {type : String}
}, 
{
    timestamps: true
});

var MasterOrderModel = mongoose.model('MasterOrder',MasterOrderSchema);

module.exports = MasterOrderModel;