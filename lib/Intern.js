//This takes the employee base information and adds on the additional fields needed for Intern.
const Employee = require( './Employee.js');

class Intern extends Employee {
    constructor (role, name,id,email, school) {
        super(name,id,email);
        this.school = school;
        this.role = role;
    }
    getSchool() {
        return this.school;
    }
    getRole(){
        return 'Intern';
    }
};

module.exports = Intern;