const express = require("express");
const auth = require("./components/auth/authRoutes");
const user = require("./components/user/userRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/user", user);
app.use("/api/auth", auth);

module.exports = app;
