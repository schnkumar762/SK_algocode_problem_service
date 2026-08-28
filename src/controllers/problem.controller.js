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
    console.log("get problem clicked");
    throw new NotImplementedError("getProblem");
    // throw new BadRequest("Login", {});
  } catch (error) {
    next(error);
  }
}

function getProblems(req, res, next) {
  try {
    console.log("get problems clicked");
    throw new NotImplementedError("getProblems");
    // throw new BadRequest("Login", {});
  } catch (error) {
    next(error);
  }
}

function deleteProblem(req, res, next) {
  try {
    console.log("delete problem clicked");
    throw new NotImplementedError("deleteProblem");
    // throw new BadRequest("Login", {});
  } catch (error) {
    next(error);
  }
}
function updateProblem(req, res, next) {
  try {
    console.log("update problem clicked");
    throw new NotImplementedError("updateProblem");
    // throw new BadRequest("Login", {});
  } catch (error) {
    next(error);
  }
}
module.exports = {
  pingProblemController,
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
};
