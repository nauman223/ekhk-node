const express = require('express');
const router = express.Router();

const user = require('./user/user');
const customer = require('./customer/customer');
router.use('/customer', customer);
router.use('/user', user);

module.exports = router;
