const config = require('./../config');
const mongoose = require('mongoose');
mongoose.connect(config.dbUri,{ useNewUrlParser: true });

var Schema = mongoose.Schema;

var MasterProductSchema = new Schema({
    productId : {type : String, required : true},
    productName : {type : String, required : true},
    skuId : {type : String, required : true, unique : true},
    price : {type : Number},
    description : {type : String}
}, 
{
    timestamps: true
});

var MasterProductModel = mongoose.model('MasterProduct',MasterProductSchema);

module.exports = MasterProductModel;