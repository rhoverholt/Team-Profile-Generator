const Employee = require("./employee.js");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {return this.github}

    getRole() {return "Engineer"}

    static askInputPrompts() {
        return Employee.askInputPrompts("engineer", [{type: "input", name: "github", message: `What is the engineer's github name?`}])
    }

    static createWithPrompts() {
        return this.askInputPrompts().then(({name, id, email, github}) => {
            return new Engineer(name, id, email, github);
        })
    }
}

module.exports = Engineer