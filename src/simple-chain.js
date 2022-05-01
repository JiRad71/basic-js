const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr : [],
  getLength() {
    return this.arr.length;
  },
  addLink(value ) {
    this.arr.push(value);
    return this;
  },
  removeLink( position ) {
    if (typeof position !== 'number'|| !Number.isInteger(position) || position < 1|| position > this.arr.length){
      this.arr=[];
      throw Error ("You can't remove incorrect link!");
    }
    let newArr = this.arr.slice(0, position - 1)
    newArr.push(...this.arr.slice(position))
    this.arr= [...newArr];
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let chain = this.arr.map ((i,j)=> {
      let finishChain = `( ${i} )` + ((j === this.arr.length-1)? '' : '~~' );
      return finishChain;
    }).join('');
    this.arr=[];
    return `${chain}`;
  }
};

module.exports = {
  chainMaker
};
