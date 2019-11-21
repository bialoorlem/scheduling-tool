//Make sure the current date displays here

function showCurrentDate() {
  let date = document.getElementById("currentDay");

  console.log(date);

  date.innerHTML = moment().format("LL");
}
showCurrentDate();

//Local Storage help from: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

// localStorage.setItem('myCat', 'Tom');

///JS help from Paul


  const saveEl = document.getElementById(“save”);
  saveEl.addEventListener(“click”, function(){
    saveInput();
  });
  saveInput(){
    localStorage.getItem(“userInput”, userInput);
  }


//Saving in local storage



function saveInput() {

 const save = document.getElementById("save");
//  save.addEventListener("click", saveInput);

 if(save){
  save.addEventListener("click", saveInput);


  let savedValue = localStorage.getItem("userInput");
  console.log("hey");
  }
  
}
  saveInput();