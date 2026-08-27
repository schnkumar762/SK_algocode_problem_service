const { StatusCodes } = require("http-status-codes");

const NotImplementedError = require("../errors/notImplemented.error");
const BadRequest = require("../errors/badrequest.error");

function pingProblemController(req, res) {
  return res.json({ message: "Problem Controller is up" });
}

function addProblem(req, res, next) {
  try {
    console.log("add problem clicked");
    throw new NotImplementedError("addProblem");
    // throw new BadRequest("Login", {});
  } catch (error) {
    next(error);
  }
}

function getProblem(req, res, next) {
  try {
    console.log("get one");
  } catch (e) {}
}

function getProblems(req, res, next) {
  try {
    console.log("get all");
  } catch (e) {}
}

function deleteProblem(req, res, next) {
  try {
  } catch (e) {}
}
function updateProblem(req, res, next) {
  try {
  } catch (e) {}
}
module.exports = {
  pingProblemController,
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
};
