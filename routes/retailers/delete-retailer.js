const RetailerModel = require('./../../models/MasterRetailers');
const Response = require('./../../utilities/response');
const {statuses} = require('./../../utilities/constants');

module.exports = function(retailerId, callback) {
    let response = new Response();

   if(!retailerId) {
        response.setStatus(statuses.clientError);
        response.setError("Invalid retailerId");
        response.setMessage("Retailer id is invalid");
        callback(response);
    } else {
        RetailerModel.findOneAndUpdate({retailerId : retailerId},{$set : {status : 'Deactive'}}, function(err, retailer) {
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
            } else {
                response.setStatus(statuses.success);
                response.setMessage("Retailer deleted successfully");
                callback(response);
            }
        })
    }
}