/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {

  let arr = x.toString().split("")
  let invertArr = [...arr].reverse()
  let result = true;
  
  for(let i = 0; i < Math.floor(arr.length/2); i++){
      if(arr[i] !== invertArr[i]) result = false
  }
  
  return result
};

module.exports = isPalindrome