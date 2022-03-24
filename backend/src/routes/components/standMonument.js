const express = require("express");
const { requireSignin, adminMiddleware, upload } = require("../../common-middleware");
const { createStandMonument, getStandMonument, updateStandMonument, deleteStandMonument } = require("../../controller/components/standMonument");
const router = express.Router();


router.post("/standMonument/create", requireSignin, adminMiddleware, upload.array("img"), createStandMonument)
router.get("/standMonument/get", getStandMonument)
router.patch("/standMonument/update/:id", requireSignin, adminMiddleware, updateStandMonument)
router.delete("/standMonument/delete/:id", requireSignin, adminMiddleware, deleteStandMonument)
// router.get("/standMonument/:productId", getProductDetailsById)

module.exports = router;

