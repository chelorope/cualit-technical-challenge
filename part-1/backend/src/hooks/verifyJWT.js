const errors = require("@feathersjs/errors");

module.exports = (options = {}) => {
  return async (context) => {
    console.log(context.params.headers);
    // context.error = new errors.NotAuthenticated();
    return Promise.reject(new errors.NotAuthenticated());
  };
};
