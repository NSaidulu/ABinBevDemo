const OrderModel = require('./../../models/MasterOrder');
const Response = require('./../../utilities/response');
const {statuses} = require('./../../utilities/constants');

const _ = require('underscore');
const uuidv4 = require('uuid/v4');
var uniqid = require('uniqid');

module.exports = function(orderDetails, callback) {
    let response = new Response();

    if(!orderDetails) {
        response.setStatus(statuses.clientError);
        response.setError("Invalid Order");
        response.setMessage("Order Details invalid");
        callback(response);
    } else if(!orderDetails.retailerId) {
        response.setStatus(statuses.clientError);
        response.setError("Invalid retailerId");
        response.setMessage("Retailer id is invalid");
        callback(response);
    } else if(!orderDetails.products || !orderDetails.products.length) {
        response.setStatus(statuses.clientError);
        response.setError("Invalid products");
        response.setMessage("Invalid products");
        callback(response);
    } else {
        let productDetails = [];
        let orderPrice = 0;
        _.each(orderDetails.products, function(product) {
            let productJson = {
                productId : product.productId,
                productName : product.productName,
                quantity : product.quantity,
                pricePerUnit : product.price
            };

            let price = product.quantity * product.price;
            orderPrice = orderPrice+price;
            
            productDetails.push(productJson);
        });

        let order = new OrderModel({
            orderId : uuidv4(),
            retqilerId : orderDetails.retailerId,
            productDetails : productDetails,
            orderDate : new Date(),
            orderValue : orderPrice,
            PONumber : uniqid(),
            invoiceNumber : uniqid('INV-AB')
        });

        order.save(function(err, orderData) {
            if(err) {
                response.setStatus(statuses.serverError);
                response.setError("DB Error");
                response.setMessage("Error while saving order");
                callback(response);
            } else {
                response.setStatus(statuses.success);
                response.setMessage("Successfully created order");
                response.setData(orderData);
                callback(response);
            }
        })

    }
}