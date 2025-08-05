const express = require('express');
const router = express.Router();
const signinValidator = require('../middlewares/inputValidator');

router.get('/signin', signinValidator, (req, res) => {

});

module.exports = router;