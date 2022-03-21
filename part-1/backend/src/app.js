const path = require("path");
const favicon = require("serve-favicon");
const compress = require("compression");
const helmet = require("helmet");
const cors = require("cors");

const logger = require("./logger");

const feathers = require("@feathersjs/feathers");
const configuration = require("@feathersjs/configuration");
const express = require("@feathersjs/express");

const sequelize = require("./sequelize");

const middleware = require("./middleware");
const models = require("./models");
const services = require("./services");
const appHooks = require("./app.hooks");

const app = express(feathers());

// Load app configuration
app.configure(configuration());
// Enable security, CORS, compression, favicon and body parsing
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(cors());
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(favicon(path.join(app.get("public"), "favicon.ico")));
console.log(path.join(app.get("public"), "assets"));
app.use("/assets", express.static(path.join(app.get("public"), "assets")));

// Set up Plugins and providers
app.configure(express.rest());

app.configure(sequelize);

// Configure other middleware (see `middleware/index.js`)
app.configure(middleware);
// Set up models
app.configure(models);
// Set up services
app.configure(services);

// Host the public folder
app.get("*", (req, resp) => {
  resp.sendFile(path.join(app.get("public"), "index.html"));
}); //express.static(path.join(app.get("public"), "/index.html")));

// Configure a middleware for 404s and the error handler
app.use(express.notFound());
app.use(express.errorHandler({ logger }));

app.hooks(appHooks);

module.exports = app;
