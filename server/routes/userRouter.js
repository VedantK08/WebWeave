const express = require("express");
const router = express.Router();

const {
  allUsers,
  specificUser,
  createUser,
  deleteUser,
  checkUser,
} = require("../controllers/userController");

router.get("/all", allUsers);
router.get("/all/:user_id", specificUser);
router.post("/create", createUser);
router.post("/checkuser", checkUser);
router.delete("/delete", deleteUser);

module.exports = router;
