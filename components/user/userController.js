const auth = require("../auth/authController");

const User = require("./userModel");

function ControllerUser() {
  async function listUser() {
    const list = await User.find();
    return list;
  }

  async function getUser(id) {
    const getuser = await User.findOne({ _id: id });
    return getuser;
  }

  async function createUser(body) {
    const user = new User({
      user: body.user,
      username: body.username,
      email: body.email,
    });
    // console.log(user._id);
    if (body.password || body.username) {
      await auth.createAuth({
        _id: user._id,
        username: user.username,
        email: user.email,
        password: body.password,
      });
    }
    const resultado = await user.save();
    // console.log(user);
    return resultado;
  }

  async function updateUser(id, body) {
    const update = body;
    if (!update.password) {
      const updateUser = await User.findByIdAndUpdate({ _id: id }, update, {
        new: true,
      });
      // console.log(user._id);
      if (body.password || body.username) {
        await auth.updateAuth({
          _id: updateUser._id,
          username: updateUser.username,
          email: updateUser.email,
        });
      }
      const resultado = await updateUser.save();
      // console.log("1");
      return resultado;
    }
    const updateUser = await User.findByIdAndUpdate({ _id: id }, update, {
      new: true,
    });
    // console.log(user._id);
    if (update.password || update.username) {
      await auth.updateAuth({
        _id: updateUser._id,
        username: updateUser.username,
        email: updateUser.email,
        password: update.password,
      });
    }
    const resultado = await updateUser;
    // console.log("2");
    return resultado;
  }

  async function deleteUser(id) {
    const deleteUser = await User.findByIdAndDelete({ _id: id });
    await auth.deleteAuth({
      _id: deleteUser._id,
    });
    return deleteUser;
  }

  return {
    listUser,
    getUser,
    createUser,
    updateUser,
    deleteUser,
  };
}

module.exports = ControllerUser();
