const Intern = require('../lib/intern')

describe('Intern', () => {
    it("should have the input values given", () => {
        const   name="Rich",
                id = 1,
                email = "test@test.com",
                school = "GA Tech"
                
        let int = new Intern(name, id, email, school);

        let shouldBe = {
            name: name,
            id: id,
            email: email,
            school: school
        }

        expect(int).toEqual(shouldBe);
    })
    it("should return the given name", () => {
        const   name="Rich",
                id = 1,
                email = "test@test.com",
                school = "GA Tech"
                
        let int = new Intern(name, id, email, school);

        let shouldBe = int.getName();

        expect(name).toBe(shouldBe);
    })
    it("should return the given ID", () => {
        const   name="Rich",
                id = 1,
                email = "test@test.com",
                school = "GA Tech"
                
        let int = new Intern(name, id, email, school);

        let shouldBe = int.getId();

        expect(id).toBe(shouldBe);
    })
    it("should return the given Email", () => {
        const   name="Rich",
                id = 1,
                email = "test@test.com",
                school = "GA Tech"
                
        let int = new Intern(name, id, email, school);

        let shouldBe = int.getEmail();

        expect(email).toBe(shouldBe);
    })
    it("should return the appropriate Role", () => {
        const   name="Rich",
                id = 1,
                email = "test@test.com",
                school = "GA Tech"
                
        let int = new Intern(name, id, email, school);

        let shouldBe = int.getRole();

        expect("Intern").toBe(shouldBe);
    })
    it("should return the given School", () => {
        const   name="Rich",
                id = 1,
                email = "test@test.com",
                school = "GA Tech"
                
        let int = new Intern(name, id, email, school);

        let shouldBe = int.getSchool();

        expect(school).toEqual(shouldBe);
    })
});