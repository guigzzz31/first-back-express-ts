import express from "express";
import WilderController from "../controllers/wilders";
import catchErrorHandler from "../utils/errorHandler";
const router = express.Router();

router.post("/api/wilders", catchErrorHandler(WilderController.create));
router.get("/api/wilders", catchErrorHandler(WilderController.get));
router.put("/api/wilders/:_id", catchErrorHandler(WilderController.update));
router.delete("/api/wilders/:_id", catchErrorHandler(WilderController.delete));

export default router;
