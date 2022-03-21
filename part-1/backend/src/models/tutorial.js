const Sequelize = require("sequelize");

const Tutorial = (sequelize) =>
  sequelize.define(
    "tutorial",
    {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      video_url: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      published: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      deleted: {
        type: Sequelize.BOOLEAN,
      },
    },
    {
      freezeTableName: true,
      paranoid: true,
    }
  );

module.exports = Tutorial;
