const express = require('express');
const router = express.Router();

// Require the controllers
const controller = require('../controllers/index.js');

// Test url to check all of the files 
// are communicating correctly
router.get('/', controller.index);

module.exports = router;