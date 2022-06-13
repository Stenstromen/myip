const express = require("express");
const app = express();
const mipRouter = require("./routers/mip.router");

app.use(mipRouter);

app.listen(8080, () => {
    console.log("Server running on localhost:8080")
})