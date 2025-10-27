const express = require("express");
const path = require('path');

const app = express();

// Serve all static files (CSS, images, etc.)
app.use(express.static(__dirname));

//localhost:3000 // cors concept
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname + "/index.html"));
})

app.listen(3000); // http server is listening on port 3000

// use this cmd to get rid of port in used error 
//kill -9 $(lsof -ti:3000) || true
//node index.js

