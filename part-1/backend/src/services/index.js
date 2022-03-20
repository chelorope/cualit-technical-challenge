module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");

  app.use("/tutorials", require("./tutorial")(sequelizeClient.models.tutorial));
};
