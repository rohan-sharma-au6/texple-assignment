const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
require("./database");
dotenv.config();
const app = express();
app.use(cors());
const port = process.env.PORT || 8080
//app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(require("./routes/todoRoutes"))

app.get("/", function(req, res) {
   
    res.send("Hello")
})

app.listen(port, function() {
    console.log(`server Started on ${port}`)
})