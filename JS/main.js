let Hungry = 10;
let Socialize = 10;
let Sleep = 10;
let Bathroom = 10;

const hungryEl = document.getElementById("count-hungry");
const socializeEl = document.getElementById("count-socialize");
const sleepEl = document.getElementById("count-sleep");
const bathroomEl = document.getElementById("count-bathroom");

function hungryClick() {
  // console.log("hungry button clicked!");
if (count <=10) {
    count--
    hungryEl.innerText = "Count: " + count;
}  
}
function soicalizeClick() {
    if (count >=10){
        count--
    socializeEl.innerText = "Count: " + count;
    }
  // console.log("soicalize button clicked!");
  clearInterval(myCounter);
};
function sleepClick() {
    if(count >=10) {
        count--
        sleepEl.innerText = "Count: " + count;
    }
}
  // console.log("sleep, button clicked!");
  
function bathroomClick() {
    // console.log("stop button clicked!");
    clearInterval(myCounter);
    count = 0;
    // console.log(count);
    countEl.innerText = `bathroom: " ${stopp}`;
}
function resetCounter(){ 
    clearInterval(interval); 
    i = 0; 
    counter.innerHTML = i; 
}

function stopClicks(){
    if(num >= 10) {
        clearInterval(myClicks)
    }
}

const startEl = document.getElementById("btn-start");
// const pauseEl = document.getElementById("btn-pause");
const stopEl = document.getElementById("btn-stop-count");
const resetBtn = document.querySelector("#resetBtn"); 
const countEl = document.getElementById("count");

let count = 0;
let myCounter = null;
let reset = ""
let stop = 0;
// console.log(typeof(myCounter));
  
function handleStartClick() {
  // console.log("start button clicked!");
  myCounter = setInterval(function(){
      handleStopClick()
    count++;
    socializeEl.innerText = "socialize: " + count;
    sleepEl.innerText = "sleep: " + count;
    bathroomEl.innerText = "bathroom: " + count;
    hungryEl.innerText = "hungry: " + count;
  }, 1000);
};

function handleStopClick() {
    if (count >= 9){
        clearInterval(myCounter)
  // console.log(counter);
}
}

startEl.addEventListener('click', handleStartClick);
// stopEl.addEventListener('click', handleStopClick);