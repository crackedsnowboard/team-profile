// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // lookup javascript call inside constructor to initialize the function from parent class
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        // console.log(this.github);
        return this.github
    }
    getRole() {
        return "Engineer"
    }

}

module.exports = Engineer
