

// identify the elements in the DOM with variables in our JS
const startEl = document.getElementById("btn-start");
const pauseEl = document.getElementById("btn-pause");
const stopEl = document.getElementById("btn-stop-count");
const resetBtn = document.querySelector("#resetBtn"); 
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

function handlePauseClick() {
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
function resetCounter(){ 
    clearInterval(interval); 
    i = 0; 
    counter.innerHTML = i; 
}



startEl.addEventListener('click', handleStartClick);
pauseEl.addEventListener('click', handlePauseClick);
stopEl.addEventListener('click', handleStopClick);
resetBtn.addEventListener("click", resetCounter); 