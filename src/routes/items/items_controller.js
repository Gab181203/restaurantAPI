const express = require('express')
const router = express.Router()
const service = require("./items_service");
router.get("/", service.getItems);
router.post("/", service.createItems);
module.exports = router;


router.get("", service.getItems)
router.post("", service.createItems)
router.get("/:id", service.getItemsId)
router.put("/:id", service.putItemsId)
router.delete("/:id", service.deleteItemsId)