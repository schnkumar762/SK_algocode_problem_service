const { StatusCodes } = require("http-status-codes");

const NotImplementedError = require("../errors/notImplemented.error");

const { ProblemService } = require("../services");

const { ProblemRepository } = require("../repositories");

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

async function getProblems(req, res, next) {
  try {
    const response = await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched all the problems",
      error: {},
      data: response,
    });
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
