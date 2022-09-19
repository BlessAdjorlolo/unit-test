const{divide, multiply, subtract, sum} = require("./math");

describe("Math", () =>{
    it("should sum 2 + 2 to be 4", () => {
        const result = sum(2, 2);
        expect(result).toBe(4)
    });
    
    it("should multiply3 * 3 to result to 9", () => {
        const result = multiply(3, 3);
        expect(result).toBe(9);
    });
    it("should divide 30 / 3 to result to 10", () => {
        const result = divide(30, 3);
        expect(result).toBe(10);
    });
    it("should subtract 15 - 10 to result to 5", () => {
        const result = subtract(15, 10);
        expect(result).toBe(5);
    });

});

test ("Array", () => {
    let days = ["Monday", "Tuesday", "Wednesday"];
    expect(days).toContain("Tuesday")
    expect(days).not.toContain("Friday");
});


