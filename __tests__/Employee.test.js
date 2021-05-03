const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, and email values", () => {
            const employee = new Employee("Bob", 1, "bob@email.com");

            expect(employee.name).toEqual("Bob");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("bob@email.com");
        })
    })
})