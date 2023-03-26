const generate = require("./problem_118");

describe("Pascal's triangle", () => {

  test("array types correctly", () => {
    const result = generate(1);
    expect(result).toBeInstanceOf(Array);
  })

  test("Should return an Array with length 1 if they receive numRows = 1", () => {
    const result = generate(1);
    expect(result.length).toBe(1);
  })

  test("Should return an Array with length 5 if they receive numRows = 5", () => {
    const result = generate(5);
    expect(result.length).toBe(5);
  })

});