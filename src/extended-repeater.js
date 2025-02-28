const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof (options['repeatTimes'])== "undefined"){
    options.repeatTimes=1;
  } else {null}
  if (typeof (options['separator'])== "undefined"){
    options.separator='+';
  } else {null}
  if (typeof (options['addition'])== "undefined"){
    options.addition='';
  } else {null}
  if (typeof (options['additionRepeatTimes'])== "undefined"){
    options.additionRepeatTimes=1;
  } else {null}
  if (typeof (options['additionSeparator'])== "undefined"){
    options.additionSeparator='|';
  } else {null}
  return (str+(options.addition+options.additionSeparator).repeat(options.additionRepeatTimes-1)+options.addition+options.separator).repeat(options.repeatTimes-1)+str+(options.addition+options.additionSeparator).repeat(options.additionRepeatTimes-1)+options.addition 
}

module.exports = {
  repeater
};
