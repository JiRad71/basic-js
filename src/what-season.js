const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (typeof date == 'undefined') return 'Unable to determine the time of year!'
  if (Object.keys(date).length>0) throw Error('Invalid date!')
  if (!(date instanceof Date)) throw Error('Invalid date!')
  mounth = date.getMonth()
  if (mounth <= 1 || mounth ==11){
    return 'winter'
  } else if (mounth <= 4 && mounth>=2){
    return 'spring'
  } else if (mounth <= 7 && mounth >= 5){
    return 'summer'
  } else {return 'autumn'}
}

module.exports = {
  getSeason
};

