const router = require('express').Router();
const stockHelpers = require('../database/stockHelpers.js');

router.get('/', stockHelpers.getAllStocks);
router.get('/update', stockHelpers.updateAllStocks);
router.post('/delete', stockHelpers.deleteStock);
router.post('/add', stockHelpers.addStock);
router.post('/record', stockHelpers.recordStock);
router.post('/unrecord', stockHelpers.unrecordStock);
router.get('/getrecord', stockHelpers.getRecordStock);
router.get('/getstock', stockHelpers.getStock);

module.exports = router;