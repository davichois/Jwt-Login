const { Router } = require("express");
const router = Router();

const response = require("../../network/response");
const Controller = require("./authController");

router.get("/", (req, res) => {
  Controller.getAuth()
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch((err) => {
      response.error(req, res, "Success Invalid", 500, err);
    });
});

router.post("/login", (req, res) => {
  const body = req.body;
  Controller.login(body)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch((err) => {
      response.error(req, res, err, 500, "Success Invalid, POST/LOGIN");
    });
});

module.exports = router;
