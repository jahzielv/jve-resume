const express = require("express");
let app = express();
const path = require("path");

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/out/resume.html"));
});

app.listen(8080);
