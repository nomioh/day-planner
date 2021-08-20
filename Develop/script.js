// console.log(document);

// variable for storing schedule times
let hours = [
  {
    id: "0",
    hoursText: "9 am",
    time: "9",
    task: "",
  },
  {
    id: "1",
    hoursText: "10 am",
    time: "10",
    task: "",
  },
  {
    id: "2",
    hoursText: "11 am",
    time: "11",
    task: "",
  },
  {
    id: "3",
    hoursText: "12 pm",
    time: "12",
    task: "",
  },
  {
    id: "4",
    hoursText: "1 pm",
    time: "13",
    task: "",
  },
  {
    id: "5",
    hoursText: "2 pm",
    time: "14",
    task: "",
  },
  {
    id: "6",
    hoursText: "3 pm",
    time: "15",
    task: "",
  },
  {
    id: "7",
    hoursText: "4 pm",
    time: "16",
    task: "",
  },
  {
    id: "8",
    hoursText: "5 pm",
    time: "17",
    task: "",
  },
];

// init();
// loadDayPlanner();

function getCurrentDate() {
  let date = moment().format("MMMM Do YYYY");

  $("#currentDate").text(date);

  console.log(date);
}

// var currentHour = moment().hours();
// var meetingInfo = $("#meeting-info");
