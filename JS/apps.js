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
const myPetHeaven = document.getElementById("petHeaven")

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
// hunger count increment +1
function hungerCount() {
    hungryCounter = setInterval(function(){
    food++; 
     if (hunger === 10) {
        clearInterval(hungryCounter)
        myPetHeaven.innerText= "pet has reached pet heaven"
     }
     
         })
    }
    //  myPetHeaven.innerText = "Your pet went to Heaven :')";

    // else (hunger === 10 || bordem === 10 || sleepiness === 10 || age === 10) // all count reached 10 - pet has went to heaven.
    //     clearInterval(hungerCounter); // clear hunger count
    //      myPetHeaven.innerText = " pet heaven, she's gone."
    //      }, 1000);
    

// age count increment +1
        function ageCount() {
        theAgeCounter = setInterval(function(){
        number++;
        ageCounter.innerText ="Age:" + number
    if( age === 10){ // age count reached 10
        clearInterval(theAgeCounter)
        myPetHeaven.innerText = "your pet went to Heaven :')"
        }
        }, 2000); // 2 sec
    }
    // sleepines count
        function sleepinessCount() {
        tiredCounter = setInterval(function(){
        sleep++; //  sleep increment +1
        sleepCounter.innerText = "sleep" + tired;
    if( tired === 10){ // sleepiness has reached 10
        clearInterval(tiredCounter)
        petSurvived.innerText = "your pet went to Heaven :')"
            }
        }, 3000); // 3 seconds
    } 
    // bordem count increment +1
    function bordemCount(){
        theBoredCounter = setInterval(function(){
        bored++;
        boredCounter.innerText = " bored" + bored;
    if(bored === 10){ // hunger count reached 10
        clearInterval(hungryCounter)
        clearInterval(tiredCounter)
        clearInterval(theBoredCounter)
        clearInterval(theAgeCounter) // clear counter for each . 
    myPetSurvived.innerText = "your pet went to Heaven :')" }
        },2500)
     }
    // increments 4 bordem

    function bordemClick(){
            tired--;
            boredemCounter.innerText = "bored" + bordem;
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
    
   // click functions  event listener  pass the functions / start click's

   startEl.addEventListener('click', handleStartClick)

   hungerEl.addEventListener("click", hungerClick)
   sleepinessEl.addEventListener("click", tiredClick )
   bordemEl.addEventListener("click", bordemClick )

//    colorButton.addEventListener("click", colorChange);

    


// lightButton.addEventListener("click",(event) =>{
//     if (document.body.style.backgroundColor === "blue")
//     {
//     } else {
//         document.body.style.backgroundColor = "red"
//     }
// })

   