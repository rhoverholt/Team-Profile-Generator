const Inquirer = require("inquirer");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const writeHtml = require("./lib/writeHtml")

const outputHtmlFile = "./dist/index.html"
const outputCSSFile = "./dist/style.css"
const people = [];

function addPerson (person) {
    people.push(person);
    return promptForNextEmployee();
}

// This method prompts the user for the next employee and ends when all employees have been entered.
function promptForNextEmployee() {
    return Inquirer.prompt([{
        type: "list", 
        name: "whatNext", 
        message: "Who would you like to add next?", 
        choices: ["Engineer", "Intern", "No more employees"]
    }])
    .then(({whatNext}) => {
        switch (whatNext) {
            case "Engineer": {
                Engineer.createWithPrompts().then(addPerson)
                break;
            }
            case "Intern": {
                Intern.createWithPrompts().then(addPerson)
                break;
            }
            default: {// not adding any more employees, so write the files and finish.
                writeHtml.writeHTML(outputHtmlFile, outputCSSFile, people);
                console.log(`Your files have been created at ${outputHtmlFile} and ${outputCSSFile}`)
                // the process will now end.
            }
        }
    })
}

// Start by creating a Manager
Manager.createWithPrompts().then(addPerson)