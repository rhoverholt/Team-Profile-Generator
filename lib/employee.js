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

    static askInputPrompts(type = "employee", extendedPrompts = []) {
        const emailValidator = (answer) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(answer)) {return "Please enter a valid email address"}
            return true
        }

        const nonEmptyValidator = (answer) => {
            return (answer) ? true : "Input required";
        }

        return Inquirer.prompt([
            {type: "input", name: "name", message: `What is the ${type}'s name?`, validate: nonEmptyValidator},
            {type: "input", name: "id", message: `What is the ${type}'s id?`, validate: nonEmptyValidator},
            {type: "input", name: "email", message: `What is the ${type}'s email address?`, validate: emailValidator},
            ...extendedPrompts
        ])
    }

    static toHTML(emp) {
        return `
        <div class="card">
            <div class="card-header">
                ${emp.name}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${emp.id}</li>\n
                <li class="list-group-item">E-Mail: <a href="mailto:${emp.email}">${emp.email}</a></li>\n`
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