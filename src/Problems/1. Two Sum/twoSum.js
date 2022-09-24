/*
Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
const twoSum = function(nums, target) {

    const checkTarget = (numA, numB, myTarget) => 
        (numA + numB) === myTarget

    const myFindIndex = (arr, currentValue, currentIndex, myTarget) => 
        arr.findIndex((value, index) => 
            index !== currentIndex && 
            checkTarget(value, currentValue, myTarget))
    
    const myReduce = (arr, myTarget) => 
        arr.reduce((total, currentValue, currentIndex) => {
            let num = myFindIndex(arr, currentValue, currentIndex, myTarget)
            if(num >= 0) total.push(num)
            return total
        }, [])
    
    let result = myReduce(nums, target)
  
    return result

};

module.exports = twoSum