
//Make sure the current date displays here
storageData = window.localStorage;
// let savedValue = storageData.getItem("userInput");

let userInput1 = document.getElementById("userInput1");
let userInput1Time = "09:00";

let userInput2 = document.getElementById("userInput2");
let userInput2Time = "10:00";

let userInput3 = document.getElementById("userInput3");
let userInput3Time = "11:00";

let userInput4 = document.getElementById("userInput4");
let userInput4Time = "12:00";

let userInput5 = document.getElementById("userInput5");
let userInput5Time = "13:00";

let userInput6 = document.getElementById("userInput6");
let userInput6Time = "14:00";

let userInput7 = document.getElementById("userInput7");
let userInput7Time = "15:00";

let userInput8 = document.getElementById("userInput8");
let userInput8Time = "16:00";

let userInput0 = document.getElementById("userInput0");
let userInput0Time = "17:00";


// let userInput0 = document.getElementById("userInput0");
// let userInput0Time = "18:00";

let currentTime = moment().format('HH');

console.log(moment().format('HH'))

console.log(storageData.getItem("userInput1") == 0);
if ((userInput1Time < currentTime ) && (!storageData.getItem("userInput1") == 0)){
  console.log("less than");
  let span = document.getElementById("userInput1");
  span.style.color = 'white';
  span.style.backgroundColor = 'red';
} else if ((userInput1Time < currentTime ) && (!storageData.getItem("userInput1") == 0)){
  let span = document.getElementById("userInput1");
  span.style.color = 'white';
  span.style.backgroundColor = 'green';
} 

if ((userInput2Time < currentTime ) && (!storageData.getItem("userInput2") == 0)){
  console.log("less than");
  let span = document.getElementById("userInput2");
  span.style.color = 'white';
  span.style.backgroundColor = 'red';
} else if ((userInput2Time < currentTime ) && (!storageData.getItem("userInput2") == 0)){
  let span = document.getElementById("userInput2");
  span.style.color = 'white';
  span.style.backgroundColor = 'green';
} 

if ((userInput3Time < currentTime ) && (!storageData.getItem("userInput3") == 0)){
  console.log("less than");
  let span = document.getElementById("userInput3");
  span.style.color = 'white';
  span.style.backgroundColor = 'red';
} else if ((userInput3Time < currentTime ) && (!storageData.getItem("userInput3") == 0)){
  let span = document.getElementById("userInput3");
  span.style.color = 'white';
  span.style.backgroundColor = 'green';
} 

if ((userInput4Time < currentTime ) && (!storageData.getItem("userInput4") == 0)){
  console.log("less than");
  let span = document.getElementById("userInput4");
  span.style.color = 'white';
  span.style.backgroundColor = 'red';
} else if ((userInput4Time < currentTime ) && (!storageData.getItem("userInput4") == 0)){
  let span = document.getElementById("userInput4");
  span.style.color = 'white';
  span.style.backgroundColor = 'green';
} 

if ((userInput5Time < currentTime ) && (!storageData.getItem("userInput5") == 0)){
  console.log("less than");
  let span = document.getElementById("userInput5");
  span.style.color = 'white';
  span.style.backgroundColor = 'red';
} else if ((userInput5Time < currentTime ) && (!storageData.getItem("userInput5") == 0)){
  let span = document.getElementById("userInput5");
  span.style.color = 'white';
  span.style.backgroundColor = 'green';
} 

if ((userInput6Time < currentTime ) && (!storageData.getItem("userInput6") == 0)){
  console.log("less than");
  let span = document.getElementById("userInput6");
  span.style.color = 'white';
  span.style.backgroundColor = 'red';
} else if ((userInput6Time < currentTime ) && (!storageData.getItem("userInput6") == 0)){
  let span = document.getElementById("userInput6");
  span.style.color = 'white';
  span.style.backgroundColor = 'green';
} 

if ((userInput7Time < currentTime ) && (!storageData.getItem("userInput7") == 0)){
  console.log("less than");
  let span = document.getElementById("userInput7");
  span.style.color = 'white';
  span.style.backgroundColor = 'red';
} else if ((userInput7Time < currentTime ) && (!storageData.getItem("userInput7") == 0)){
  let span = document.getElementById("userInput7");
  span.style.color = 'white';
  span.style.backgroundColor = 'green';
} 

if ((userInput8Time < currentTime ) && (!storageData.getItem("userInput8") == 0)){
  console.log("less than");
  let span = document.getElementById("userInput8");
  span.style.color = 'white';
  span.style.backgroundColor = 'red';
} else if ((userInput8Time < currentTime ) && (!storageData.getItem("userInput8") == 0)){
  let span = document.getElementById("userInput8");
  span.style.color = 'white';
  span.style.backgroundColor = 'green';
} 

if ((userInput0Time < currentTime ) && (!storageData.getItem("userInput0") == 0)){
  console.log("less than");
  let span = document.getElementById("userInput0");
  span.style.color = 'white';
  span.style.backgroundColor = 'red';
} else if ((userInput0Time < currentTime ) && (!storageData.getItem("userInput0") == 0)){
  let span = document.getElementById("userInput0");
  span.style.color = 'white';
  span.style.backgroundColor = 'green';
} 

if ((userInput0Time < currentTime ) && (!storageData.getItem("userInput0") == 0)){
  console.log("less than");
  let span = document.getElementById("userInput0");
  span.style.color = 'white';
  span.style.backgroundColor = 'red';
} else if ((userInput0Time < currentTime ) && (!storageData.getItem("userInput0") == 0)){
  let span = document.getElementById("userInput0");
  span.style.color = 'white';
  span.style.backgroundColor = 'green';
} 


// if (userInput0Time < currentTime){
//   console.log("less than");
//   let span = document.getElementById("userInput0");
//   span.style.color = 'white';
//   span.style.backgroundColor = 'red';
// } else if (userInput0Time > currentTime){
//   let span = document.getElementById("userInput0");
//   span.style.color = 'white';
//   span.style.backgroundColor = 'green';
// } 



console.log(userInput1);
let inputs = [
  userInput0, userInput1,userInput2,userInput3,userInput4,userInput5,userInput6,userInput7,userInput8];

pullInput();

function showCurrentDate() {
  let date = document.getElementById("currentDay");

  console.log(date);

  date.innerHTML = moment().format("LL");
}
showCurrentDate();


//Saving in local storage, received help from Jackson, Bryan, and William


 
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
 