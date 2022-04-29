const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
//  function createDreamTeam(arr) {
//   if (Array.isArray(arr)){
//     let a = arr.filter(function(el){return typeof(el)==='string'})
// a.forEach((el, idx) => {
//   a[idx] = el.trim().slice(0, 1)
// });
//   a.forEach((el, idx)=> {
//     a[idx] = el.toUpperCase()
//   })
//   return a.sort().join('');
// }
// else {
//   let g = false;
//   return g;
// }}

createDreamTeam=a=>Array.isArray(a)?a.filter(e=>typeof(e)=='string').map(e=>e.trim().slice(0,1).toUpperCase()).sort().join(''):false
module.exports = {
  createDreamTeam
};
