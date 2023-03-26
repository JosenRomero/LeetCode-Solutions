/*
Given an integer numRows, return the first numRows of Pascal's triangle.
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
    
  if(numRows === 1) return [[1]]
  if(numRows === 2) return [[1], [1, 1]]
  
  let result = [[1], [1, 1]]
  
  for(let i = 3; i <= numRows; i++) {
      
      let lastArr = result[result.length - 1]
      
      let newArr = []
      
      for(let j = 0; j <= lastArr.length; j++) {
          if(j === 0 || j === lastArr.length) newArr.push(1)
          else newArr.push(lastArr[j] + lastArr[j-1])
      }
      
      result.push(newArr)
      
  }
  
  return result
  
};

module.exports = generate