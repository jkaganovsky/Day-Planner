// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// use the [Moment.js library](https://momentjs.com/) to work with date and time
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

