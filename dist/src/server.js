"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var router_1 = __importDefault(require("./routes/router"));
var app = express_1.default();
//Database
mongoose_1.default
    .connect("mongodb://127.0.0.1:27017/wilderdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
})
    .then(function () { return console.log("Connected to database"); })
    .catch(function (err) { return console.log(err); });
//middleware
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
//routes
app.use(router_1.default);
// start server
app.listen(5000, function () { return console.log("Server started on 5000"); });
//# sourceMappingURL=server.js.map