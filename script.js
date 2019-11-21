//Make sure the current date displays here

function showCurrentDate() {
  let date = document.getElementById("currentDay");

  console.log(date);

  date.innerHTML = moment().format("LL");
}
showCurrentDate();

//Saving in local storage

function saveInput() {


  let inputEl = document.getElementById("save");
  let savedValue = localStorage.getItem("userInput");
  
}
  saveInput();