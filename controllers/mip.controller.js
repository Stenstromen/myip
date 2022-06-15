require("dotenv").config();
const printReadme = require("../models/mip.models");
const forwardedFor = process.env.FORWARDEDFOR;

function sendIp(req, res) {
  if (forwardedFor === "yes") {
    res
      .status(200)
      .setHeader("Content-Type", "text/plain")
      .end(req.headers["x-real-ip"] + "\n");
  } else {
    res
      .status(200)
      .setHeader("Content-Type", "text/plain")
      .end(req.socket.remoteAddress + "\n");
  }
}

function sendUserAgent(req, res) {
  res
    .status(200)
    .setHeader("Content-Type", "text/plain")
    .end(req.headers["user-agent"] + "\n");
}

function sendReadme(req, res) {
  res
    .status(200)
    .setHeader("Content-Type", "text/plain")
    .end(printReadme + "\n");
}

module.exports = {
  sendIp,
  sendUserAgent,
  sendReadme,
};
