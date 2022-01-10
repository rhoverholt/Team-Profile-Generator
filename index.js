const Manager = require("./lib/manager");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

Manager.createWithPrompts().then((mgr) => {
    Engineer.createWithPrompts().then((eng) => {
        Intern.createWithPrompts().then((int) => {
            console.log(mgr);
            console.log(eng);
            console.log(int);
        })
    })
})
