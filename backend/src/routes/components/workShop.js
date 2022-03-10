const express = require("express")
const { requireSignin, adminMiddleware } = require("../../common-middleware")

const router = express.Router()

router.post("/workShop/create", requireSignin, adminMiddleware, createComeToUs)
router.get("/workShop/get", getComeToUs)
router.put("/workShop/update/:workShopId", requireSignin, adminMiddleware, updateComeToUs)
router.delete("/workShop/delete", requireSignin, adminMiddleware, deleteComeToUs)

module.exports = router 