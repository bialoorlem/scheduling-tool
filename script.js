//Make sure the current date displays here
storageData = window.localStorage;
// let savedValue = storageData.getItem("userInput");

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

let inputs = [
  userInput0, userInput1,userInput2,userInput3,userInput4,userInput5,userInput6,userInput7,userInput8,userInput9
];

pullInput();

function showCurrentDate() {
  let date = document.getElementById("currentDay");

  console.log(date);

  date.innerHTML = moment().format("LL");
}
showCurrentDate();


//Saving in local storage, received help from Jackson and Bryan


 
  document.querySelectorAll(".btn").forEach(function(save){
    save.addEventListener("click", function(){
      let inputVal = save.getAttribute("value");

      console.log(inputVal);
    saveInput(inputVal);  

    })

  })
  

  function saveInput(x) {

 
    let userInput = document.getElementById("userInput" + x).value;
    console.log(x);
    let inputName = "userInput" + x;
    storageData.setItem(inputName, userInput);
  }


function pullInput(){

  for(i = 0 ; i < 9 ; i ++){
    let placeHolder = "userInput" + i;
    console.log(placeHolder);
    if(storageData.getItem(placeHolder) === null)
    {
      continue;
    }
    else{
    inputs[i].innerHTML = storageData.getItem(placeHolder);
    }
  }

}

      // function initInput() {
      //   const buttonEl = document.querySelector("#button");
      //   buttonEl.addEventListener("click", function() {
      //     const input = document.getElementById("input").value;
      //     const dataStr = localStorage.getItem("input") || "[]";
      //     // if(!dataStr){
      //     //   dataStr = '[]'
      //     // }
      //     const data = JSON.parse(dataStr);
      //     data.push(input);
      //     localStorage.setItem("input", JSON.stringify(data));
      //   });
      // }
      // initInput();

      // function initOutput() {
      //   const outputEl = document.getElementById("output");
      //   setInterval(function() {
      //     outputEl.innerHTML = "";
      //     const dataStr = localStorage.getItem("input") || "[]";
      //     const data = JSON.parse(dataStr);
      //     data.forEach(function(output) {
      //       const h1El = document.createElement("h1");
      //       h1El.innerHTML = output;
      //       outputEl.append(h1El);
      //     });
      //   }, 100);
      // }
      // initOutput();