const express = require('express');
const userControler = require('../controllers/authController');
const authmiddleare = require('../middleWare/authmiddleware');

const router = express.Router();

router.post('/register', userControler.register);
router.post('/login', userControler.login);
router.get('/me',authmiddleare, userControler.getme); 

module.exports = router;