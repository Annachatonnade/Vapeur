const express = require('express');
const router = express.Router();
const gamesController = require('../controllers/gamesController');

router.get('/', gamesController.index);
router.post('/', gamesController.create);

module.exports = router;
