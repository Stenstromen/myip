const express = require("express");

const mipController = require("../controllers/mip.controller");
const mipRouter = express.Router();

mipRouter.get("/", mipController.sendIp);
mipRouter.get("/agent", mipController.sendUserAgent);
mipRouter.get("/geo", mipController.sendGeoip);
mipRouter.get("/readme", mipController.sendReadme);

module.exports = mipRouter;
