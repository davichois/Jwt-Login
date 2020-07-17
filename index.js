const app = require("./app");
const db = require("./databases");

const config = require("config");

async function init() {
  db(config.get("configDB.HOST"));
  await app.listen(config.get("configDB.PORT"));
  console.log(`http://localhost:${config.get("configDB.PORT")}`);
}

init();
