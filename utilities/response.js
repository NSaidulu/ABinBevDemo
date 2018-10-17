var response = function() {
    this.status = "";
    this.message = "";
    this.data = "";
    this.errors = [];
}

response.prototype.setStatus = function(status) {
    this.status = status;
}

response.prototype.setMessage = function(message) {
    this.message = message;
}

response.prototype.setError = function(err) {
    this.errors.push(err);
}

response.prototype.setData = function(data) {
    this.data = data;
}

module.exports = response;