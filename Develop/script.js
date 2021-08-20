// time variables //

var currentDay = moment().format("MMMM Do, YYYY");
$("#currentDay").text(today);

console.log(today);

var hours = [
  {
    id: "0",
    hoursText: "9 am",
    time: "9",
    task: "",
  },
];
var currentHour = moment().hours();
var meetingInfo = $("#meeting-info");
