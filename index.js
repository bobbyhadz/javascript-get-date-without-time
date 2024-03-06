console.log('bobbyhadz.com');

const date = new Date();

// ✅ Reset a Date's time to midnight
date.setHours(0, 0, 0, 0);

// ----------------------------------------------------

// ✅ Format a date to YYYY-MM-DD (or any other format)
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join('-');
}

// 👇️ 2023-07-24 (yyyy-mm-dd)
console.log(formatDate(new Date()));

//  👇️️ 2025-05-09 (yyyy-mm-dd)
console.log(formatDate(new Date(2025, 4, 9)));

// ----------------------------------------------------

// // // 2) Remove the Seconds and Milliseconds from a Date in JS

// const dateStr = '2022-07-21T09:35:31.820Z';

// const date = new Date(dateStr);

// date.setSeconds(0, 0);

// console.log(date); // 👉️ Thu Jul 21 2022 12:35:00 GMT+0300

// ----------------------------------------------------

// // // 3) Remove the Seconds and Milliseconds from a Date without mutation

// const dateStr = '2022-07-21T09:35:31.820Z';

// const date = new Date(dateStr);

// // ✅ Create copy of the Date
// const copyDate = new Date(date.getTime());

// copyDate.setSeconds(0, 0);

// console.log(copyDate); // 👉️ Thu Jul 21 2022 12:35:00 GMT+0300

// ----------------------------------------------------

// // // 4) Formatting a date without the time components

// // ✅ Format a date as MM/DD/YYYY (or any other format)
// function padTo2Digits(num) {
//   return num.toString().padStart(2, '0');
// }

// function formatDate(date) {
//   return [
//     padTo2Digits(date.getMonth() + 1),
//     date.getFullYear(),
//     padTo2Digits(date.getDate()),
//   ].join('/');
// }

// // 👇️ 01/2022/18 (MM/DD/YYYY)
// console.log(formatDate(new Date()));

// //  👇️️ 05/2025/09 (MM/DD/YYYY)
// console.log(formatDate(new Date(2025, 4, 9)));
