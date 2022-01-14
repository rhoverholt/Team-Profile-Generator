const Manager = require('../lib/manager')

describe('Manager', () => {
    it("should have the input values given", () => {
        const   name="Rich",
                id = 1,
                email = "test@test.com",
                officeNumber = "1234"
                
        let man = new Manager(name, id, email, officeNumber);

        let shouldBe = {
            name: name,
            id: id,
            email: email,
            officeNumber: officeNumber
        }

        expect(man).toEqual(shouldBe);
    })
    it("should return the given name", () => {
        const   name="Rich",
                id = 1,
                email = "test@test.com",
                officeNumber = "1234"
                
        let man = new Manager(name, id, email, officeNumber);

        let shouldBe = man.getName();

        expect(name).toBe(shouldBe);
    })
    it("should return the given ID", () => {
        const   name="Rich",
                id = 1,
                email = "test@test.com",
                officeNumber = "1234"
                
        let man = new Manager(name, id, email, officeNumber);

        let shouldBe = man.getId();

        expect(id).toBe(shouldBe);
    })
    it("should return the given Email", () => {
        const   name="Rich",
                id = 1,
                email = "test@test.com",
                officeNumber = "1234"
                
        let man = new Manager(name, id, email, officeNumber);

        let shouldBe = man.getEmail();

        expect(email).toBe(shouldBe);
    })
    it("should return the appropriate Role", () => {
        const   name="Rich",
                id = 1,
                email = "test@test.com",
                officeNumber = "1234"
                
        let man = new Manager(name, id, email, officeNumber);

        let shouldBe = man.getRole();

        expect("Manager").toBe(shouldBe);
    })
    it("should return the given Office Number", () => {
        const   name="Rich",
                id = 1,
                email = "test@test.com",
                officeNumber = "1234"
                
        let man = new Manager(name, id, email, officeNumber);

        let shouldBe = man.getOfficeNumber();

        expect(officeNumber).toEqual(shouldBe);
    })
});