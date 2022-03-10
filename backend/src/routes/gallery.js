const express = require("express");
const { requireSignin, adminMiddleware, upload } = require("../common-middleware");
const { createGallery, getGallery, deleteGalleryById } = require("../controller/gallery")

const router = express.Router();


router.post("/gallery/create", requireSignin, adminMiddleware, upload.array("galleryPictures"), createGallery);
// router.get("/products/:slug", getProductsBySlug);
// //router.get('/category/getcategory', getCategories);
// router.get("/product/:productId", getProductDetailsById);

router.delete("/gallery/deleteGalleryById",
  requireSignin,
  adminMiddleware,
  deleteGalleryById
);
router.get("/gallery/getGallery",
  requireSignin,
  adminMiddleware,
  getGallery
);

module.exports = router;
