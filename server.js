const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Supermega2015!",
    database: "Employee_Trackerdb",
  });

  const start = () => {
    inquirer.prompt({
        name: 'menu',
        type: 'list',
        message: 'What do you want to do?',
        choices: [
          'Add departments, roles, or employees',
          'View departments, roles, or employees',
          'Update employee roles',
          'Exit',
        ],
      })
      .then((answer) => {
      switch (answer.action) {
      case 'Adding departments, roles, or employees':
          addData();
          break;
            
      case 'Viewing departments, roles, or employees':
          viewData();
          break;
  
      case 'Update employee roles':
          RolesUpdate();
          break;
  
       case 'Exit':
           connection.end();
          break;
        }
      })
    };
    const addData = () => {
      inquirer.prompt({
          name: 'menu',
          type: 'list',
          message: 'What do you want to add?',
          choices: [
            'Departments',
            'Roles',
            'Employees',
            'Exit',
          ],
        })
        .then((answer) => {
      switch (answer.action) {
      case 'Department':
              addDepartment();
          break;
      case 'Role':
              AddRole();
          break;
      case 'Employee':
              AddEmployee();
          break;
      case 'Exit':
              connection.end();
          break;
          }
        })   
    };

  connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    afterConnection();
  });