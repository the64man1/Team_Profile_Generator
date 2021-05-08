const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, and email values", () => {
            const employee = new Employee("Bob", 1, "bob@email.com");

            expect(employee.name).toEqual("Bob");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("bob@email.com");
        }),
        it("getRole should return 'Employee'", () => {
            const employee = new Employee();

            const role = employee.getRole();

            expect(role).toEqual("Employee");
        }),
        it("getName should return name value the user passed into the object instance", () => {
            const employee = new Employee("Bob", 1, "bob@email.com");

            const name = employee.getName();

            expect(name).toEqual("Bob");
        }),
        it("getId should return ID value the user passed into the object instance", () => {
            const employee = new Employee("Bob", 1, "bob@email.com");

            const id = employee.getId();

            expect(id).toEqual(1);
        }),
        it("getId should return email value the user passed into the object instance", () => {
            const employee = new Employee("Bob", 1, "bob@email.com");

            const email = employee.getEmail();

            expect(email).toEqual("bob@email.com");
        })
    })
})