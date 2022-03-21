module.exports = function (app) {
  app.use("/tutorials", require("./tutorial"));
  app.use("/token", require("./token"));
};
