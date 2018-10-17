const RetailerModel = require('./../../models/MasterRetailers');
const Response = require('./../../utilities/response');
const {statuses} = require('./../../utilities/constants');

module.exports = function(retailerId, callback) {
    let response = new Response();

   if(!retailerId|| !retailerId.length) {
        response.setStatus(statuses.clientError);
        response.setError("Invalid retailerId");
        response.setMessage("Retailer id is invalid");
        callback(response);
    } else {
        RetailerModel.findOne({retailerId : retailerId}, function(err, response) {
            if(err) {
                response.setStatus(statuses.serverError);
                response.setError("DB Error");
                response.setMessage("Error while saving retailer data");
                callback(response);
            } else if(!response){
                response.setStatus(statuses.clientError);
                response.setError("Retailer not exist");
                response.setMessage("No retailer exists with given retailerId");
                callback(response);
            } else if(response.status === "Deactive"){
                response.setStatus(statuses.clientError);
                response.setError("Retailer is Deactivated");
                response.setMessage("Retailer with this retailerId is deactivated");
                callback(response);
            } else {
                response.setStatus(statuses.success);
                response.setData(response);
                response.setMessage("Retailer detailes fetched successfully");
                callback(response);
            }
        })
    }
}