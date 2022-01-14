const Employee = require('../lib/employee')

describe('Employee', () => {
    it("should have the input values given", () => {
        const   name="Rich",
                id = 1,
                email = "test@test.com"
                
        let emp = new Employee(name, id, email);

        let shouldBe = {
            name: name,
            id: id,
            email: email
        }

        expect(emp).toEqual(shouldBe);
    })
    it("should return the given name", () => {
        const   name="Rich",
                id = 1,
                email = "test@test.com"
                
        let emp = new Employee(name, id, email);

        let shouldBe = emp.getName();

        expect(name).toBe(shouldBe);
    })
    it("should return the given ID", () => {
        const   name="Rich",
                id = 1,
                email = "test@test.com"
                
        let emp = new Employee(name, id, email);

        let shouldBe = emp.getId();

        expect(id).toBe(shouldBe);
    })
    it("should return the given Email", () => {
        const   name="Rich",
                id = 1,
                email = "test@test.com"
                
        let emp = new Employee(name, id, email);

        let shouldBe = emp.getEmail();

        expect(email).toBe(shouldBe);
    })
    it("should return the appropriate role", () => {
        const   name="Rich",
                id = 1,
                email = "test@test.com"
                
        let emp = new Employee(name, id, email);

        let shouldBe = emp.getRole();

        expect("Employee").toBe(shouldBe);
    })
});


