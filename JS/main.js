// identify the elements in the DOM with variables in our JS
// const hungryBtn = document.querySelector("btn-Hungry");
// const soicalizeBtn = document.querySelector("btn-Soicalize");
// const sleepBtn = document.querySelector("btn-sleep");
// const bathroomBtn = document.querySelector("btn-bathroom")
// const restBtn = document.querySelector("btn-rest"); 
// const countEl = document.getElementById("count");

class Pet {
    constructor ( hungry, socialize, sleep, bathroom ) {
        this.hungry = hungry;
        this.socialize = socialize;
        this.sleep= sleep;
        this.bathroom = bathroom;
    }
};
let Hungry = 10;
let Socialize = 6;
let Sleep = 1;
let Bathroom = 5;

petHungry = function () {
    if ( startHungry % 10 === 0){
        this.hungry++;
    }

}
decreseHungry = function () {
    if (this.hungry > 0) {
        return this.hungry -= 1;
    }
}
petSocialize = function () {
    if ( startSocialize % 6 === 0) {
        this.socialize++;
    
    }
}

decreaseSoicailize = function() {
    if (this.socialize > 0) {
        return this.bored -= 1;
    }
}
petSleep = function () {
    if(this.sleep > 1){
        this.sleep--;
    }
        
 }

 decreaseSleep = function () {
     if(cound >1) {
         count--
         decreaseSleep.innerText- ("this.sleep" + count)

     }
 }

petBathroom = function () {
    if(this.bathroom > 5) {
        return this.bathroom -= 1;
    }
}

bathroomCount = function () {
    if(this.bathroom > 5) {
        return this.bathroom -= 1;
    }

}

// function hungryClick() {
//   // console.log("hungry button clicked!");
//   myTimer = setInterval(Loop, 1000) 
//     count ++ ;
//     countEl.innerText = "Count: " + count ;
//  1000;


// function handleSoicalizeClick() {
//   // console.log("pause button clicked!");
//   clearInterval(myCounter);
// };
// function handleSleepClick() {
//   // console.log("stop button clicked!");
//   clearInterval(myCounter);
//   count = 0;
//   // console.log(count);
//   countEl.innerText = `Count: ${stopp}`;
// };
// function bathroomClick() {
//     // console.log("stop button clicked!");
//     clearInterval(myCounter);
//     count = 0;
//     // console.log(count);
//     countEl.innerText = `Count: " ${stopp}`;
// }
// function resetCounter(){ 
//     clearInterval(interval); 
//     i = 0; 
//     counter.innerHTML = i; 
// }

// const stopTimer = () => {
//     clearInterval(setSeconds(0))
//     document.querySelector('#counter').remove()
// }

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
    count ++ ;
    countEl.innerText = "Count: " + count ;
  }, 1000);
};


const stopTimer = () => {
    clearInterval(setSeconds(0))
    document.querySelector('#counter').remove()
}


startEl.addEventListener('click', handleStartClick);
pauseEl.addEventListener('click', handlePauseClick);
stopEl.addEventListener('click', handleStopClick);
resetBtn.addEventListener("click", resetCounter); 


hungryBtn.addEventListener('click', () =>{
InputEvent.vaule = paraseInt(input.vaule) > 100;
});

socializeBtn.addEventListener('click', () =>{
InputEvent.vaule = paraseInt(input.vaule) > 100;
});

sleepBtn.addEventListener('click', () => {
InputEvent.vaule = paraseInt(input.vaule) > 100;
});

bathroomBtn.addEventListener('click', () => {
InputEvent.vaule = paraseInt(input.vaule) > 100;
});


restBtn.addEventListener("click", resetCounter); 

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