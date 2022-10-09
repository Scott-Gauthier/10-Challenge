import Employee from './Employee.js';

export default class Manager extends Employee {
    constructor (role, name, id, email, officenumber) {
        super(name,id,email);
        this.office_number = officenumber;
        this.role = role;
    }
    getOfficeNumber() {
        return this.officenumber;
    }
    getRole(){
        return 'Manager';
    }    
};
