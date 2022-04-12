const inquirer = require("inquirer");
const db = require("./db/connection");
require("console.table");

const {
  startPrompts,
  addEmployee,
  addDepartment,
  addRole,
  updateRole,
} = require("./prompts/prompts");

const startMenu = () => {
  inquirer.prompt(startPrompts).then((response) => {
    switch (response.options) {
      case "Add Employee":
        newEmployee();
        break;
      case "Add Department":
        newDepartment();
        break;
      case "Add Role":
        newRole();
        break;
      case "View Employees":
        viewEmployees();
        break;
      case "View Departments":
        viewDepartments();
        break;
      case "Update Employee Role":
        changeRole();
        break;
      case "Quit":
        console.log("Goodbye");
        db.end();
    }
  });
};
