function showCurrentDate() {
  let date = document.getElementById("currentDay");

  console.log(date);

  date.innerHTML = moment().format("LL");
}
showCurrentDate();