const dns = require("dns");

dns.setServers(["8.8.8.8"]);

const winston = require("winston");
const { LOG_DB_URL } = require("./server.config");
require("winston-mongodb");

// const { Writable } = require("stream");
// const { logToCosmosDB } = require("../clientapis/cosmosClient");

const allowedTransports = [];

// const cosmosDBStream = new Writable({
//   write: (chunk, encoding, callback) => {
//     const message = chunk.toString();
//     console.log("Log intercepted in custom transport:", message);
//     logToCosmosDB("error", message);
//     callback(); // Call the callback to indicate that the write operation is complete
//   },
// });

// const customStreamTransport = new winston.transports.Stream({
//   stream: cosmosDBStream,
// });

// allowedTransports.push(customStreamTransport);

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

//writeable stream to log to cosmos db

module.exports = logger;

/* allowedTransports - Kaha kaha bhejna h...

logger- kya bhejna h

*/
