const express = require("express");
const { requireSignin, adminMiddleware, upload } = require("../../common-middleware");
const { createTombstoneCurb, getTombstoneCurb, updateTombstoneCurb, deleteTombstoneCurb } = require("../../controller/components/tombstoneCurb");
const router = express.Router();


router.post("/tombstoneCurb/create", requireSignin, adminMiddleware, upload.array("img"), createTombstoneCurb)
router.get("/tombstoneCurb/get", getTombstoneCurb)
router.patch("/tombstoneCurb/update/:id", requireSignin, adminMiddleware, updateTombstoneCurb)
router.delete("/tombstoneCurb/delete/:id", requireSignin, adminMiddleware, deleteTombstoneCurb)
// router.get("/tombstoneCurb/:productId", getProductDetailsById)

module.exports = router;

