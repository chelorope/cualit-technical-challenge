const errorHandler = require("./hooks/errorHandler");
const verifyJWT = require("./hooks/verifyJWT");
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [verifyJWT()],
    update: [verifyJWT()],
    patch: [],
    remove: [verifyJWT()],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    // all: [errorHandler()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
