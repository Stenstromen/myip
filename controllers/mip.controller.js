const printReadme = require("../models/mip.models")

function sendIp(req, res) {

}

function sendHeader(req, res) {
    res.status(200).write(printReadme.printReadme);
    res.end();
}

function sendReadme(req, res) {

}

module.exports = {
    sendIp,
    sendHeader,
    sendReadme
}