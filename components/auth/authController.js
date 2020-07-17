const Auth = require("./authModel");

const { signToken } = require("../../utils/verifyToken");

function ControllerAuth() {
  async function getAuth() {
    const auth = await Auth.find();
    return auth;
  }

  async function login(body) {
    const email = body.email;
    const password = body.password;
    const user = await Auth.findOne({ email: email });

    if (!user) {
      return Promise.reject("Error usuario o contraseña Invalida");
    }

    const validPassword = await user.validatePassword(password);

    if (!validPassword) {
      return Promise.reject("Error usuario o contraseña Invalida");
    }

    const token = signToken({ id: user._id });
    // console.log(token);
    return Promise.resolve(token);
  }

  async function createAuth(data) {
    const auth = new Auth({
      _id: data._id,
      username: data.username,
      email: data.email,
      password: data.password,
    });
    auth.password = await auth.encryptPassword(auth.password);
    // console.log("auth" + auth);
    const resultado = await auth.save();
    return resultado;
  }

  async function updateAuth(data) {
    const update = data;
    if (!update.password) {
      const updateAuth = await Auth.findByIdAndUpdate(
        { _id: update._id },
        update,
        {
          new: true,
        }
      );
      console.log(updateAuth);
      console.log("1");
      return updateAuth;
    }
    if (update) {
      const updateAuth = await Auth.findByIdAndUpdate(
        { _id: update._id },
        update,
        {
          new: true,
        }
      );
      console.log(updateAuth);
      updateAuth.password = await updateAuth.encryptPassword(
        updateAuth.password
      );
      const newd = await updateAuth.save();
      console.log("2");
      return newd;
    }
  }

  async function deleteAuth(data) {
    const deleteAuth = await Auth.findByIdAndDelete({ _id: data._id });
    return deleteAuth;
  }

  return {
    login,
    createAuth,
    getAuth,
    updateAuth,
    deleteAuth,
  };
}

module.exports = ControllerAuth();

// const { email, password } = req.body;
// const user = await User.findOne({ email: email });
// if (!user) {
//   res.status(404).json({ message: "No found User" });
// }
// const validPassword = await user.validatePassword(password);

// if (!validPassword) {
//   return res.status(401).json({
//     auth: false,
//     message: "Token null",
//   });
// }

// const token = jwt.sign({ id: user._id }, config.get("keys.JWT-KEY"));
// res.json({ auth: true, token });

/**
 *
 */

// const { username, email, password } = req.body;
// const user = new User({
//   username: username,
//   email: email,
//   password: password,
// });
// user.password = await user.encryptPassword(user.password);
// await user.save();

// const token = jwt.sign({ id: user._id }, config.get("keys.JWT-KEY"), {
//   expiresIn: 60 * 60 * 24,
// });

// res.status(201).json({ auth: true, token });
