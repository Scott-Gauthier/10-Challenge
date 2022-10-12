// this is the Intern test.
const Intern = require("../lib/Intern.js");

describe('Intern', () => {
    describe('Intern test', () => {
        //Positive test
        it("Should create a class with Role, Name, ID, Email Address", () => {
            // Arrange
            const role = "Engineer"
            const name = "Bob";
            const id = "1";
            const email = "test@test.com";
            const school = '1';
            // Act
            const object = new Intern(role, name,id,email, school);

            // Assert
            expect(object.name).toBe(name);
        });
    });
});