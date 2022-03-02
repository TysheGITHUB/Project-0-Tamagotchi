

// identify the elements in the DOM with variables in our JS
const startEl = document.getElementById("btn-start");
const jumpEl = document.getElementById("btn-jump");
const stopEl = document.getElementById("btn-stop");
const countEl = document.getElementById("count");

let count = 0;
let myCounter = null;
// console.log(typeof(myCounter));
  
function handleStartClick() {
  // console.log("start button clicked!");
  myCounter = setInterval(function(){
    count++;
    countEl.innerText = "Count: " + count;
  }, 1000);
};

function handleJumpClick() {
  // console.log("pause button clicked!");
  clearInterval(myCounter);
};

function handleStopClick() {
  // console.log("stop button clicked!");
  clearInterval(myCounter);
  count = 0;
  // console.log(count);
  countEl.innerText = "Count: " + count;
};

startEl.addEventListener('click', handleStartClick);
pauseEl.addEventListener('click', handleJumpClick);
stopEl.addEventListener('click', handleStopClick);