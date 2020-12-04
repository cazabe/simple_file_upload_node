const express = require('express');
const route = require("./routes");
const con = require("./db_connection")
const path = require("path");
const app = express();


//middleware
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname,"files")));
app.use(route);


//testing database conection
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to datbase!");
  });

const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
    console.log("Server runnig op port" , PORT);
})