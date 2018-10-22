const OrderModel = require('./../../models/MasterOrder');
const Response = require('./../../utilities/response');
const {statuses} = require('./../../utilities/constants');

module.exports = function(invoiceNumber, callback) {
    let response = new Response();
    if(!invoiceNumber) {
        response.setStatus(statuses.clientError);
        response.setError("Invalid invoiceNumber");
        response.setMessage("Invoice Number invalid");
        callback(response);
    } else {
        OrderModel.findOne({invoiceNumber : invoiceNumber },function(err, orderData) {
            if(err) {
                response.setStatus(statuses.serverError);
                response.setError("DB Error");
                response.setMessage("Error while getting invoice data");
                callback(response);
            } else {
                response.setStatus(statuses.success);
                response.setMessage("Invoice details fetched successfully");
                response.setData(orderData);
                callback(response);
            }
        })
    }

}