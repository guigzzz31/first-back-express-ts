"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var catchErrorHandler = function (callback) { return function (req, res) {
    callback(req, res).catch(function (err) {
        if (err.name == "MongoError" && err.code == 11000) {
            var message = err.keyPattern.name
                ? "Name already exists"
                : "Duplicate field";
            res.status(400).json({ message: message });
        }
        res.status(500).json({ err: err });
    });
}; };
exports.default = catchErrorHandler;
//# sourceMappingURL=errorHandler.js.map