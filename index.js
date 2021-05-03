const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const { RSA_PKCS1_OAEP_PADDING } = require("constants");
const { start } = require("repl");

const html = [];

const manager_prompt = [
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
        name: "choice",
        type: "list",
        message: "You can choose to enter information for an engineer, an intern, or complete your team",
        choices: ["Engineer", "Intern", "Complete"]
    }
]

const engineer_prompt = [
    {
        name: "engineer_name",
        type: "input",
        message: "Enter engineer's name:"
    },
    {
        name: "engineer_id",
        type: "input",
        message: "Enter engineer's ID:"
    },
    {
        name: "engineer_email",
        type: "input",
        message: "Enter engineer's email address:"
    },
    {
        name: "engineer_github",
        type: "input",
        message: "Enter engineer's GitHub username:"
    },
    {
        name: "choice",
        type: "list",
        message: "You can choose to enter information for an engineer, an intern, or complete your team",
        choices: ["Engineer", "Intern", "Complete"]
    }
]

const intern_prompt = [
    {
        name: "intern_name",
        type: "input",
        message: "Enter intern's name:"
    },
    {
        name: "intern_id",
        type: "input",
        message: "Enter intern's ID:"
    },
    {
        name: "intern_email",
        type: "input",
        message: "Enter intern's email address:"
    },
    {
        name: "intern_school",
        type: "input",
        message: "Enter intern's school:"
    },
    {
        name: "choice",
        type: "list",
        message: "You can choose to enter information for an engineer, an intern, or complete your team",
        choices: ["Engineer", "Intern", "Complete"]
    }
]

function handleChoice (choice) {
    if (choice == "Engineer") {
        engineerPrompt();
    } else if (choice == "Intern") {
        internPrompt();
    } else {
        const htmlEnd = generateEnd();
        html.push(htmlEnd);
        const final = html.join('');
        fs.writeFile('try.html', final, (err) => err ? console.log(err) : console.log("html completed"));
    }
}

function startPrompt () {
    inquirer.prompt(manager_prompt)
        .then((answer) => {
            const manager = new Manager(answer.manager_name, answer.manager_id, answer.manager_email, answer.manager_number);
            const htmlContent = generateManagerCard(manager);
            html.push(htmlContent);

            handleChoice(answer.choice);
        })
}

function engineerPrompt () {
    inquirer.prompt(engineer_prompt)
        .then((answer) => {
            const engineer = new Engineer(answer.engineer_name, answer.engineer_id, answer.engineer_email, answer.engineer_github);
            const htmlContent = generateEngineerCard(engineer);
            html.push(htmlContent);
            
            handleChoice(answer.choice);
        })
}

function internPrompt () {
    inquirer.prompt(intern_prompt)
        .then((answer) => {
            const intern = new Intern(answer.intern_name, answer.intern_id, answer.intern_email, answer.intern_school);
            const htmlContent = generateInternCard(intern);
            html.push(htmlContent);
            
            handleChoice(answer.choice);
        })
}

const generateManagerCard = (manager) => `
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Team Profile Generator</title>
    </head>
    <body>
    <header class="container-fluid-nav bg-dark text-white text-center py-2 mb-4">
        <h1>My Team</h1>
    </header>
    <div class="container">
        <div class="card mb-3">
            <div class="card-header text-white bg-dark">
                <p>${manager.name}</p>
                <p>Manager</p>
            </div>
            <div class="card-body">
                <ul>
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>`

const generateEngineerCard = (engineer) => `
    <div class="card mb-3">
        <div class="card-header text-white bg-dark">
            <p>${engineer.name}</p>
            <p>Engineer</p>
        </div>
        <div class="card-body">
            <ul>
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://www.github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
            </ul>
        </div>
    </div>`

const generateInternCard = (intern) => `
    <div class="card mb-3">
        <div class="card-header text-white bg-dark">
            <p>${intern.name}</p>
            <p>Intern</p>
        </div>
        <div class="card-body">
            <ul>
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>`

const generateEnd = () => `
    </div>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
    </html>`

startPrompt();


    
/* function generateManagerCard(manager) {
    let cardEl = document.createElement("div");
    cardEl.classList.add("card");

    let cardHeaderEl = document.createElement("div");
    cardHeaderEl.classList.add("card-header", "text-white", "bg-dark");

    let nameEl = document.createElement("p");
    nameEl.textContent = manager.name;
    
    let titleEl = document.createElement("p");
    titleEl.textContent = "Manager";

    let cardBodyEl = document.createElement("div");
    cardBodyEl.classList.add("card-body");

    let ulEl = document.createElement("ul");

    let liIdEl = document.createElement("li");
    liIdEl.classList.add('list-group-item');
    liIdEl.textContent = manager.id;

    let liEmailEl = document.createElement("li");
    liEmailEl.classList.add('list-group-item');
    liEmailEl.textContent = manager.email;

    let liNumberEl = document.createElement("li");
    liNumberEl.classList.add('list-group-item');
    liNumberEl.textContent = manager.officeNumber;

    ulEl.appendChild(liIdEl);
    ulEl.appendChild(liEmailEl);
    ulEl.appendChild(liNumberEl);
    cardBodyEl.appendChild(ulEl);

    cardHeaderEl.appendChild(nameEl);
    cardHeaderEl.appendChild(titleEl);

    cardEl.appendChild(cardHeaderEl);
    cardEl.appendChild(cardBodyEl);
} */