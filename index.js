const express = require("express");
const path = require("path");

const config = {
  port: 5000,
};

const app = express();

app.get("/", (_, res) => {
  return res.sendFile(path.join(__dirname, "src/index.html"));
});

app.listen(config.port, (err) => {
  if (err) {
    console.error("Not working");
  }
});
