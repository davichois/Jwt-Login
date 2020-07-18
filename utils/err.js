function err(message, code, details) {
  let e = new Error(message);

  if (code) {
    e.statusCode = code;
  }

  if (details) {
    e.details = details;
  }

  return e;
}

module.exports = err;
