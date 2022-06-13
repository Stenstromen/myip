const express = require("express");

const mipController = require("../controllers/mip.controller");
const mipRouter = express.Router();

mipRouter.get("/", mipController.sendIp);
mipRouter.get("/head", mipController.sendHeader);
mipRouter.get("/readme", mipController.sendReadme);

module.exports = mipRouter;