'use strivt';

const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const initialClock = function () {
  // Get new date
  const date = new Date();

  // Get hours / minutes / seconds
  const hours = date.getHours() - 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Set initial position for lines
  hourEl.style.transform = `rotateZ(${hours * 30 + 180}deg) translateX(50%)`;
  minuteEl.style.transform = `rotateZ(${minutes * 6 + 180}deg) translateX(50%)`;
  secondEl.style.transform = `rotateZ(${seconds * 6 + 180}deg) translateX(50%)`;

  // Add timer for clock
  setTimeout(() => {
    initialClock();
  }, 1000);
};

initialClock();
