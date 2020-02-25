const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection=connection
    }
 findAllEmployees () {
     return this.connection.query(
         "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT (manager.first_name,' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id=role.id LEFT JOIN department on role.department_id=department.id LEFT JOIN employee manager on manager.id=employee.manager_id"
     )
 }
 findAllByDepartment() {
     return this.connection.query(
         "SELECT department.id, department.name, SUM (role.salary) AS utilized_budget FROM employee LEFT JOIN role on employee.role_id=role.id LEFT JOIN department on role.department_id=department.id GROUP BY department.id department.name "
     )
 }
 createEmployee(employee) {
    return this.connection.query(
        "INSERT INTO employee SET ?", employee 
    )
}
     removeEmployee(employeeid) {
         return this.connection.query(
             "DELETE FROM employee WHERE id=?", employeeid
         )
     }
     updateEmployeeRole(employeeid, role_id) {
         return this.connection.query(
             "UPDATE employee SET role_id =? WHERE id=?", [role_id, employeeid]
         )
     }
     findAllByManager() {
        return this.connection.query(
            "SELECT manager_id, FROM employee LEFT JOIN role on employee.role_id=role.id LEFT JOIN employee on employee.manager_id=employee.id GROUP BY manager_id employee.id"
        )
    }
   

}
module.exports= new DB (connection)