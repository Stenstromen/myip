const readmeFile = "./assets/readme.txt";
const fs = require("fs");

const printReadme = fs.readFile(readmeFile, "utf8", (error) => {
    if (error) {
        console.error(error.message);
        throw error;
    }
});

module.exports = printReadme