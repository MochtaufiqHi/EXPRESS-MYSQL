const UsersModel = require("../models/users");

// controller for users
const getAllUsers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers();

    res.json({
      message: "Get all users success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      serverMessage: error,
    });
  }
};

const createNewUsers = async (req, res) => {
  const { body } = req;

  try {
    await UsersModel.createNewUser(body);
    res.json({
      message: "Create all users success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      serverMessage: error,
    });
  }
};

const updateUser = async (req, res) => {
  const { idUser } = req.params;
  const { body } = req;

  try {
    await UsersModel.updateUser(body, idUser)  
    res.json({
      message: "Update user success",
      data: {
        id: idUser,
        ...body
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      serverMessage: error,
    });
  }

};

const deleteUser = async (req, res) => {
  const { idUser } = req.params;

  try {
    await UsersModel.deleteUser(idUser)
    res.json({
      message: "Delete user success",
      data: null
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      serverMessage: error,
    });
  }
   
};

module.exports = {
  getAllUsers,
  createNewUsers,
  updateUser,
  deleteUser,
};
