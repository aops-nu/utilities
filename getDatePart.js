const normalizeInteger = require('./normalizeInteger');

// default zone = utc (0)
function getDateParts ({ zone }) {
  let timeZone = zone;

  if (typeof timeZone === 'undefined' || timeZone === null) { timeZone = 0; }

  timeZone = normalizeInteger(timeZone);

  if (!timeZone) { throw new Error('invalid zone value'); }

  const day = new Date();

  day.setUTCHours(day.getUTCHours() + timeZone);// set hour to gmt +zone

  return {
    year: day.getUTCFullYear(),
    month: day.getUTCMonth(),
    date: day.getUTCDate(),
    day: day.getUTCDay(),
    hour: day.getUTCHours(),
    minute: day.getUTCMinutes()
  };
}

module.exports = getDateParts;
