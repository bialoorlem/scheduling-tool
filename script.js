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

