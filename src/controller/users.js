const UsersModel = require('../models/users')

// controller for users
const getAllUsers = async (req, res) => {
    try {
      
      const [data] = await UsersModel.getAllUsers();
  
      res.json({
        message: 'Get all users success',
        data: data
      })
    } catch (error) {
      res.status(500).json({
        message: 'Internal Server Error',
        serverMessage: error,
      })
    }
}

const createNewUsers = (req, res) => {
  console.log(req.body)
  res.json({
    message: 'Create all users success',
    data: req.body
  })
}

const updateUser = (req, res) => {
  const { idUser } = req.params
  console.log('idUser :', idUser);
  res.json({
    message: 'Update user success',
    data: req.body
  })
}

const deleteUser = (req, res) => {
  const { idUser } = req.params
  console.log('idUser :', idUser)
  res.json({
    message: 'Delete user success',
    data: {
      id: idUser,
      name: "wisnu hamka"
    }
  })
}

module.exports = {
  getAllUsers,
  createNewUsers,
  updateUser,
  deleteUser
}
