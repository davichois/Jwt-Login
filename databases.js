const mongoose = require("mongoose");
const connection = mongoose.connection;

async function db(url) {
  await mongoose.connect(url, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

connection.once("open", () => {
  console.log("[DB] => CONNECTADA");
});

connection.on("error", () => {
  throw new Error("Error al conectar la db");
});

module.exports = db;
