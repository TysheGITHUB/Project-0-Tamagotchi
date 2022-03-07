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
  myTimer = setInterval(function(){
    count ++ ;
    countEl.innerText = "Count: " + count ;
 1000;
})
}  
function soicalizeClick() {
    if (count >=10){
        count--
    socializeEl.innerText = count;
    }
  // console.log("pause button clicked!");
  clearInterval(myCounter);
};
function sleepClick() {
    if(count >=10) {
        count--
        socializeEl.innerText = count;
    }
  // console.log("stop button clicked!");
  clearInterval(myCounter);
  count = 0;
  // console.log(count);
  countEl.innerText = `Count: ${stopp}`;
};
function bathroomClick() {
    // console.log("stop button clicked!");
    clearInterval(myCounter);
    count = 0;
    // console.log(count);
    countEl.innerText = `Count: " ${stopp}`;
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

const stopTimer = () => {
    // clearInterval(setSeconds(0))
    // document.querySelector('#counter').remove()
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


// const stopTimer = () => {
//     clearInterval(setSeconds(0))
//     document.querySelector('#counter').remove()
// }
// restBtn.addEventListener("click", resetCounter); 

  
function handleStartClick() {
  // console.log("start button clicked!");
  myCounter = setInterval(function(){
    count++;
    countEl.innerText = "Count: " + count;
    petBathroom()
  }, 1000);
};

// function handlePauseClick() {
//   // console.log("pause button clicked!");
//   clearInterval(myCounter);
// };

function handleStopClick() {
  // console.log("stop button clicked!");
  clearInterval(myCounter);
  count = 0;
  // console.log(count);
  countEl.innerText = "Count: " + count;

}

startEl.addEventListener('click', handleStartClick);
// pauseEl.addEventListener('click', handlePauseClick);
// stopEl.addEventListener('click', stopClick);
stopEl.addEventListener('click', handleStopClick); 
// 