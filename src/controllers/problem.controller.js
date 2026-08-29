const { StatusCodes } = require("http-status-codes");

const NotImplementedError = require("../errors/notImplemented.error");

const { ProblemService } = require("../services");

const { ProblemRepository } = require("../repositories");

const BadRequest = require("../errors/badrequest.error");

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
  return res.json({ message: "Problem Controller is up" });
}

async function addProblem(req, res, next) {
  try {
    const newproblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully Created a new problem",
      error: {},
      data: newproblem,
    });
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
