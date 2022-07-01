const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');


router.post('/registered', AuthController.register);
router.post('/logged', AuthController.login);


module.exports = router;