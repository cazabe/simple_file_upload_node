const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost21",
  user: process.env.MYSQL_USER,
  password: "",
  port:process.env.MYSQL_PORT,
  database: "multer_api"
});

module.exports = con;