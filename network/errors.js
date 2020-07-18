const response = require("./response");

function errors(err, req, res, next) {
  console.error("[error]", err);

  const message = err.message || "Error interno";
  const status = err.statusCode || 500;
  const details = err.details || "Error en algun lugar ....";

  response.error(req, res, message, status, details);
}

module.exports = errors;
