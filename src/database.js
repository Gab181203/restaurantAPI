const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ge0graph13*",
  database: "restaurant_api",
  port: 3306,
});

connection.connect(function (error) {
  if (error) {
    throw error;
  }
  console.log("database ok");
});
module.exports = connection;
