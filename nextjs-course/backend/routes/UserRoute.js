const express = require('express');
const router =  express.Router();
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controller/UserController');

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/add', createUser);
router.post('/update/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;