const currentDate = new Date(); //current time
const nextYearDate = new Date(currentDate.getFullYear() + 1, 0, 1); // next Year Time

const timeRemaining = nextYearDate - currentDate; // time remain from to day to next year in milliseconds

const dayElm = document.getElementById("days");
const hourElm = document.getElementById("hours");
const minuteElm = document.getElementById("minutes");
const secondElm = document.getElementById("seconds");

function updateCountdown() {
  const currentDate = new Date();
  const timeRemaining = nextYearDate - currentDate;

  //calculate days, hours, minutes, seconds

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  //update the time in screen

  dayElm.textContent = days + " Days";
  hourElm.textContent = hours + " Hours";
  minuteElm.textContent = minutes + " Minutes";
  secondElm.textContent = seconds + " Seconds";
}

updateCountdown();
setInterval(updateCountdown, 1000);
