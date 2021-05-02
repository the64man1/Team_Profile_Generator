const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        name: "manager_name",
        type: "input",
        message: "Welcome to the Team Profile Generator! To start building your team, please enter the team manager's name:"
    },
    {
        name: "manager_id",
        type: "input",
        message: "Enter the team manager's ID:"
    },
    {
        name: "manager_email",
        type: "input",
        message: "Enter the team manager's email address:"
    },
    {
        name: "manager_number",
        type: "input",
        message: "Enter the team manager's office number"
    },
    {
        name: ""
    }
])