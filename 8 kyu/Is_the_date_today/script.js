/*Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

Make sure that your function does not return a false positive by just checking just the day.*/

function isToday(date) {
  const d = new Date();
  return d.toDateString()== date.toDateString()? true : false
}
