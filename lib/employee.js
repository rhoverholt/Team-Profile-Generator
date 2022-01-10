const Inquirer = require("inquirer");
const Manager = require("./manager");



class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {return this.name}

    getId() {return this.id}

    getEmail() {return this.email}

    getRole() {return "Employee"}

    static askInputPrompts(type = "employee", extendedPrompts = []) {
        return Inquirer.prompt([
            {type: "input", name: "name", message: `What is the ${type}'s name?`},
            {type: "input", name: "id", message: `What is the ${type}'s id?`},
            {type: "input", name: "email", message: `What is the ${type}'s email address?`},
            ...extendedPrompts
        ])
    }

    toHTML() {
        console.log(this);
        let htmlOutput = `
        <div class="card">
            <div class="card-header">
                ${this.getName()}
            </div>
            <ul class="list-group list-group-flush">`;
        for (let key of Object.keys(this)) {
            if (key !== "name") htmlOutput += `            <li class="list-group-item">${key}: ${this[key]}</li>\n`;
        }
        htmlOutput += `
            </ul>
        </div>`;

        return htmlOutput
    }
    // Commented out as never used -- initially included for completeness.
    // static createWithPrompts() {
    //     return this.askInputPrompts()
    //     .then(({name, id, email}) => {
    //         return new Employee(name, id, email);
    //     })
    // }
}

module.exports = Employee;