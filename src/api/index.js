const express = require('express');
const router = express.Router();

const user = require('./user/user');
const customer = require('./customer/customer');
const transection = require('./transection/transection');
router.use('/transection', transection);
router.use('/customer', customer);
router.use('/user', user);

module.exports = router;
