const OrderModel = require('./../../models/MasterOrder');
const Response = require('./../../utilities/response');
const {statuses} = require('./../../utilities/constants');

module.exports = function(orderId, callback) {
    let response = new Response();
    if(!orderId) {
        response.setStatus(statuses.clientError);
        response.setError("Invalid orderId");
        response.setMessage("orderId invalid");
        callback(response);
    } else {
        OrderModel.findOne({orderId : orderId },function(err, orderData) {
            if(err) {
                response.setStatus(statuses.serverError);
                response.setError("DB Error");
                response.setMessage("Error while getting order data");
                callback(response);
            } else {
                response.setStatus(statuses.success);
                response.setMessage("Order details fetched successfully");
                response.setData(orderData);
                callback(response);
            }
        })
    }

}