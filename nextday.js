var currentDate = new Date();

var tomorrow = new Date(currentDate);
tomorrow.setDate(currentDate.getDate() + 1);

var dayAfterTomorrow = new Date(currentDate);
dayAfterTomorrow.setDate(currentDate.getDate() + 2);

var dayAfterTwo = new Date(currentDate);
dayAfterTwo.setDate(currentDate.getDate() + 3);

var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var today = daysOfWeek[currentDate.getDay()];
var tomorrowName = daysOfWeek[tomorrow.getDay()];
var dayAfterTomorrowName = daysOfWeek[dayAfterTomorrow.getDay()];
var dayAfterTwo = daysOfWeek[dayAfterTwo.getDay()];
day.textContent = today;
day1.textContent = today;
day2.textContent = tomorrowName;
day3.textContent = dayAfterTomorrowName;
day4.textContent = dayAfterTwo;