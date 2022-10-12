// this is the Manager test.
const Manager = require("../lib/Manager.js");

describe('Manager', () => {
    describe('Manager test', () => {
        //Positive test
        it("Should create a class with Role, Name, ID, Email Address", () => {
            // Arrange
            const role = "Engineer"
            const name = "Bob";
            const id = "1";
            const email = "test@test.com";
            const officenumber = '1';
            // Act
            const object = new Manager(role, name, id, email, officenumber);

            // Assert
            expect(object.name).toBe(name);
        });
    });
});