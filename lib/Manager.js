//This takes the employee base information and adds on the additional fields needed for Manager.
const Employee = require( './Employee.js');

class Manager extends Employee {
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

module.exports = Manager;