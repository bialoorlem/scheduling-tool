//Make sure the current date displays here


function showCurrentDate() {
  let date = document.getElementById("currentDay");

  console.log(date);

  date.innerHTML = moment().format("LL");
}
showCurrentDate();


//Saving in local storage, received help from Jackson and Bryan



  document.querySelectorAll(".btn").forEach(function(button){
    button.addEventListener("click", function(){
    saveInput();  

    })

  })
  

  function saveInput() {
    localStorage.setItem("userInput", userInput);
  }

let savedValue = localStorage.getItem("userInput");

let userInput1 = document.getElementById("userInput1");

let userInput2 = document.getElementById("userInput2");

let userInput3 = document.getElementById("userInput3");

let userInput4 = document.getElementById("userInput4");

let userInput5 = document.getElementById("userInput5");

let userInput6 = document.getElementById("userInput6");

let userInput7 = document.getElementById("userInput7");

let userInput8 = document.getElementById("userInput8");

let userInput9 = document.getElementById("userInput9");

let userInput0 = document.getElementById("userInput0");



function pullInput(){

userInput.innerHTML = savedValue

}