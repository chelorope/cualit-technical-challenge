const { NotFound, GeneralError, BadRequest } = require("@feathersjs/errors");
const jwt = require("jsonwebtoken");

class Token {
  async setup(app) {
    this.secret = app.get("token");
  }

  async find() {
    return jwt.sign({ time: Date.now() }, this.secret);
  }
}

module.exports = new Token();
