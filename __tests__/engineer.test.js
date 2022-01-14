const Engineer = require('../lib/engineer')

describe('Engineer', () => {
    it("should have the input values given", () => {
        const   name="Rich",
                id = 1,
                email = "test@test.com",
                github = "github"
                
        let eng = new Engineer(name, id, email, github);

        let shouldBe = {
            name: name,
            id: id,
            email: email,
            github: github
        }

        expect(eng).toEqual(shouldBe);
    })
    it("should return the given name", () => {
        const   name="Rich",
                id = 1,
                email = "test@test.com",
                github = "github"
                
        let eng = new Engineer(name, id, email, github);

        let shouldBe = eng.getName();

        expect(name).toBe(shouldBe);
    })
    it("should return the given ID", () => {
        const   name="Rich",
                id = 1,
                email = "test@test.com",
                github = "github"
                
        let eng = new Engineer(name, id, email, github);

        let shouldBe = eng.getId();

        expect(id).toBe(shouldBe);
    })
    it("should return the given Email", () => {
        const   name="Rich",
                id = 1,
                email = "test@test.com",
                github = "github"
                
        let eng = new Engineer(name, id, email, github);

        let shouldBe = eng.getEmail();

        expect(email).toBe(shouldBe);
    })
    it("should return the appropriate role", () => {
        const   name="Rich",
                id = 1,
                email = "test@test.com",
                github = "github"
                
        let eng = new Engineer(name, id, email, github);

        let shouldBe = eng.getRole();

        expect("Engineer").toBe(shouldBe);
    })
    it("should return the given Github", () => {
        const   name="Rich",
                id = 1,
                email = "test@test.com",
                github = "github"
                
        let eng = new Engineer(name, id, email, github);

        let shouldBe = eng.getGithub();

        expect(github).toEqual(shouldBe);
    })
});