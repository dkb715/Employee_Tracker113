const util = require("util");
const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port
//     port: 8080,  
    // Your username
    user: "root",
    // Your password
    password: "yourRootPassword",
    database: "employeetrackerDB"
  });
  //used to connect to the sql server and database
  connection.connect() 
  connection.query=util.promisify(connection.query)
module.exports=connection
