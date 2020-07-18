const express = require("express");
const cors = require("cors");
const config = require("config");
const auth = require("./components/auth/authRoutes");
const user = require("./components/user/userRoutes");
const errors = require("./network/errors");

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//Routes
app.use("/api/user", user);
app.use("/api/auth", auth);

app.get("/api", (req, res) => {
  res.json({
    USER: `http://localhost:${config.get("configDB.PORT")}/api/user`,
    AUTH: `http://localhost:${config.get("configDB.PORT")}/api/auth`,
  });
});

app.use(errors);

module.exports = app;
