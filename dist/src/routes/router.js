"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var wilders_1 = __importDefault(require("../controllers/wilders"));
var errorHandler_1 = __importDefault(require("../utils/errorHandler"));
var router = express_1.default.Router();
router.post("/api/wilders", errorHandler_1.default(wilders_1.default.create));
router.get("/api/wilders", errorHandler_1.default(wilders_1.default.get));
router.put("/api/wilders/:_id", errorHandler_1.default(wilders_1.default.update));
router.delete("/api/wilders/:_id", errorHandler_1.default(wilders_1.default.delete));
exports.default = router;
//# sourceMappingURL=router.js.map