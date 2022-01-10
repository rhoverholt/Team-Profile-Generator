const Inquirer = require("inquirer");
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

    static askInputPrompts(type = "employee") {
        return Inquirer.prompt([
            {type: "input", name: "name", message: `What is the ${type}'s name?`},
            {type: "input", name: "id", message: `What is the ${type}'s id?`},
            {type: "input", name: "email", message: `What is the ${type}'s email address?`}
        ])
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