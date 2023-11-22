const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.get("/", async (req, res) => {
  // res.json(req.body);
  // OR:
  const users = await User.findAll({});
  res.json(users);
  // add async in at top
});

router.get("/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
});

router.post("/", async (req, res) => {
  const newUser = await User.create(req.body);
  //   const users = await User.findAll({})
  res.json(newUser);
});

router.put("/:id", async (req, res) => {
  const updated = await User.update(req.body, { where: { id: req.params.id } });
  const user = await User.findAll({});
  res.json(user);
});

router.delete("/:id", async (req, res) => {
  const deleted = await User.destroy({ where: { id: req.params.id } });
  // const result = User.findAll({});
  res.json(result);
});

module.exports = router;
