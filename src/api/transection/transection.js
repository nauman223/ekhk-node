const express = require('express');
const { authenticateToken } = require('../../../utils/jwt');
const router = express.Router();
const controller = require('./controller');

router.post('/', authenticateToken, controller.getTransection);
router.post('/add', authenticateToken, controller.addTransection);
router.post('/customer', authenticateToken, controller.getSingleTransection);
router.post('/update', authenticateToken, controller.updateTransection);
router.post('/delete', authenticateToken, controller.deleteTransection);
router.post('/search', authenticateToken, controller.searchTransection);

module.exports = router;
