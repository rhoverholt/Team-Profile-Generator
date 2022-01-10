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
        return Employee.askInputPrompts("intern", [{type: "input", name: "school", message: `What school does the intern attend?`}])
    }

    static createWithPrompts() {
        return this.askInputPrompts().then(({name, id, email, school}) => {
            return new Intern(name, id, email, school);
        })
    }
}

module.exports = Intern