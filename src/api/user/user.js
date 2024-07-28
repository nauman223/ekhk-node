const express = require('express');
const { authenticateToken } = require('../../../utils/jwt');
const router = express.Router();
const controller = require('./controller');

router.post('/', authenticateToken, controller.getUsers);
router.post('/login', controller.login);
router.post('/add', controller.addUser);
router.post('/user', authenticateToken, controller.getUser);
router.post('/update', authenticateToken, controller.updateUser);
router.post('/delete', authenticateToken, controller.deleteUser);
router.post('/search', authenticateToken, controller.searchUser);

module.exports = router;
