const errors = require("@feathersjs/errors");

module.exports = (options = {}) => {
  return async (context) => {
    if (context.error) {
      const error = context.error;
      if (!error.code) {
        const newError = new errors.GeneralError("server error");
        context.error = newError;
        return context;
      }
      if (error.code === 404 || process.env.NODE_ENV === "production") {
        error.stack = null;
      }
      return context;
    }
  };
};
