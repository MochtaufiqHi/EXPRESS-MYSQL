// controller for users
const getAllUsers = (req, res) => {
  const data = {
    id: "1",
    name: "mochammad taufiq hidayat",
    email: "mochammadtaufiq779@gmail.com",
    password: "12345"
  }

  res.json({
    message: 'Get all users success',
    data: data
  })
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
