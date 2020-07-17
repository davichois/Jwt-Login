const { Router } = require("express");
const router = Router();

const response = require("../../network/response");
const Controller = require("./userController");
const { verifyToken } = require("../../utils/verifyToken");

router.get("/", (req, res) => {
  Controller.listUser()
    .then((list) => {
      response.success(req, res, list, 200);
    })
    .catch((err) => {
      response.error(req, res, "Success Invalid", 500, err);
    });
});

router.get("/me", verifyToken, (req, res) => {
  const { id } = req.userId;
  Controller.getUser(id)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch((err) => {
      response.error(req, res, "Success Invalid", 500, err);
    });
});

router.post("/", (req, res) => {
  const body = req.body;
  Controller.createUser(body)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch((err) => {
      response.error(req, res, "Success Invalid", 500, err);
    });
});

router.put("/", verifyToken, (req, res) => {
  const { id } = req.userId;
  const body = req.body;
  Controller.updateUser(id, body)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch((err) => {
      response.error(req, res, "Success Invalid", 500, err);
    });
});

router.delete("/", verifyToken, (req, res) => {
  const { id } = req.userId;
  Controller.deleteUser(id)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch((err) => {
      response.error(req, res, "Success Invalid", 500, err);
    });
});

module.exports = router;
