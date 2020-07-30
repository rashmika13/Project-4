const express = require("express");
const router = express.Router();
const hydrationsCtrl = require("../../controllers/hydrations");

router.get("/", hydrationsCtrl.index);

router.post("/add", hydrationsCtrl.create);

router.get("/:id", hydrationsCtrl.show);

router.delete("/:id", hydrationsCtrl.delete);

router.post("/update/:id", hydrationsCtrl.update);

module.exports = router;
