//Make sure the current date displays here

function showCurrentDate() {
  let date = document.getElementById("currentDay");

  console.log(date);

  date.innerHTML = moment().format("LL");
}
showCurrentDate();

//Local Storage help from: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

localStorage.setItem('myCat', 'Tom');


//Saving in local storage



function saveInput() {

 const save = document.getElementById("save");
 save.addEventListener("click", saveInput);

  let savedValue = localStorage.getItem("userInput");
  console.log(worked)
  
}
  saveInput();