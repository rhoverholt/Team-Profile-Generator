const Employee = require("./employee.js");
const Inquirer = require("inquirer");

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {return this.school}

    getRole() {return "Intern"}

    
    static askInputPrompts() {
        const nonEmptyValidator = (answer) => {
            return (answer) ? true : "Input required";
        }
        
        return Employee.askInputPrompts("intern", [{type: "input", name: "school", message: `What school does the intern attend?`, validate: nonEmptyValidator}])
    }

    static createWithPrompts() {
        return this.askInputPrompts().then(({name, id, email, school}) => {
            return new Intern(name, id, email, school);
        })
    }

    toHTML() {
        return `${Employee.toHTML(this)}\n
            <li class="list-group-item">School: ${this.school}</li>\n`
    }
}

module.exports = Intern