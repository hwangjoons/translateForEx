const router = require('express').Router();
const dbHelpers = require('../database/dbHelpers.js');

router.get('/', dbHelpers.getAllCurrency);

module.exports = router;