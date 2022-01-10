const Manager = require("./lib/manager");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Inquirer = require("inquirer");
// const HtmlOutput = require("./lib/buildHTML");

const people = [];

function promptForNextEmployee() {
    return Inquirer.prompt([
        {type: "list", name: "whatNext", message: "Who would you like to add next?", 
            choices: ["Engineer", "Intern", "No more employees"]}        
    ]).then(({whatNext}) => {
        switch (whatNext) {
            case "Engineer": {
                Engineer.createWithPrompts().then((eng) => {
                    people.push(eng);
                    return promptForNextEmployee();
                })
                break;
            }
            case "Intern": {
                Intern.createWithPrompts().then((int) => {
                    people.push(int);
                    return promptForNextEmployee();
                })
                break;
            }
            default:
                buildHTML();
        }
    })
}

Manager.createWithPrompts().then( (mgr) => {
    people.push(mgr);
    promptForNextEmployee()
})


function buildHTML() {
    let htmlString = initializeHTML();
    for (let p of people) {
        console.log(p)
        htmlString += p.toHTML();
    }
    htmlString += finalizeHTML();
    writeHTML(htmlString);

    function initializeHTML() {
        return `<!DOCTYPE html>
        <html>
            <head>
                <title>Team Profile</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
                rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
                crossorigin="anonymous">
                <link href="./style.css" rel="stylesheet" >
            </head>
            <body>

                <header>
                    <h1 class="header-banner">Team Profile</h1>
                </header>
                <div class="container">`
    }
    function finalizeHTML() {
        return `
                </div>
            </body>
        </html>`
    }
    function writeHTML(msg) {
        console.log(msg);
    }
}
