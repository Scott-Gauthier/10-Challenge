import Employee from './Employee.js';

export default class Engineer extends Employee {
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