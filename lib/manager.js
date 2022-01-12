const Employee = require("./employee");
const Inquirer = require("inquirer");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {return "Manager"}

    static askInputPrompts() {
        const nonEmptyValidator = (answer) => {
            return (answer) ? true : "Input required";
        }

        return Employee.askInputPrompts("manager", [{type: "input", name: "officeNumber", message: `What is the manager's office number?`, validate: nonEmptyValidator}])
    }

    static createWithPrompts() {
        return this.askInputPrompts().then(({name, id, email, officeNumber}) => {
            return new Manager(name, id, email, officeNumber);
        })
    }

    toHTML() {
        return `${Employee.toHTML(this)}\n
            <li class="list-group-item">Office #: ${this.officeNumber}</li>\n`
    }

}

module.exports = Manager;