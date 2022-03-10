const express = require("express")
const { requireSignin, adminMiddleware, upload } = require("../common-middleware")
const { createGraniteMaterial, getGraniteMaterial, updateGraniteMaterial, deleteGraniteMaterial } = require("../controller/graniteMaterial")

const router = express.Router()

router.post("/graniteMaterial/create", requireSignin, adminMiddleware, upload.single('graniteImg'), createGraniteMaterial)
router.get("/graniteMaterial/get", getGraniteMaterial)
router.patch("/graniteMaterial/update/:id", requireSignin, adminMiddleware, updateGraniteMaterial)
router.delete("/graniteMaterial/delete/:id", requireSignin, adminMiddleware, deleteGraniteMaterial)

module.exports = router