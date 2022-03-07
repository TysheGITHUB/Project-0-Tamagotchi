let Hungry = 10;
let Socialize = 6;
let Sleep = 2;
let Bathroom = 5;

class Pet {
    constructor ( hungry, socialize, sleep, bathroom ) {
        this.hungry = hungry;
        this.socialize = socialize;
        this.sleep= sleep;
        this.bathroom = bathroom;
    }
};

petHungry = function () {
    if ( startHungry % 10 === 0){
        this.hungry++;
    }
    $('hungry-num').text(`Hungry: ${this.hungry}`);
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
    $('.socialize-num').text(`Socialize: ${this.socialize}`);
}

decreaseSoicailize = function() {
    if (this.socialize > 0) {
        return this.bored -= 1;
    }
}
petSleep = function () {
    if(this.sleep > 2){
        this.sleep--;
    }
    $('.sleep-num').text(`Sleep: ${this.sleep}`);
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
    $('.bathroom-num').text(`Bathroom: ${this.bathroom}`);
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