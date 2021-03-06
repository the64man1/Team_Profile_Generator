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

module.exports = {
    generateManagerCard: generateManagerCard,
    generateEngineerCard: generateEngineerCard,
    generateInternCard: generateInternCard,
    generateEnd: generateEnd
}