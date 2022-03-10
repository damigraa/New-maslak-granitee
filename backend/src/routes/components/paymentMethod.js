const express = require("express")
const { requireSignin, adminMiddleware, upload } = require("../../common-middleware")
const { createPaymentMethod, getPaymentMethod, updatePaymentMethod, deletePaymentMethod } = require("../../controller/paymentMethods")

const router = express.Router()

router.post("/paymentMethod/create", requireSignin, adminMiddleware, upload.single("paymentMethodImg"), createPaymentMethod)
router.get("/paymentMethod/get", getPaymentMethod)
router.patch("/paymentMethod/update/:id", requireSignin, adminMiddleware, updatePaymentMethod)
router.delete("/paymentMethod/delete/:id", requireSignin, adminMiddleware, deletePaymentMethod)

module.exports = router
 