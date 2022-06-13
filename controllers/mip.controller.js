const printReadme = require("../models/mip.models")

function sendIp(req, res) {

}

function sendHeader(req, res) {

}

function sendReadme(req, res) {
    res.status(200).write(printReadme);
    res.end();
}

module.exports = {
    sendIp,
    sendHeader,
    sendReadme
}