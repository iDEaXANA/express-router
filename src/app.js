const express = require("express");
const app = express();

app.use(express.json());

const usersRouter = require("../routes/users");
app.use("/users", usersRouter);
const fruitsRouter = require("../routes/fruits");
app.use("/fruits", fruitsRouter);

module.exports = app;
