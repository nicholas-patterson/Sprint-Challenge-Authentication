const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");
const knexSession = require("connect-session-knex")(session);
const dbconnection = require("../database/dbConfig");

const authenticate = require("../auth/authenticate-middleware.js");
const authRouter = require("../auth/auth-router.js");
const jokesRouter = require("../jokes/jokes-router.js");

const sessionConfig = {
  name: "hockey",
  secret: "I love hockey!",
  cookie: {
    maxAge: 1000 * 60 * 30,
    secure: false,
    httpOnly: true
  },
  resave: false,
  saveUninitialized: true,
  store: new knexSession({
    knex: dbconnection,
    tablename: "knexsessions",
    sidfieldname: "sessionid",
    createtable: true,
    clearInterval: 1000 * 60 * 30 // clean out expired session data
  })
};

const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfig));

server.use("/api/auth", authRouter);
server.use("/api/jokes", authenticate, jokesRouter);

module.exports = server;
