const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, email and school values", () => {
            const intern = new Intern("James", 3, "james@email.com", "Rice");

            expect(intern.name).toEqual("James");
            expect(intern.id).toEqual(3);
            expect(intern.email).toEqual("james@email.com");
            expect(intern.school).toEqual("Rice");
        }),
        it("getRole should return 'Intern'", () => {
            const intern = new Intern();

            const role = intern.getRole();

            expect(role).toEqual("Intern");
        }),
        it("getSchool should return school value the user passed into the object instance'", () => {
            const intern = new Intern("James", 3, "james@email.com", "Rice");

            const school = intern.getSchool();

            expect(school).toEqual("Rice");
        })
    })
})