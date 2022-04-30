const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
 ex = ['--discard-next','--discard-prev','--double-next','--double-prev']
 if (!Array.isArray(arr)) throw Error ("'arr' parameter must be an instance of the Array!")
if (arr.length==0) return [];
newArr=[]
for (let i = 0; i<arr.length;i++){
  if (arr[i]==ex[2]){
    newArr.push(arr[i+1])
  }else {
    if (arr[i]==ex[3]&&i!==0){
      newArr.push(newArr[newArr.length-1])
    }else {
      if(arr[i]==ex[0]){
        arr[i+=1]==ex[1]||arr[i+=1]==ex[3]
      }else {
        if(arr[i]==ex[1]){
          newArr.pop()
        }else {
          newArr.push(arr[i])
        }
      }
    }
  }
}
 newArr[0]==ex[3]||newArr[0]==ex[1]?newArr.shift():0
typeof(newArr[newArr.length-1])=='undefined'?newArr.pop():0
return newArr;
}

module.exports = {
  transform
};
