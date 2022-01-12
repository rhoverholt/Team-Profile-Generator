const Employee = require("./employee.js");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {return this.github}

    getRole() {return "Engineer"}

    static askInputPrompts() {
        const nonEmptyValidator = (answer) => {
            return (answer) ? true : "Input required";
        }
        
        return Employee.askInputPrompts("engineer", [{type: "input", name: "github", message: `What is the engineer's github name?`, validate: nonEmptyValidator}])
    }

    static createWithPrompts() {
        return this.askInputPrompts().then(({name, id, email, github}) => {
            return new Engineer(name, id, email, github);
        })
    }

    toHTML() {
        return `${Employee.toHTML(this)}\n
            <li class="list-group-item">Github: <a href="https://github.com/${this.github}">${this.github}</a></li>\n`
    }
}

module.exports = Engineer