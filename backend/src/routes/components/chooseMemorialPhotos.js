const express = require("express")
const { requireSignin, adminMiddleware } = require("../../common-middleware")
const { createChooseMemorialPhotos, getChooseMemorialPhotos, updateChooseMemorialPhotos, deleteChooseMemorialPhotos } = require("../../controller/components/chooseMemorialPhotos")

const router = express.Router()

router.post("/chooseMemorialPhotos/create", requireSignin, adminMiddleware, createChooseMemorialPhotos)
router.get("/chooseMemorialPhotos/get", getChooseMemorialPhotos)
router.patch("/chooseMemorialPhotos/update/:id", requireSignin, adminMiddleware, updateChooseMemorialPhotos)
router.delete("/chooseMemorialPhotos/delete", requireSignin, adminMiddleware, deleteChooseMemorialPhotos)

module.exports = router