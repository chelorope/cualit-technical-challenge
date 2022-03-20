module.exports = (app) => {
  const sequelizeClient = app.get("sequelizeClient");

  require("./tutorial")(sequelizeClient);
};
