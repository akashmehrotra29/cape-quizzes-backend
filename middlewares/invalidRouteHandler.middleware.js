const invalidRouteHandler = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Undefined endpoint!",
  });
};

module.exports = invalidRouteHandler;
