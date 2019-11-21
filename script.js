//Make sure the current date displays here

function showCurrentDate() {
  let date = document.getElementById("currentDay");

  console.log(date);

  date.innerHTML = moment().format("LL");
}
showCurrentDate();

function saveInput() {


  const clockEl = document.getElementById("clock");
  let savedValue = localStorage.getItem("time");
  
  
  let myInterval = null;

    if (myInterval) {
      clearInterval(myInterval);
      myInterval = null;
    }
    myInterval = setInterval(function() {
      time = time - 1;

      let hours = Math.floor(time / 60 / 60);
      let minutes = Math.floor(time / 60) % 60;
      let seconds = time % 60;

      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      clockEl.innerHTML = hours + ":" + minutes + ":" + seconds;

      if (time <= 0) {
        clearInterval(myInterval);
      }
    }, 1000);
  }
  startTimer();