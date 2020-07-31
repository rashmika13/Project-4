const express = require("express");
const router = express.Router();
const activitiesCtrl = require("../../controllers/activities");

router.get("/", activitiesCtrl.index);

router.post("/add", activitiesCtrl.create);

router.get("/:id", activitiesCtrl.show);

router.delete("/:id", activitiesCtrl.delete);

router.post("/update/:id", activitiesCtrl.update);

module.exports = router;
