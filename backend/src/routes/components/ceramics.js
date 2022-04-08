const express = require("express");
const { requireSignin, adminMiddleware, upload } = require("../../common-middleware");
const { createCeramics, getCeramics, updateCeramics, deleteCeramics } = require("../../controller/components/ceramics");
const router = express.Router();


router.post("/ceramics/create", requireSignin, adminMiddleware, upload.array("img"), createCeramics)
router.get("/ceramics/get", getCeramics)
router.patch("/ceramics/update/:id", requireSignin, adminMiddleware, updateCeramics)
router.delete("/ceramics/delete/:id", requireSignin, adminMiddleware, deleteCeramics)
// router.get("/ceramics/:productId", getProductDetailsById)

module.exports = router;

