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

        expect(emp).toMatchObject(shouldBe);
    })
});


