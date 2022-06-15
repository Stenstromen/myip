require("dotenv").config();
const printReadme = require("../models/mip.models");
const forwardedFor = process.env.FORWARDEDFOR;

function sendIp(req, res) {
  if (forwardedFor === "yes") {
    res.status(200).end(req.headers["x-forwarded-for"]);
  } else {
    res.status(200).end(req.socket.remoteAddress);
  }
}

function sendUserAgent(req, res) {
  res.status(200).end(req.headers["user-agent"]);
}

function sendReadme(req, res) {
  res.status(200).end(printReadme);
}

module.exports = {
  sendIp,
  sendUserAgent,
  sendReadme,
};
