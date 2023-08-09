const express = require('express');
const router = express.Router();
const boardController = require('../controllers/boardcontroller.js');

router.get('/', boardController.getAllBoards);

module.exports = router;
