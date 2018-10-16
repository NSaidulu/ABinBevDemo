const config = require('./../config');
const mongoose = require('mongoose');
mongoose.connect(config.dbUri,{ useNewUrlParser: true });

var Schema = mongoose.schema;

var MasterRetailerSchema = new Schema({
    retailerId : {type : String, required : true},
    retailerName : {type : String, required : true},
    addressLine1 : {type : String, required : true},
    addressLine2 : {type : String},
    zipCode : {type : String},
    contactNumber : {type : Number, required : true},
    email : {type : String},
    vatNumber : {type : String},
    creditLimitDay : {type : Number},
    codEligibility : {type : Boolean},
    creditLimit : {type : Number},
    updatedBy : {type : String}
}, 
{
    timestamps: true
});

var MasterRetailerModel = mongoose.model('MasterRetailer',MasterRetailerSchema);

module.exports = MasterRetailerModel;