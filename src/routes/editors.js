const express = require('express');
const router = express.Router();
const editorsController = require('../controllers/editorsController');

router.get('/', editorsController.index);
router.post('/', editorsController.create);

module.exports = router;
