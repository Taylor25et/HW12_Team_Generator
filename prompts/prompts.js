const db = require("../db/connection");

const startPrompts = [
  {
    type: "list",
    name: "options",
    message: "Please select option from list below",
    choices: [
      "Add Employee",
      "Add Department",
      "Add Role",
      "View Emloyees",
      "View Departments",
      "View Roles",
      "Update Employee Role",
      "Quit",
    ],
  },
];

const addEmployee = [
  {
    type: "input",
    name: "firstName",
    message: "Enter Employee first name",
  },
  {
    type: "input",
    name: "lastName",
    message: "Enter Employee last name",
  },
  {
    type: "list",
    name: "role",
    message: "Enter Employee role",
    choices: async () => {
      try {
        const outcome = await db
          .promise()
          .query("SELECT title AS name, id AS value FROM roles");
        return outcome[0];
      } catch (err) {
        throw err;
      }
    },
  },
  {
    type: "list",
    name: "manager",
    message: "Enter Employee manager",
    choices: async () => {
      try {
        const outcome = await db
          .promise()
          .query(
            "SELECT CONCAT(first_name, ' ', last_name) AS name, id AS value FROM employee"
          );
        return outcome[0];
      } catch (err) {
        throw err;
      }
    },
  },
];

const addDepartment = [
  {
    title: "input",
    name: "department",
    message: "Enter Department name",
  },
];

const addRole = [
  {
    title: "input",
    name: "role",
    message: "Enter Role name",
  },
  {
    title: "input",
    name: "salary",
    message: "Enter yearly salary",
  },
  {
    type: "list",
    name: "department",
    message: "Enter the department of this role",
    choices: async () => {
      try {
        const outcome = await db
          .promise()
          .query("SELECT tile AS name, id AS value FROM department");
        return outcome[0];
      } catch (err) {
        throw err;
      }
    },
  },
];

const updateRole = [
  {
    type: "list",
    name: "employees",
    message: "Select Employee",
    choices: async () => {
      try {
        const outcome = await db
          .promise()
          .query(
            "SELECT CONCAT(first_name, ' ', last_name) AS name, id AS value FROM employee"
          );
        return outcome[0];
      } catch (err) {
        throw err;
      }
    },
  },
  {
    type: "list",
    name: "role",
    message: "Select Employee role",
    choices: async () => {
      try {
        const outcome = await db
          .promise()
          .query("SELECT title AS name, id AS value FROM roles");
        return outcome[0];
      } catch (err) {
        throw err;
      }
    },
  },
];

module.exports = {startPrompts, addEmployee, addDepartment, addRole, updateRole};
