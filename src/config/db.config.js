const dns = require("dns");

dns.setServers(["8.8.8.8"]);

const mongoose = require("mongoose");
const { ATLAS_DB_URL, NODE_ENV } = require("./server.config");

async function connectToDB() {
  try {
    if (NODE_ENV == "development") {
      await mongoose.connect(ATLAS_DB_URL);
      console.log("Successfully Connected to dev db");
    } else if (NODE_ENV == "production") {
    }
    //staging //qa
  } catch (error) {
    console.log("Unable to connect to the DB server", error);
  }
}

module.exports = connectToDB;
