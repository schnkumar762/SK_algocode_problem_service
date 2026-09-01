const { CosmosClient } = require("@azure/cosmos");

//connecting your code to cosmos db

const endpoint = process.env.COSMOS_ENDPOINT;

const key = process.env.COSMOS_KEY;

const databaseId = process.env.COSMOS_DATABASE_ID;

const containerId = process.env.COSMOS_CONTAINER_ID;

const client = new CosmosClient({ endpoint, key });

const database = client.database(databaseId);

const container = database.container(containerId);

// add function

async function logToCosmosDB(level, message) {
  try {
    // structure of the document we will store in cosmos db
    await container.items.create({
      level,
      message,
      timestamp: new Date().toISOString(),
    });
    console.log("Log entry added to Cosmos DB:", { level, message });
  } catch (error) {
    console.error("Error logging to Cosmos DB:", error);
  }
}

module.exports = { logToCosmosDB };
