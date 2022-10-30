const express = require("express");
const router = express.Router();
const service = require("./categories_service");
router.get("/", service.getCategories);
router.post("/", service.createCategories);
module.exports = router;

router.get("/:id", service.getCategoriesId);
router.put("/:id", service.putCategoriesId);
router.delete("/:id", service.deleteCategoriesId);
