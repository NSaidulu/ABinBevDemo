const RetailerModel = require('./../../models/MasterRetailers');
const Response = require('./../../utilities/response');
const {statuses} = require('./../../utilities/constants');
const validator = require('validator');
var keygen = require("keygenerator");

module.exports = function(data, callback) {
    let response = new Response();

    if(!data) {
        response.setStatus(statuses.clientError);
        response.setError("Invalid Data");
        response.setMessage("Retailer data is invalid");
        callback(response);
    } else if (!data.retailerName) {
        response.setStatus(statuses.clientError);
        response.setError("Invalid retailerName");
        response.setMessage("RetailerName is invalid");
        callback(response);
    } else if(!data.email || !validator.isEmail(data.email)) {
        response.setStatus(statuses.clientError);
        response.setError("Invalid Email");
        response.setMessage("Email is invalid");
        callback(response);
    } else if(!data.phone) {
        response.setStatus(statuses.clientError);
        response.setError("Invalid Phone");
        response.setMessage("Phone number is invalid");
        callback(response);
    } else if(!data.zipCode) {
        response.setStatus(statuses.clientError);
        response.setError("Invalid ZipCode");
        response.setMessage("ZipCode is invalid");
        callback(response);
    } else if(!data.vatNumber) {
        response.setStatus(statuses.clientError);
        response.setError("Invalid VatNumber");
        response.setMessage("VatNumber is invalid");
        callback(response);
    } else {
        var Retailer = new RetailerModel({
            retailerId : keygen.number(),
            retailerName : data.retailerName,
            addressLine1 : data.addressLine1 || null,
            addressLine2 : data.addressLine2 || null,
            zipCode : data.zipCode,
            contactNumber : data.phone,
            email : data.email,
            vatNumber : data.vatNumber
        });

        Retailer.save(function(err,retailer) {
            if(err) {
                response.setStatus(statuses.serverError);
                response.setError("DB Error");
                response.setMessage("Error while saving retailer data");
                callback(response);
            } else {
                response.setStatus(statuses.success);
                response.setData(retailer);
                response.setMessage("Retailer data saved successfully");
                callback(response);
            }
        })
    }

}