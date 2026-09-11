//service k andar ja k problem service ko mock kregi
jest.mock("../src/services", () => ({
  ProblemService: jest.fn(),
}));

const problemController = require("../src/controllers/problem.controller");
const problemService = require("../src/services").ProblemService;
const { StatusCodes } = require("http-status-codes");

problemService.prototype.getAllProblems = jest.fn();

describe("tests", () => {
  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn(() => res),
      json: jest.fn(), //empty function
    };
    next = jest.fn();
  });

  test("should get all problems", async () => {
    const problems = [];
    problemService.prototype.getAllProblems.mockResolvedValue(problems);
    //jab bhi ye call hoga isko successfully chali/n  mock kroo

    await problemController.getProblems(req, res, next);

    expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
    expect(problemService.prototype.getAllProblems).toHaveBeenCalledTimes(1);
    expect(next).not.toHaveBeenCalled();
  });

  //controller class service class ka object bnati h

  //
});
