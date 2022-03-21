module.exports = function (app) {
  app.use("/tutorials", require("./tutorial"));
  // (sequelizeClient.models.tutorial)
};
