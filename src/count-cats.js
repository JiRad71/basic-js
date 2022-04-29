const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
// function countCats(b) {
//  return b.flat().filter((word) => {
//     const counter = word == '^^';
//     return counter
//  }).length
// }

countCats=b=>b.flat().filter(i=>typeof(i)=='string'?i=='^^': 0).length
module.exports = {
  countCats
};
