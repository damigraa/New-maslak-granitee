const express = require('express')
const { requireSignin, adminMiddleware } = require("../../common-middleware")
const { createWorkshop, updateWorkshop, getWorkshop, deleteWorkshop } = require('../../controller/pages/workshop')
const router = express.Router()

router.post("/workshop/create", requireSignin, adminMiddleware, createWorkshop)
router.get("/workshop/get", requireSignin, adminMiddleware, getWorkshop)
router.put("/workshop/update", requireSignin, adminMiddleware, updateWorkshop)
router.delete("/workshop/delete", requireSignin, adminMiddleware, deleteWorkshop)

module.exports = router