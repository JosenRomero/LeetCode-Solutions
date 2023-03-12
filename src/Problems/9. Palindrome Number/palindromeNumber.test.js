const palindromeNumber = require("./palindromeNumber");

describe("palindromeNumber", () => {

  test("should return true if they receive x = 1", () => {
    const result = palindromeNumber(1);
    expect(result).toBe(true);
  });

  test("should return true if they receive x = 123321", () => {
    const result = palindromeNumber(123321);
    expect(result).toBe(true);
  });

  test("should return true if they receive x = 121", () => {
    const result = palindromeNumber(121);
    expect(result).toBe(true);
  });

  test("should return false if they receive x = 10", () => {
    const result = palindromeNumber(10);
    expect(result).toBe(false);
  });

});