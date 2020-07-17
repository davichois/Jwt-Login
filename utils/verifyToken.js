const jwt = require("jsonwebtoken");
const config = require("config");
const response = require("../network/response");

function signToken(data) {
  const resultado = jwt.sign({ id: data }, config.get("keys.JWT-KEY"));
  return resultado;
}

function verifyToken(req, res, next) {
  const token = req.headers["token"];
  if (!token) {
    response.error(req, res, "No provide Token", 401, "Error del VERIFY/TOKEN");
  }
  const decoded = jwt.verify(token, config.get("keys.JWT-KEY"));
  req.userId = decoded.id;
  next();
}

module.exports = {
  verifyToken,
  signToken,
};

// router.get("/me", verifyToken, async (req, res) => {
//   const user = await User.findById(req.userId, { password: 0 });
//   if (!user) {
//     res.status(404).json({ message: "No User found" });
//   }
//   res.send(user);
// });
