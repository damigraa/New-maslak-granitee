const express = require('express')
const { requireSignin, adminMiddleware, upload } = require("../../common-middleware")
const { graniteMaterialCreate } = require("../../controller/pages/graniteMaterial")
const router = express.Router()

router.post("/graniteCatalog/create", requireSignin, adminMiddleware, upload.single("graniteImg"), graniteMaterialCreate)
router.get("/graniteCatalog/get",)
// router.put("/graniteCatalog/update", requireSignin, adminMiddleware, updateWorkshop)
// router.delete("/graniteCatalog/delete", requireSignin, adminMiddleware, deleteWorkshop)

module.exports = router