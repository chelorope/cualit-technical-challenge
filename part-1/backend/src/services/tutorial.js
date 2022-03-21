const { NotFound, GeneralError, BadRequest } = require("@feathersjs/errors");
const { Op } = require("sequelize");

class Tutorials {
  async setup(app) {
    let sequelize = app.get("sequelizeClient");
    this.db = sequelize.models.tutorial;
    await this.db.sync();
  }

  async find(params) {
    const { search } = params.query;
    return await this.db.findAll(
      search
        ? {
            where: {
              [Op.or]: [
                { title: { [Op.substring]: search } },
                { description: { [Op.substring]: search } },
              ],
            },
          }
        : {}
    );
  }

  async get(id) {
    const tutorial = await this.db.findByPk(id);
    if (tutorial) {
      return tutorial;
    }
  }

  async create(data) {
    return await this.db.create({
      ...data,
    });
  }

  async update(id, data, params) {
    if (!id) {
      return new NotFound();
    }
    const [updated] = await this.db.update(data, {
      where: {
        id,
      },
    });
    console.log(updated);
    return updated
      ? await this.db.findByPk(id)
      : new NotFound("Tutorial not found");
  }

  async remove(id, params) {
    const deleted = await this.db.destroy(
      id !== null
        ? {
            where: { id },
          }
        : { truncate: true }
    );

    return deleted
      ? {
          status: 200,
          message: `Successfully deleted tutorial${id ? ` ${id}` : "s"}`,
        }
      : new NotFound("Tutorial not found");
  }
}

module.exports = new Tutorials();
