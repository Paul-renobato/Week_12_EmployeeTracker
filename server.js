const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Supermega2015!',
    database: 'Employee_Trackerdb',
  });

  connection.connect(
    init()
  );

  function init() {
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
      switch (answer.menu) {
      case 'Add departments, roles, or employees':
          addData();
          break;
            
      case 'View departments, roles, or employees':
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
    function addData() {
      inquirer.prompt({
          name: 'addmenu',
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
      switch (answer.addmenu) {
      case 'Departments':
              addDepartment();
          break;
      case 'Roles':
              AddRole();
          break;
      case 'Employees':
              AddEmployee();
          break;
      case 'Exit':
              connection.end();
          break;
          }
        })   
    };
    function addDepartment() {
      inquirer.prompt({
            name: "department",
            type: "input",
            message: "What is the name of the department?"
          }
        )
        .then((answer) => {
          const query =
            `INSERT INTO department (naming) VALUES ('${answer.department}')`
            connection.query(query, (err, res) => {
              init();
            })
        });
    };
    function AddRole() {
      inquirer.prompt([{
      name:'title',
      type:'input',
      message:'What is the role title:',
      },{
      name:'salary',
      type:'input',
      message:'What is the salary:',
      },{
      name:'department_id',
      type:'list',
      message:'What is the ID to the department:',
      },])
        .then((answer) => {
          const query =
            `INSERT INTO roleDept (title, salary, department_id)  VALUES (${answer.title}, ${answer.salary}, ${answer.department_id})`;
            connection.query(query, (err, res) => {
              init();
            })
        });
    };
    function AddEmployee() {
      inquirer.prompt([{
      name: "first_name",
      type: "input",
      message: "What is the first name?",
      },{
      name: "last_name",
      type: "input",
      message: "What is the last name?",
      },{
      name: "role_id",
      type: "input",
      message: "What is the id?",
          },
        ])
        .then((answer) => {
          const query =
            `INSERT INTO employee (first_name, last_name, role_id) VALUES (${answer.first_name}, ${answer.last_name}, ${answer.role_id})`;
            connection.query(query, (err, res) => {
              init();
            })
        });
      };
      function viewData() {
        inquirer.prompt({
            name: 'viewmenu',
            type: 'list',
            message: 'What do you want to view?',
            choices: [
              'Departments',
              'Roles',
              'Employees',
              'Exit',
            ],
          })
          .then((answer) => {
        switch (answer.viewmenu) {
        case 'Departments':
                viewDepartment();
            break;
        case 'Roles':
                viewRole();
            break;
        case 'Employees':
                viewEmployee();
            break;
        case 'Exit':
                connection.end();
            break;
            }
          })   
      };
      function viewDepartment() {
        connection.query("SELECT * FROM department", function (err, res) {
          console.table(res);
          init();
        });
      };
      function viewRole() {
        connection.query("SELECT * FROM roleDept", function (err, res) {
          console.table(res);
          init();
        });
      };
      function viewEmployee() {
        connection.query("SELECT * FROM employee", function (err, res) {
            console.table(res);
            init();
          }
        );
      };
      function RolesUpdate() {
        inquirer.prompt([{
        name: "id",
        type: "input",
        message: "Enter id",
        },
        {
        name: "roleid",
        type: "input",
        message: "Enter role id",
        },
        {
        name: "name",
        type: "input",
        message: "Enter Name",
        }
          ])
        .then((answer) => {
            const query =
              `UPDATE employee SET first_name = '${answer.name}' WHERE id = ${employeeUpdateId}`;
              connection.query(query, (err, res) =>{
                init();
              }
            );
          });
      };