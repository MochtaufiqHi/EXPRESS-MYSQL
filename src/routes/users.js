// export accomodate to express in a variable
const express = require('express');
// create a container variable express.router
const router = express.Router();
// call controller users
const UserController = require('../controller/users')


// create - post
router.post('/', UserController.createNewUsers)

// read - get
router.get('/', UserController.getAllUsers)

// update - patch
router.patch('/:idUser', UserController.updateUser)

// delete - delete
router.delete('/:idUser', UserController.deleteUser)

module.exports = router