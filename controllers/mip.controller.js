require("dotenv").config();
const printReadme = require("../models/mip.models");
const fetchGeo = require("../geo/ip.geo");
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

async function sendGeoip(req, res) {
  if (forwardedFor === "yes") {
    res
      .status(200)
      .setHeader("Content-Type", "text/plain")
      .end((await fetchGeo(req.headers["x-real-ip"])) + "\n");
  } else {
    res
      .status(200)
      .setHeader("Content-Type", "text/plain")
      .end((await fetchGeo(req.socket.remoteAddress)) + "\n");
  }
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
  sendGeoip,
  sendReadme,
};
