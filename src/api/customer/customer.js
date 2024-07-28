const express = require('express');
const { authenticateToken } = require('../../../utils/jwt');
const router = express.Router();
const controller = require('./controller');

router.get('/', authenticateToken, controller.getCustomer);
router.post('/add', authenticateToken, controller.addCustomer);
router.post('/customer', authenticateToken, controller.getSingleCustomer);
router.post('/update', authenticateToken, controller.updateCustomer);
router.post('/delete', authenticateToken, controller.deleteCustomer);
router.post('/search', authenticateToken, controller.searchCustomer);

module.exports = router;
