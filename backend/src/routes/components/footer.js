const express = require("express");
const { requireSignin, adminMiddleware, upload } = require("../../common-middleware");
const { createFooter, getFooter, updateFooter, deleteFooter } = require("../../controller/components/footer");
const router = express.Router();


router.post("/footer/create", requireSignin, adminMiddleware, upload.single("img"), createFooter)
router.get("/footer/get", getFooter)
router.patch("/footer/update/:id", requireSignin, adminMiddleware, updateFooter)
router.delete("/footer/delete/:id", requireSignin, adminMiddleware, deleteFooter)

module.exports = router;

