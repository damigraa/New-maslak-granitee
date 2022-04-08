const express = require("express");
const { requireSignin, adminMiddleware, upload } = require("../../common-middleware");
const { createGraniteTiles, getGraniteTiles, updateGraniteTiles, deleteGraniteTiles } = require("../../controller/components/graniteTiles");
const router = express.Router();


router.post("/graniteTiles/create", requireSignin, adminMiddleware, upload.array("img"), createGraniteTiles)
router.get("/graniteTiles/get", getGraniteTiles)
router.patch("/graniteTiles/update/:id", requireSignin, adminMiddleware, updateGraniteTiles)
router.delete("/graniteTiles/delete/:id", requireSignin, adminMiddleware, deleteGraniteTiles)

module.exports = router;

