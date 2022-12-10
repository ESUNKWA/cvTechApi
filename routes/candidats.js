var express = require('express');
var router = express.Router();
var candidatsController = require('../controllers/candidatsController');

router.get('/', candidatsController.index);
router.post('/register', candidatsController.store);

module.exports = router;