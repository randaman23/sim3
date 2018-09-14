require("dotenv").config();
const express = require("express"),
  session = require('express-session')
  axios = require("axios"),
  massive = require("massive");
ctrl = require("./controller");
bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(
    session({
      secret: "adfjasdglds",
      resave: false,
      saveUninitialized: true
    })
  );

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING).then(db => app.set("db", db));

app.listen(SERVER_PORT, () => {
  console.log(`Magic is happenin' on port ${SERVER_PORT}`);
});

app.post("/api/register", ctrl.registerUser);
app.post("/api/login", ctrl.loginUser)
