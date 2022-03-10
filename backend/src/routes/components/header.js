const express = require('express')
const { requireSignin, adminMiddleware } = require('../../common-middleware')
const { addHeader, getHeader, updateHeader, deleteHeader } = require('../../controller/header')
const router = express.Router()


router.post("/header/create", requireSignin, adminMiddleware, addHeader)
router.get("/header/get", getHeader)
router.patch("/header/updateHeader/:id", updateHeader)
router.delete("/header/deleteHeader/:id", requireSignin, adminMiddleware, deleteHeader)


module.exports = router  