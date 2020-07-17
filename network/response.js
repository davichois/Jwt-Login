exports.success = (req, res, message, status = 200) => {
  res.status(status).json({
    error: false,
    body: message,
  });
};

exports.error = (
  req,
  res,
  message = "Error Interno",
  status = 500,
  details
) => {
  console.log("[ERROR DIAGNOTICADO] \n" + details);
  res.status(status).json({
    error: message,
    body: false,
  });
};
