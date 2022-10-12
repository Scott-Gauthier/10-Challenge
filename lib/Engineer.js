//This takes the employee base information and adds on the additional fields needed for Engineer.
const Employee = require( './Employee.js');

class Engineer extends Employee {
    constructor (role, name,id,email,github) {
        super(name,id,email);
        this.github = github;
        this.role = role;
    }
    getGithub() {
        return this.Github;
    }
    getRole(){
        return 'Engineer';
    }
};

module.exports = Engineer;