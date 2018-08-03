const router = require('express').Router();
const {landing} = require('../controllers/index');

router.get('/', landing);

module.exports = router;