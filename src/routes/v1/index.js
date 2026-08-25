const express = require("express");

const ProblemRouter = require("./problems.routes");

const v1Router = express.Router();

// /problems-> problemRouter
v1Router.use("/problems", ProblemRouter);

module.exports = v1Router;
