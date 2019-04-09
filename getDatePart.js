
let normalizeInteger = require('./normalizeInteger');

//default zone = utc (0)
function getDateParts (zone) {
  if (zone === null || zone === undefined) { zone = 0; }

  zone = normalizeInteger(zone);
  if (!zone) { throw new Error('invalid zone value'); }

  let day = (new Date());

  day.setUTCHours(day.getUTCHours() + zone);//set hour to gmt +7

  return {
    year: day.getUTCFullYear(),
    month: day.getUTCMonth(),
    date: day.getUTCDate(),
    day: day.getUTCDay(),
    hour: day.getUTCHours(),
    minute: day.getUTCMinutes(),
  };
}

module.exports = getDateParts;
