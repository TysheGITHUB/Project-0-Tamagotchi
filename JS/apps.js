let hungryCount = 0;
let Socialize = 0;
let Sleep = 0;
let Bathroom = 0;

const hungryEl = document.getElementById("count-hungry");
const socializeEl = document.getElementById("count-socialize");
const sleepEl = document.getElementById("count-sleep");
const bathroomEl = document.getElementById("count-bathroom")
const ageEl = document.getElementById("count-age")

const hungryBtn = document.querySelector("hungryBtn")
const socializeBtn = document.querySelector("socialzeBtn")
const sleepBtn = document.querySelector("sleepBtn")
const bathroomBtn = document.querySelector("bathroomBtn")
const ageBtn = document.querySelector("ageBtn")

function hungryClick() {
  // console.log("hungry button clicked!"); 
  // count to ten .. (less than or equal to 10)

  if (count => 0) {
    hungryCount--
    hungryEl.innerText= ("Hungry:" + count);
}  hungryBtn.onclick = function(){    
}

} function soicalizeClick() {  
     if (count => 1){
    count-- // decrease the counter by 1 everytime the user clicks on the button
// socializeEl.innerText = "Socialize " + count;
     } socializeBtn.onclick = function() {
     counter.innerHTML;
  }; // console.log("soicalize button clicked!"); // count to ten .. greater than or equal to 10
   
  clearInterval(myCounter);
 };
 function sleepClick() {
    if(count > 1) {
        count--
        // sleepEl.innerText = "Sleep " + count;
    } sleepBtn.onclick = function(){
 }
}
  // console.log("sleep, button clicked!"); // count to ten .. greater than or equal to 10
  
function bathroomClick() {
    // console.log("stop button clicked!");
    clearInterval(myCounter);
    count = 0;
    // console.log(count);
    // countEl.innerText = "bathroom " + count ;
    bathroomBtn.onclick = function(){
}
} function resetCounter(){ 
    clearInterval(interval); 
    i = 0; 
    counter.innerText = i; 

} function stopClicks(){
    if(count >= 10) {
        clearInterval(myClicks)
    }
}
function ageClick(){
    if(count =0) {
ageEl.innerText = "Age";      
    }
}

const startEl = document.getElementById("btn-start");
const stopEl = document.getElementById("btn-stop-count");
const resetBtn = document.querySelector("#resetBtn"); 
const countEl = document.getElementById("count");

let count = 1;
let hungryCounter = -1;
let socializeCounter = 1;
let sleepCounter = "";
let bathroomCounter = 1;
let age = null
let myCounter = null
let specificNumber = 0;
let myCount;
let increasing = true;

let reset = ""
let stop = 0;

// console.log(typeof(myCounter));
// handle start click 
function handleStartClick() {
    // console.log("start button clicked!");
    myCounter = setInterval(function(){
      count;
      countEl.innerText = "Count: " + count;
    }, 1000);

  };
// a counter for each (hungry,socialize,sleep,bathroom,age)
myHungryCounter = setInterval(function(){
    handleStopClick()
  count++;
  hungryEl.innerText = "hungry: " + count;
  
}, 1000);

mySocialzeCounter = setInterval(function(){
    handleStopClick()
    count++;
socializeEl.innerText = "socialize: " + count;
}, 1000);

mySleepCounter = setInterval(function(){
    handleStopClick()
  count++;
  sleepEl.innerText = "sleep: " + count;
}, 1000);

myBathroomCounter = setInterval(function(){
    handleStopClick()
  count;
  bathroomEl.innerText = "bathroom: " + count;
}, 1000);

myAgeCounter = setInterval(function(){
    handleStopClick()
  count;

  ageEl.innerText = "age:" + count;
}, 1000);


  myCount = setInterval(function(){
        count--;
        counter.innerHTML = count;
        if(count==specificNumber ){
            count=0;
        }
        (clearInterval)
    },3000)

function handleStopClick() {
    if (count >= 9){
        clearInterval(myCounter)
}
}

// Event Listeners 
startEl.addEventListener('click', handleStartClick);
// stopEl.addEventListener('click', handleStopClick);
