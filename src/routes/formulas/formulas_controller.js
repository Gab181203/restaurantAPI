const express = require('express')
const router = express.Router()
const service = require("./formulas_service");
router.get("/", service.getFormulas);
router.post("/", service.createFormulas);
module.exports = router;


router.get("", service.getFormulas)
router.post("", service.createFormulas)
router.get("/:id", service.getFormulasId)
router.put("/:id", service.putFormulasId)
router.delete("/:id", service.deleteFormulasId)