const Employee = require("./employee");
const Inquirer = require("inquirer");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {return "Manager"}

    static askInputPrompts() {
        return Employee.askInputPrompts("manager").then((obj) => {
            return Inquirer.prompt([
                {type: "input", name: "officeNumber", message: `What is the manager's office number?`}
            ]).then(
                ({officeNumber}) => {
                    obj.officeNumber = officeNumber;
                    return obj;
                })
        })
    }

    static createWithPrompts() {
        return this.askInputPrompts()
            .then(({name, id, email, officeNumber}) => {
            return new Manager(name, id, email, officeNumber);
        })
    }


}

module.exports = Manager;