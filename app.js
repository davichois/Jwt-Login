const express = require("express");
const config = require("config");
const auth = require("./components/auth/authRoutes");
const user = require("./components/user/userRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/user", user);
app.use("/api/auth", auth);

app.get("/api", (req, res) => {
  res.json({
    USER: `http://localhost:${config.get("configDB.PORT")}/api/user`,
    AUTH: `http://localhost:${config.get("configDB.PORT")}/api/auth`,
  });
});

module.exports = app;
