// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// use the [Moment.js library](https://momentjs.com/) to work with date and time
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

// Current hour variable using moment.js
var currentHour = today.hour();

currentHour = 8;
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
console.log(("#text" + i).toString());
}

// WHEN I click into a timeblock
// THEN I can enter an event
// var txtblk = $("#text" + i).toString()

// console.log(txtblk);
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
var savBtn9  = $("saveBtn")
var savBtn10 = $("#btn10")
var savBtn11 = $("#btn11")
var savBtn12 = $("#btn12")
var savBtn13 = $("#btn13")
var savBtn14 = $("#btn14")
var savBtn15 = $("#btn15")
var savBtn16 = $("#btn16")
var savBtn17 = $("#btn17")

savBtn9.on("click", function() {
    localStorage.setItem("btn9", txtBlock9.val());

});

savBtn10.on("click", function() {
    localStorage.setItem("btn10", txtBlock10.val());

});

savBtn11.on("click", function() {
    localStorage.setItem("btn11", txtBlock11.val());

});

savBtn12.on("click", function() {
    localStorage.setItem("btn12", txtBlock12.val());

});

savBtn13.on("click", function() {
    localStorage.setItem("btn13", txtBlock13.val());

});

savBtn14.on("click", function() {
    localStorage.setItem("btn14", txtBlock14.val());

});

savBtn15.on("click", function() {
    localStorage.setItem("btn15", txtBlock15.val());

});

savBtn16.on("click", function() {
    localStorage.setItem("btn16", txtBlock16.val());

});

savBtn17.on("click", function() {
    localStorage.setItem("btn17", txtBlock17.val());

});

// WHEN I refresh the page
// THEN the saved events persists
$(document).ready(function() {
    txtBlock9.val(localStorage.getItem("9"));

});
$(document).ready(function() {
    txtBlock10.val(localStorage.getItem("10"));

});
$(document).ready(function() {
    txtBlock11.val(localStorage.getItem("11"));

});
$(document).ready(function() {
    txtBlock12.val(localStorage.getItem("12"));

});
$(document).ready(function() {
    txtBlock13.val(localStorage.getItem("13"));

});
$(document).ready(function() {
    txtBlock14.val(localStorage.getItem("14"));

});
$(document).ready(function() {
    txtBlock15.val(localStorage.getItem("15"));

});
$(document).ready(function() {
    txtBlock16.val(localStorage.getItem("16"));

});
$(document).ready(function() {
    txtBlock17.val(localStorage.getItem("17"));

});
