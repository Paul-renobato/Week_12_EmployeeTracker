const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Supermega2015!",
    database: "Employee_Trackerdb",
  });

const checkConnection = () => {
    connection.query(roleCheck, (err, res) => {
      if (err) throw err;
      console.table(res);
      connection.end();
    });
  };

