const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, email and office number values", () => {
            const manager = new Manager("Max", 4, "max@email.com", 10);

            expect(manager.name).toEqual("Max");
            expect(manager.id).toEqual(4);
            expect(manager.email).toEqual("max@email.com");
            expect(manager.officeNumber).toEqual(10);
        })
    })
})