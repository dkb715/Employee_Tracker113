const inquirer = require("inquirer");
module.exports = {
  userInput: () => {
    const questions = [
      {
        // update the questions
        name: "options",
        type: "list",
        message: "what would you like to do?:",
        choices: ["add employee", "add department", "add role","update employee role"]
      }
    ];
    return inquirer.prompt(questions);
  },
  updateEmployeeRole: () => {
    
    const questions = [
      {
        name: "employee_id",
        type: "list",
        message: "What is the id of the employee that you wish to update ?:",
        choices: [21,22,23,24,25,26,27,28,29,30]
        
      },
      {
        name: "role_id",
        type: "list",
        message: "What is the role that you which to update ?:",
        choices:[1, 2, 3]
      }
    ];
    return inquirer.prompt(questions);
  },
  addEmployee: () => {
    const questions = [
      {
        // update the questions
        name: "first_name",
        type: "input",
        message: "Enter the first name of the employee that you wish to add:",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Enter the first name of the employee that you wish to add";
          }
        }
      },
      {
        name: "last_name",
        type: "input",
        message: "Enter there last name:",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Enter there last name.";
          }
        }
      },
      {
        name: "role_id",
        type: "input",
        message: "Enter there role id:",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Enter there role id.";
          }
        }
      },
      {
        name: "manager_id",
        type: "input",
        message: "Enter there manager id:",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Enter there manager id.";
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
  addDepartment: () => {
    const questions = [
      {
        name: "name",
        type: "input",
        message: "Enter the department name :",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Enter the department name :";
          }
        }
      },
      {
        name: "id",
        type: "input",
        message: "Enter there department id:",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Enter there id: :";
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
  addRoles: () => {
    const questions = [
      {
        name: "role_id",
        type: "input",
        message: "Enter the role id of the employee:",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Enter the role id of the employee:";
          }
        }
      },
      {
        name: "role_title",
        type: "input",
        message: "Enter the role of the employee:",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Enter the role of the employee:";
          }
        }
      },
      {
        name: "role_salary",
        type: "input",
        message: "Enter there salary:",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Enter there salary: :";
          }
        }
      },
      {
        name: "department_id",
        type: "input",
        message: "Enter there department id:",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Enter there department id: :";
          }
        }
      }
      
    ];
    return inquirer.prompt(questions);
  },

  
  
};

// const mySql = require("mysql");
// const chalk = require("chalk");
// const clear = require("clear");
// const figlet = require("figlet");
// const connection = require("./connection");


// clear();

// console.log(
//   chalk.magentaBright(figlet.textSync("EMPLOYEES", { standardLayout: "full" }))
// );

// const inquirer = require("./index");

// const run = async () => {
//   const { options } = await inquirer.userInput();

//   if (options === "add employee") {
//     const { first_name, last_name, role_id, manager_id } = await inquirer.addEmployee();
//     const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${first_name}','${last_name}', '${role_id}', '${manager_id}')`;
//     const newEmployee = connection.query(sql);
//     console.table(sql);
//     const employees = await connection.query("SELECT * FROM employee");
//     console.table(employees);
//   } else if (options === "update employee role") {
//     const { employee_id: employee_id, role_id: role_id } = await inquirer.updateEmployeeRole();
    
//     console.log(employee_id);
//     console.log(role_id);
    
//     const sql = `UPDATE employee SET role_id='${role_id}' WHERE id='${employee_id}'`
//     connection.query(sql);
//     const employees = await connection.query("SELECT * FROM employee");
//     console.table(employees);
//   } else if (options === "add department") {
//     // console.table("returned from addDept", await inquirer.addDepartment())
//     const { name: department_name, id: department_id }  = await inquirer.addDepartment();
//     const sql2 = `INSERT INTO department (name, id) VALUES ('${department_name}','${department_id}')`;
//     console.table(sql2); const newDepartment = await connection.query(sql2);
//     const department = await connection.query("SELECT * FROM department");
//     console.table(department);
//   } else if (options === "add role" ) {
//     const { role_id, role_title, role_salary, department_id }  = await inquirer.addRoles(); 
//     const sql3 = `INSERT INTO role (id, title, salary, department_id) VALUES ('${role_id}','${role_title}','${role_salary}','${department_id}')`;
//     console.table(sql3); const newRole = await connection.query(sql3);
//     const role = await connection.query("SELECT * FROM role");
//     console.table(role);
//   }
  

 

 
  // const newDepartment = await connection.query(sql2);
  // const department = await connection.query("SELECT * FROM department");
  // console.table(department);
// };

// run();





// const connection = require("./connection");

// class DB {
//     constructor(connection) {
//         this.connection=connection
//     }
//  findAllEmployees () {
//      return this.connection.query(
//          "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT (manager.first_name,' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id=role.id LEFT JOIN department on role.department_id=department.id LEFT JOIN employee manager on manager.id=employee.manager_id"
//      )
//  }
//  findAllByDepartment() {
//      return this.connection.query(
//          "SELECT department.id, department.name, SUM (role.salary) AS utilized_budget FROM employee LEFT JOIN role on employee.role_id=role.id LEFT JOIN department on role.department_id=department.id GROUP BY department.id department.name "
//      )
//  }
//  createEmployee(employee) {
//     return this.connection.query(
//         "INSERT INTO employee SET ?", employee 
//     )
// }
//      removeEmployee(employeeid) {
//          return this.connection.query(
//              "DELETE FROM employee WHERE id=?", employeeid
//          )
//      }
//      updateEmployeeRole(employeeid, role_id) {
//          return this.connection.query(
//              "UPDATE employee SET role_id =? WHERE id=?", [role_id, employeeid]
//          )
//      }
//      findAllByManager() {
//         return this.connection.query(
//             "SELECT manager_id, FROM employee LEFT JOIN role on employee.role_id=role.id LEFT JOIN employee on employee.manager_id=employee.id GROUP BY manager_id employee.id"
//         )
//     }
   

// }
// // module.exports= new DB (connection)
// const mySql = require("mysql");
// const chalk = require("chalk");
// const clear = require("clear");
// const figlet = require("figlet");
// // const connection = require("./connection");


// clear();

// console.log(
//   chalk.magentaBright(figlet.textSync("EMPLOYEES", { standardLayout: "full" }))
// );

// const inquirer = require("./inquirer");

// const run = async () => {
//   const { options } = await inquirer.userInput();

//   if (options === "add employee") {
//     const { first_name, last_name, role_id, manager_id } = await inquirer.addEmployee();
//     const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${first_name}','${last_name}', '${role_id}', '${manager_id}')`;
//     const newEmployee = connection.query(sql);
//     console.table(sql);
//     const employees = await connection.query("SELECT * FROM employee");
//     console.table(employees);
//   } else if (options === "update employee role") {
//     const { employee_id: employee_id, role_id: role_id } = await inquirer.updateEmployeeRole();
    
//     console.log(employee_id);
//     console.log(role_id);
    
//     const sql = `UPDATE employee SET role_id='${role_id}' WHERE id='${employee_id}'`
//     connection.query(sql);
//     const employees = await connection.query("SELECT * FROM employee");
//     console.table(employees);
//   } else if (options === "add department") {
//     // console.table("returned from addDept", await inquirer.addDepartment())
//     const { name: department_name, id: department_id }  = await inquirer.addDepartment();
//     const sql2 = `INSERT INTO department (name, id) VALUES ('${department_name}','${department_id}')`;
//     console.table(sql2); const newDepartment = await connection.query(sql2);
//     const department = await connection.query("SELECT * FROM department");
//     console.table(department);
//   } else if (options === "add role" ) {
//     const { role_id, role_title, role_salary, department_id }  = await inquirer.addRoles(); 
//     const sql3 = `INSERT INTO role (id, title, salary, department_id) VALUES ('${role_id}','${role_title}','${role_salary}','${department_id}')`;
//     console.table(sql3); const newRole = await connection.query(sql3);
//     const role = await connection.query("SELECT * FROM role");
//     console.table(role);
//   }
  

 

 
//   // const newDepartment = await connection.query(sql2);
//   // const department = await connection.query("SELECT * FROM department");
//   // console.table(department);
// };

// run();

// // const inquirer = require("inquirer");
// module.exports = {
//   userInput: () => {
//     const questions = [
//       {
//         // update the questions
//         name: "options",
//         type: "list",
//         message: "what would you like to do?:",
//         choices: ["add employee", "add department", "add role","update employee role"]
//       }
//     ];
//     return inquirer.prompt(questions);
//   },
//   updateEmployeeRole: () => {
    
//     const questions = [
//       {
//         name: "employee_id",
//         type: "list",
//         message: "What is the id of the employee that you wish to update ?:",
//         choices: [21,22,23,24,25,26,27,28,29,30]
        
//       },
//       {
//         name: "role_id",
//         type: "list",
//         message: "What is the role that you which to update ?:",
//         choices:[1, 2, 3]
//       }
//     ];
//     return inquirer.prompt(questions);
//   },
//   addEmployee: () => {
//     const questions = [
//       {
//         // update the questions
//         name: "first_name",
//         type: "input",
//         message: "Enter the first name of the employee that you wish to add:",
//         validate: function(value) {
//           if (value.length) {
//             return true;
//           } else {
//             return "Enter the first name of the employee that you wish to add";
//           }
//         }
//       },
//       {
//         name: "last_name",
//         type: "input",
//         message: "Enter there last name:",
//         validate: function(value) {
//           if (value.length) {
//             return true;
//           } else {
//             return "Enter there last name.";
//           }
//         }
//       },
//       {
//         name: "role_id",
//         type: "input",
//         message: "Enter there role id:",
//         validate: function(value) {
//           if (value.length) {
//             return true;
//           } else {
//             return "Enter there role id.";
//           }
//         }
//       },
//       {
//         name: "manager_id",
//         type: "input",
//         message: "Enter there manager id:",
//         validate: function(value) {
//           if (value.length) {
//             return true;
//           } else {
//             return "Enter there manager id.";
//           }
//         }
//       }
//     ];
//     return inquirer.prompt(questions);
//   },
//   addDepartment: () => {
//     const questions = [
//       {
//         name: "name",
//         type: "input",
//         message: "Enter the department name :",
//         validate: function(value) {
//           if (value.length) {
//             return true;
//           } else {
//             return "Enter the department name :";
//           }
//         }
//       },
//       {
//         name: "id",
//         type: "input",
//         message: "Enter there department id:",
//         validate: function(value) {
//           if (value.length) {
//             return true;
//           } else {
//             return "Enter there id: :";
//           }
//         }
//       }
//     ];
//     return inquirer.prompt(questions);
//   },
//   addRoles: () => {
//     const questions = [
//       {
//         name: "role_id",
//         type: "input",
//         message: "Enter the role id of the employee:",
//         validate: function(value) {
//           if (value.length) {
//             return true;
//           } else {
//             return "Enter the role id of the employee:";
//           }
//         }
//       },
//       {
//         name: "role_title",
//         type: "input",
//         message: "Enter the role of the employee:",
//         validate: function(value) {
//           if (value.length) {
//             return true;
//           } else {
//             return "Enter the role of the employee:";
//           }
//         }
//       },
//       {
//         name: "role_salary",
//         type: "input",
//         message: "Enter there salary:",
//         validate: function(value) {
//           if (value.length) {
//             return true;
//           } else {
//             return "Enter there salary: :";
//           }
//         }
//       },
//       {
//         name: "department_id",
//         type: "input",
//         message: "Enter there department id:",
//         validate: function(value) {
//           if (value.length) {
//             return true;
//           } else {
//             return "Enter there department id: :";
//           }
//         }
//       }
      
//     ];
//     return inquirer.prompt(questions);
//   },

  
  
// };
// const inquirer = require("inquirer");
// module.exports = {
//   userResponse: () => {
//     const questions = [
//       {
//         // update the questions
//         name: "options",
//         type: "list",
//         message: "what would you like to do?:",
//         choices: ["add employee", "add department", "add role","update employee role"]
//       }
//     ];
//     return inquirer.prompt(questions);
//   },
//   updateEmployeeRole: () => {
    
//     const questions = [
//       {
//         name: "employee_id",
//         type: "list",
//         message: "What is the id of the employee that you wish to update ?:",
//         choices: [21,22,23,24,25,26,27,28,29,30]
        
//       },
//       {
//         name: "role_id",
//         type: "list",
//         message: "What is the role that you which to update ?:",
//         choices:[1, 2, 3]
//       }
//     ];
//     return inquirer.prompt(questions);
//   },
//   addEmployee: () => {
//     const questions = [
//       {
//         // update the questions
//         name: "first_name",
//         type: "input",
//         message: "Enter the first name of the employee that you wish to add:",
//         validate: function(value) {
//           if (value.length) {
//             return true;
//           } else {
//             return "Enter the first name of the employee that you wish to add";
//           }
//         }
//       },
//       {
//         name: "last_name",
//         type: "input",
//         message: "Enter there last name:",
//         validate: function(value) {
//           if (value.length) {
//             return true;
//           } else {
//             return "Enter there last name.";
//           }
//         }
//       },
//       {
//         name: "role_id",
//         type: "input",
//         message: "Enter there role id:",
//         validate: function(value) {
//           if (value.length) {
//             return true;
//           } else {
//             return "Enter there role id.";
//           }
//         }
//       },
//       {
//         name: "manager_id",
//         type: "input",
//         message: "Enter there manager id:",
//         validate: function(value) {
//           if (value.length) {
//             return true;
//           } else {
//             return "Enter there manager id.";
//           }
//         }
//       }
//     ];
//     return inquirer.prompt(questions);
//   },
//   addDepartment: () => {
//     const questions = [
//       {
//         name: "name",
//         type: "input",
//         message: "Enter the department name :",
//         validate: function(value) {
//           if (value.length) {
//             return true;
//           } else {
//             return "Enter the department name :";
//           }
//         }
//       },
//       {
//         name: "id",
//         type: "input",
//         message: "Enter there department id:",
//         validate: function(value) {
//           if (value.length) {
//             return true;
//           } else {
//             return "Enter there id: :";
//           }
//         }
//       }
//     ];
//     return inquirer.prompt(questions);
//   },
//   addRoles: () => {
//     const questions = [
//       {
//         name: "role_id",
//         type: "input",
//         message: "Enter the role id of the employee:",
//         validate: function(value) {
//           if (value.length) {
//             return true;
//           } else {
//             return "Enter the role id of the employee:";
//           }
//         }
//       },
//       {
//         name: "role_title",
//         type: "input",
//         message: "Enter the role of the employee:",
//         validate: function(value) {
//           if (value.length) {
//             return true;
//           } else {
//             return "Enter the role of the employee:";
//           }
//         }
//       },
//       {
//         name: "role_salary",
//         type: "input",
//         message: "Enter there salary:",
//         validate: function(value) {
//           if (value.length) {
//             return true;
//           } else {
//             return "Enter there salary: :";
//           }
//         }
//       },
//       {
//         name: "department_id",
//         type: "input",
//         message: "Enter there department id:",
//         validate: function(value) {
//           if (value.length) {
//             return true;
//           } else {
//             return "Enter there department id: :";
//           }
//         }
//       }
      
//     ];
//     return inquirer.prompt(questions);
//   },

  
  
// };
// const mySql = require("mysql");
// const chalk = require("chalk");
// const clear = require("clear");
// const figlet = require("figlet");
// const connection = require("./connection");
// clear();
// console.log(
//   chalk.magentaBright(figlet.textSync("EMPLOYEES", { standardLayout: "full" }))
// );
// const inquirer = require("./inquirer");
// const run = async () => {
//   const { options } = await inquirer.userInput();
//   if (options === "add employee") {
//     const { first_name, last_name, role_id, manager_id } = await inquirer.addEmployee();
//     const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${first_name}','${last_name}', '${role_id}', '${manager_id}')`;
//     const newEmployee = connection.query(sql);
//     console.table(sql);
//     const employees = await connection.query("SELECT * FROM employee");
//     console.table(employees);
//   } else if (options === "update employee role") {
//     const { employee_id: employee_id, role_id: role_id } = await inquirer.updateEmployeeRole();
    
//     console.log(employee_id);
//     console.log(role_id);
    
//     const sql = `UPDATE employee SET role_id='${role_id}' WHERE id='${employee_id}'`
//     connection.query(sql);
//     const employees = await connection.query("SELECT * FROM employee");
//     console.table(employees);
//   } else if (options === "add department") {
//     // console.table("returned from addDept", await inquirer.addDepartment())
//     const { name: department_name, id: department_id }  = await inquirer.addDepartment();
//     const sql2 = `INSERT INTO department (name, id) VALUES ('${department_name}','${department_id}')`;
//     console.table(sql2); const newDepartment = await connection.query(sql2);
//     const department = await connection.query("SELECT * FROM department");
//     console.table(department);
//   } else if (options === "add role" ) {
//     const { role_id, role_title, role_salary, department_id }  = await inquirer.addRoles(); 
//     const sql3 = `INSERT INTO role (id, title, salary, department_id) VALUES ('${role_id}','${role_title}','${role_salary}','${department_id}')`;
//     console.table(sql3); const newRole = await connection.query(sql3);
//     const role = await connection.query("SELECT * FROM role");
//     console.table(role);
//   }
  
 
 
  // const newDepartment = await connection.query(sql2);
  // const department = await connection.query("SELECT * FROM department");
  // console.table(department);
// };
// run();