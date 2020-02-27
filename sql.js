const inquirer = require("inquirer");

module.exports = {
  userChoice: () => {
    const response = [
      {
        // prompt user with list of choices 
        name: "options",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "Add Employee",
          "Add Department",
          "Add Role",
          "Update Employee Role",
          "Remove Employee",
          "End"
        ]
      }
    ];
    return inquirer.prompt(response);
  },
  //promise function based on user response
  addEmployee: () => {
    const response = [
      {
      
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
    return inquirer.prompt(response);
  },
  addDepartment: () => {
    const response = [
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
    return inquirer.prompt(response);
  },
  addRole: () => {
    const response = [
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
    return inquirer.prompt(response);
  },
  updateEmployeeRole: () => {
    const response = [
      {
        name: "employee_id",
        type: "list",
        message: "What is the employee's id?",
        choices: [1, 2, 3, 4, 5, 6, 7, 8]
      },
      {
        name: "role_id",
        type: "list",
        message: "What is the role that you which to update ?:",
        choices: ["Sales", "Engineer", "Accountant", "Lawyer"]
      }
    ];
    return inquirer.prompt(response);
  },
  removeEmployee: () => {
    const response = [
      {
        name: "employee_id",
        type: "list",
        message: "What is the employee's id?",
        choices: [1, 2, 3, 4, 5, 6, 7, 8]
      },
      {
        name: "role_id",
        input: "list",
        message: "What is the name of the employee?"
      }
    ];
    return inquirer.prompt(response);
  },
  endPrompt: () => {
  }
};
