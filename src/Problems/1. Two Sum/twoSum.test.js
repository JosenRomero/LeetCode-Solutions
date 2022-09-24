const twoSum = require("./twoSum");

describe("twoSum", () => {

    test("should return [2, 1] if they receive nums = [3,2,4] and target = 6", () => {
        const result = twoSum([3,2,4], 6);
        expect(result).toStrictEqual([2, 1]);
    });

    test("should return [1, 0] if they receive nums = [3,3] target = 6", () => {
        const result = twoSum([3, 3], 6);
        expect(result).toStrictEqual([1, 0]);
    })

});