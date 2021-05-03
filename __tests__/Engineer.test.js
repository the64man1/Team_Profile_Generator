const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, email and GitHub values", () => {
            const engineer = new Engineer("Dave", 2, "dave@email.com", "dave123");

            expect(engineer.name).toEqual("Dave");
            expect(engineer.id).toEqual(2);
            expect(engineer.email).toEqual("dave@email.com");
            expect(engineer.github).toEqual("dave123");
        }),
        it("getRole should return 'Engineer'", () => {
            const engineer = new Engineer();

            const role = engineer.getRole();

            expect(role).toEqual("Engineer");
        })
    })
})