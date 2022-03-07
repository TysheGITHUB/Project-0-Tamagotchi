let Hungry = 10;
let Socialize = 10;
let Sleep = 10;
let Bathroom = 10;



const hungryEl = document.getElementById("count-hungry");
const socializeEl = document.getElementById("count-socialize");
const sleepEl = document.getElementById("count-sleep");
const bathroomEl = document.getElementById("count-bathroom")

function hungryClick() {
  // console.log("hungry button clicked!"); // count to ten ..less than or equal to 10
if (count > 1) {
    count--
    hungryEl.innerText= ("Hungry:" + count);
}  
}
function soicalizeClick() {
    if (count > 1){
        count--
    socializeEl.innerText = "Socialize " + count;
    }
    // decrease the counter by 1 everytime the user clicks on the button
 btn.onclick = function()
 {
    counter.innerHTML;
 };
  // console.log("soicalize button clicked!"); // count to ten .. greater than or equal to 10
  clearInterval(myCounter);
};
function sleepClick() {
    if(count > 1) {
        count--
        sleepEl.innerText = "Sleep " + count;
    }
}
  // console.log("sleep, button clicked!"); // count to ten .. greater than or equal to 10
  
function bathroomClick() {
    // console.log("stop button clicked!");
    clearInterval(myCounter);
    count = 0;
    // console.log(count);
    countEl.innerText = "bathroom " + count ;
}
function resetCounter(){ 
    clearInterval(interval); 
    i = 0; 
    counter.innerText = i; 
}

function stopClicks(){
    if(count >= 10) {
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


