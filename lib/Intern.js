import Employee from './Employee.js';

export default class Intern extends Employee {
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