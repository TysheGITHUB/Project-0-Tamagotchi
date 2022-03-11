console.log("tamagotchi")

class Tamagotchi {
    constructor(name, age,hunger,sleepiness,bordem){
        this.start= this.start
        this.name = this.name
        this.age = 0;
        this.hunger = 1
        this.sleepiness = 1
        this.bordem = 2
    }

    // hungerPet(){
    //     this.hungry--
    // }
    // sleepinesPet(){
    //     this.sleep = this.sleep -4
    // }
    // bordemPet(){
    //     this.socialize-- 
    // }
}
//button selector 

const startEl= document.querySelector('#start')
const hungerEl = document.querySelector('#hunger')
const sleepinessEl = document.querySelector('#sleepiness')
const bordemEl = document.querySelector('#bordem')

// const button = document.querySelector();

const colorButton = document.getElementById(".myClassLights");
const petSurvived = document.getElementById("petSurvived")


// let ageCounter = null;
// let hungerCounter = null;
// let sleepCounter = null;
// let boredCounter = nul; 

const startCounter = document.getElementById("start")
const ageCounter = document.getElementById("age")
const hungerCounter = document.getElementById("hungry")
const sleepCounter = document.getElementById("sleep")
const boredCounter = document.getElementById("bored")
const myPetSurvived = document.getElementById("petSurvived")

let number = 0
let food = 0
let tired = 0
let bored = 0

// let ageCounter = null;
// let hungerCounter = null;
// let sleepCounter = null;
// let boredCounter = nul; 

function handleStartClick() {
    // console.log("start button clicked!");
    myCounter = setInterval(function(){
      count++;
      countEl.innerText = "Count: " + start;
    }, 1000);
  };

  // start clicks for functions 

function handleStartClick() {
    
    hungerCount();
    sleepinessCount();
    bordemCount();
    ageCount();
};
// hunger increment +1
function hungerCount() {
    hungerCounter = setInterval(function(){
        hunger++;
        hunger.innerText = "hunger" + hunger;
        if (hunger === 10)
        petSurvived.innerText = "Your pet went to Heaven :')";
        else (hunger === 10 || bordem === 10 || sleepiness === 10 || age === 10)
        clearInterval(hungerCounter);
        myPetSurvived.innerText = " my pet survived!"
        
        }, 1000);
    }d

    function ageCount() {
        ageCounter = setInterval(function(){
            number++;
            ageCounter.innerText ="Age:" + number
            if( age === 10){
                clearInterval(ageCounter)
                petSurvived.innerText = "your pet went to Heaven :')"
            }
        }, 2000);
    }

    function sleepinessCount () {
        sleepCounter = setInterval(function(){
            sleep++;
            sleepCounter.innerText = "sleep" + tired;
            if( tired === 10){
                clearInterval(sleepCounter)
                petSurvived.innerText = "your pet went to Heaven :')"
            }
        }, 3000);
    } 

    function bordemCount(){
        borderCounter = setInterval(function(){
            bored++;
            boredCounter.innerText = " bored" + bored;
            if(bored === 10){
                clearInterval(hungerCounter)
                clearInterval(sleepCounter)
                clearInterval(boredCounter)
                clearInterval(ageCounter)
                myPetSurvived.innerText = "your pet went to Heaven :')"
            } 2500
    })
    // increments 4 bordem

    function bordemClick(){
        borderCounter = setInterval(function(){
            tired++;
            boredCounter.innerText = "bored" + bordem;
        }, 2500) 
    };
        // increments for hunger 
    function hungerClick(){
        food--;
        hungerCounter.innerText = "hunger" + food;

    }
    function tiredClick(){
        tired--; 
        sleepCounter.innerText = "sleepiness" + tired;
    }


    function handleStopClick() {
        clearInterval(ageCount);
        clearInterval(bordemCount);
        clearInterval(hungerCount);
        clearInterval(sleepinessCount);
    }
    }
    
   // click functions + event listener to pass the functions / start click's

   startEl.addEventListener('click', handleStartClick)
   hungerEl.addEventListener("click", hungerStartClick)
   sleepinessEl.addEventListener("click", tiredStartClick )
   bordemEl.addEventListener("click", bordemStartClick )

//    colorButton.addEventListener("click", colorChange);

    


// lightButton.addEventListener("click",(event) =>{
//     if (document.body.style.backgroundColor === "blue")
//     {
//     } else {
//         document.body.style.backgroundColor = "red"
//     }
// })

   