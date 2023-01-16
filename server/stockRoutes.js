const router = require('express').Router();
const stockHelpers = require('../database/stockHelpers.js');

router.get('/', stockHelpers.getAllStocks);
router.get('/update', stockHelpers.updateAllStocks);
router.post('/delete', stockHelpers.deleteStock);
router.post('/add', stockHelpers.addStock);

module.exports = router;