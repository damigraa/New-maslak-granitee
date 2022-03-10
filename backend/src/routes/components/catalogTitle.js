const express = require("express");
const { requireSignin, adminMiddleware } = require("../../common-middleware");
const { createCatalogTitle, deleteCatalogTitleById, getCatalogTitle, updateCatalogTitle } = require("../../controller/catalogTitle");

const router = express.Router();

router.post("/catalogTitle/create", requireSignin, adminMiddleware, createCatalogTitle,);
router.get("/catalogTitle/get", requireSignin, adminMiddleware, getCatalogTitle);
router.delete("/catalogTitle/delete/:id", requireSignin, adminMiddleware, deleteCatalogTitleById);
router.patch("/catalogTitle/update/:id", requireSignin, adminMiddleware, updateCatalogTitle)

module.exports = router;
