const service = require("feathers-sequelize");

module.exports = (Model) => service({ Model, multi: ["remove"] });
