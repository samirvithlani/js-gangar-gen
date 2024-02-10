//Date--->

const date = new Date(); // 2020-12-10T12:00:00Z
//const date = new Date('2020-12-10'); // 2020-12-10T00:00:00Z
//const date = moment('2020-12-10').format('YYYY-MM-DD'); // 2020-12-10
//const date = new Date(2024,01,14,00,01,01)
//console.log(date);
//get
console.log("fullyear",date.getFullYear()); // 2020
console.log("month",date.getMonth()); // 11
console.log("date",date.getDate()); // 14
console.log("day",date.getDay()); // 4
console.log("hours",date.getHours()); // 0
console.log("minutes",date.getMinutes()); // 1
console.log("seconds",date.getSeconds()); // 1
console.log("milliseconds",date.getMilliseconds()); // 0
console.log("time",date.getTime()); // 1607922061000
console.log("timezone",date.getTimezoneOffset()); // -330
console.log("UTC",date.getUTCDate()); // 13
//utc time
//console.log("utcfullyear",date.getUTCFullYear()); // 2020
console.log(date.getUTCHours()); // 18



const date1 = new Date(0);
console.log(date1); // 1970-01-01T00:00:00.000Z

//greogorian calendar