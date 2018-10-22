const ProductModel = require('./../../models/MasterProduct');
const Response = require('./../../utilities/response');
const {statuses} = require('./../../utilities/constants');

module.exports = function(callback) {
    let response = new Response();
    ProductModel.find({},function(err, products) {
        if(err) {
            response.setStatus(statuses.serverError);
            response.setError("DB Error");
            response.setMessage("Error while getting products list");
            callback(response);
        } else {
            response.setStatus(statuses.success);
            response.setMessage("Product list retrived successfully");
            response.setData(products);
            callback(response);
        }
    })
}