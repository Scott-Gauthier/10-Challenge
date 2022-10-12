// this is the Employee test.
const Employee = require("../lib/Employee.js");

describe('Employee', () => {
    describe('Employee test', () => {
        //Positive test
        it("Should create a class with Role, Name, ID, Email Address", () => {
            // Arrange
            const name = "Bob";
            const id = "1";
            const email = "test@test.com";
            // Act
            const object = new Employee(name,id,email);

            // Assert
            expect(object.name).toBe(name);
        });
    });
});