//required packages for functional application
const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require('console.table');
const DB = require("./DBfolder/index");
  // this will prompt users asking what action they want to take
  runPrompt()
function runPrompt() {

    inquirer
      .prompt({
        type: "list",
        name: "task",
        message: "Would you like to do?",
        choices: [
          "View All Employees",
          "View All Employees by Department",
          "View All Employees by Manager",
          "Add Employee",
          "Remove Employee",
          "Update Employee Role",
          "Update Employee Manager",
          "View All Roles",
          "Add Role",
          "Remove Role",
          "End"]
      })
      .then(function ({ task }) {
        switch (task) {
          case "View Employees":
            viewEmployee();
            break;
          case "View Employees by Department":
            viewEmployeeByDepartment();
            break;
          // case "View Employees by Manager":
          //   viewEmployeeByManager();
          //   break;
          case "Add Employee":
            addEmployee();
            break;
          case "Remove Employees":
            removeEmployees();
            break;
          case "Update Employee Role":
            updateEmployeeRole();
            break;
          case "Add Role":
            addRole();
            break;
          // case "Remove Role":
          //   removeRole();
          //   break;
  
          // case "Update Employee MAnager":
          //   updateEmployeeManager();
          //   break;
  
          case "End":
            connection.end();
            break;
        }
      });

  }