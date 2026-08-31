const dns = require("dns");

dns.setServers(["8.8.8.8"]);

const winston = require("winston");
const { LOG_DB_URL } = require("./server.config");
require("winston-mongodb");

const allowedTransports = [];

// the below transport config enables logging on the console

allowedTransports.push(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      //  winston.format.simple(),
      winston.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),
      winston.format.printf(
        (log) => `${log.timestamp} [${log.level}]:${log.message}`,
      ),
    ),
  }),
);

// the below added config enables logging in mongodb database
allowedTransports.push(
  new winston.transports.MongoDB({
    //config for connection to mongodb
    //particular type of logs
    level: "error",
    db: LOG_DB_URL,
    collection: "LOGS",
  }),
);

// the below transport config enables logging in mongodb database

allowedTransports.push(
  new winston.transports.File({
    filename: `app.log`,
  }),
);

const logger = winston.createLogger({
  //config
  format: winston.format.combine(
    // first argument to the combine method is defining how we want the timestamp to come up

    winston.format.errors({
      stack: true,
    }),
    winston.format.timestamp({
      format: "YYYY-MM-DD HH-mm-ss",
    }),
    //Second argument to the combine method, which defines what is exactly going to be printed in log
    winston.format.printf(
      (log) => `${log.timestamp} [${log.level.toUpperCase()}] : ${log.message}`,
    ),
  ),
  transports: allowedTransports,
});

module.exports = logger;

/* allowedTransports - Kaha kaha bhejna h...

logger- kya bhejna h

*/
