const inquirer = require("inquirer");
const db = require("./db/connection");
const conT = require("console.table");

const {
  startPrompts,
  addEmployee,
  addDepartment,
  addRole,
  updateRole,
} = require("./prompts/prompts");
const { response } = require("express");

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
      case "View Roles":
        viewRoles();
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

const newEmployee = () => {
  inquirer.prompt(addEmployee).then((response) => {
    db.query(
      "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
      [response.firstName, response.lastName, response.role, response.manager],
      (err, res) => {
        if (err) throw err;
        console.log(
          `${response.firstName} ${response.lastName} has been added!`
        );
        startMenu();
      }
    );
  });
};

const newDepartment = () => {
  inquirer.prompt(addDepartment).then((response) => {
    db.query(
      "INSERT INTO department (name) VALUES (?)",
      response.department,
      (err, res) => {
        if (err) throw err;
        console.log("Department added!");
        startMenu();
      }
    );
  });
};

const newRole = () => {
  inquirer.prompt(addRole).then((response) => {
    db.query(
      "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
      [response.title, response.salary, response.department],
      (err, res) => {
        if (err) throw err;
        console.log("Role added!");
        startMenu();
      }
    );
  });
};

const viewEmployees = () => {
  db.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.table(res);
    startMenu();
  });
};

const viewDepartments = () => {
  db.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    console.table(res);
    startMenu();
  });
};

const viewRoles = () => {
  db.query("SELECT * FROM role", (err, res) => {
    if (err) throw err;
    console.table(res);
    startMenu();
  });
};

const changeRole = () => {
  inquirer.prompt(updateRole).then((response) => {
    db.query(
      "UPDATE employee SET role_id = ? WHERE id = ?",
      [response.update, response.newRole],
      (err, res) => {
        if (err) throw err;
        console.table("Employee Role Update!");
        startMenu();
      }
    );
  });
};

startMenu();
