// this is the Engineer test.
const Engineer = require("../lib/Engineer.js");

describe('Engineer', () => {
    describe('Engineer test', () => {
        //Positive test
        it("Should create a class with Role, Name, ID, Email Address", () => {
            // Arrange
            const role = "Engineer"
            const name = "Bob";
            const id = "1";
            const email = "test@test.com";
            const github = '1';
            // Act
            const object = new Engineer(role, name, id, email, github);

            // Assert
            expect(object.name).toBe(name);
        });
    });
});