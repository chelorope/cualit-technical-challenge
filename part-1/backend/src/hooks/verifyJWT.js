const errors = require("@feathersjs/errors");
const jwt = require("jsonwebtoken");

module.exports = (options = {}) => {
  return async (context) => {
    const token = context.params.headers["authentication-token"];
    const SECRET = context.app.get("token");

    if (!token) {
      return Promise.reject(new errors.NotAuthenticated());
    }

    try {
      const { time } = jwt.verify(token, SECRET);
      if (time - Date.now() > 5 * 60) {
        throw new Error("Time exceeded");
      }
      return context;
    } catch (err) {
      console.log(err);
      return Promise.reject(new errors.NotAuthenticated());
    }
    // return Promise.reject(new errors.NotAuthenticated());
  };
};
