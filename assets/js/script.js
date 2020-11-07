// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// use the [Moment.js library](https://momentjs.com/) to work with date and time
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

// Current hour variable using moment.js
var currentHour = today.hour();
currentHour = 12;
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
for (var i = 9; i <= 17; i++) {

    if (currentHour === i) {
        $( ("#text" + i).toString() ).addClass("present");

    } else if (currentHour < i) {
        $( ("#text" + i).toString() ).addClass("future");

    } else if (currentHour > i) {
        $( ("#text" + i).toString() ).addClass("past");

    }

// Check to see if the above codes are logging properly
console.log("Present: " + (currentHour === i));
console.log("Future: " + (currentHour < i));
console.log("Past: " + (currentHour > i));
}

// WHEN I click into a timeblock
// THEN I can enter an event
var txtBlock9  = $("#text9")
var txtBlock10 = $("#text10")
var txtBlock11 = $("#text11")
var txtBlock12 = $("#text12")
var txtBlock13 = $("#text13")
var txtBlock14 = $("#text14")
var txtBlock15 = $("#text15")
var txtBlock16 = $("#text16")
var txtBlock17 = $("#text17")

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
var saveButton9  = $("#btn9")
var saveButton10 = $("#btn10")
var saveButton11 = $("#btn11")
var saveButton12 = $("#btn12")
var saveButton13 = $("#btn13")
var saveButton14 = $("#btn14")
var saveButton15 = $("#btn15")
var saveButton16 = $("#btn16")
var saveButton17 = $("#btn17")


saveButton9.on("click", function() {
    localStorage.setItem("btn9", txtBlock9.val());

});

saveButton10.on("click", function() {
    localStorage.setItem("btn10", txtBlock10.val());

});

saveButton11.on("click", function() {
    localStorage.setItem("btn11", txtBlock11.val());

});

saveButton12.on("click", function() {
    localStorage.setItem("btn12", txtBlock12.val());

});

saveButton13.on("click", function() {
    localStorage.setItem("btn13", txtBlock13.val());

});

saveButton14.on("click", function() {
    localStorage.setItem("btn14", txtBlock14.val());

});

saveButton15.on("click", function() {
    localStorage.setItem("btn15", txtBlock15.val());

});

saveButton16.on("click", function() {
    localStorage.setItem("btn16", txtBlock16.val());

});

saveButton17.on("click", function() {
    localStorage.setItem("btn17", txtBlock17.val());

});

// WHEN I refresh the page
// THEN the saved events persists
$(document).ready(function() {
    txtBlock9.val(localStorage.getItem("btn9"));

});
$(document).ready(function() {
    txtBlock10.val(localStorage.getItem("btn10"));

});
$(document).ready(function() {
    txtBlock11.val(localStorage.getItem("btn11"));

});
$(document).ready(function() {
    txtBlock12.val(localStorage.getItem("btn12"));

});
$(document).ready(function() {
    txtBlock13.val(localStorage.getItem("btn13"));

});
$(document).ready(function() {
    txtBlock14.val(localStorage.getItem("btn14"));

});
$(document).ready(function() {
    txtBlock15.val(localStorage.getItem("btn15"));

});
$(document).ready(function() {
    txtBlock16.val(localStorage.getItem("btn16"));

});
$(document).ready(function() {
    txtBlock17.val(localStorage.getItem("btn17"));

});
