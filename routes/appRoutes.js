const express = require('express');
router = express.Router();

appRoutes = require('../controller/appController');

router.get("/", appRoutes.appController);

module.exports = router;