console.log("tamagotchi")

// class Tamagotchi {
//     constructor(name, age,hunger,sleepiness,bordem){
//         this.start= this.start
//         this.name = this.name
//         this.age = 0;
//         this.hunger = 1
//         this.sleepiness = 1
//         this.bordem = 2
//     }

    // hungerPet(){
    //     this.hungry--
    // }
    // sleepinesPet(){
    //     this.sleep = this.sleep -4
    // }
    // bordemPet(){
    //     this.socialize-- 
    // }
//button selector 

const startEl= document.querySelector('#start')
const hungerEl = document.querySelector('#hunger')
const sleepinessEl = document.querySelector('#sleepiness')
const bordemEl = document.querySelector('#bordem')

// const button = document.querySelector();

// const colorButton = document.getElementById(".myClassLights");
// const myPetSurvived = document.getElementById("petSurvived")
// not in html

// let ageCounter = null;
// let hungerCounter = null;
// let sleepCounter = null;
// let boredCounter = nul; 

const ageCounter = document.getElementById("age")
const hungerCounter = document.getElementById("hungry")
const sleepCounter = document.getElementById("sleep")
const boredCounter = document.getElementById("bored")
const myPetHeaven = document.getElementById("petHeaven")

let age = 0
let number = 0
let food = 0
let tired = 0
let bored = 0

let myAgeCounter = null;
let myHungerCounter = null;
let mySleepCounter = null;
let myBoredCounter = null; 

  // start clicks for functions 

function handleStartClick() {
    
    hungerCount();
    sleepinessCount();
    bordemCount();
    ageCount();
};
// hunger count increment +1
function hungerCount() {
    myHungerCounter = setInterval(function(){
    food++; 
    hungerCounter.innerText = "Hungry:" + food;
     if (food === 10) {
        myPetHeaven.innerText= "pet has reached pet heaven :')"
        clearInterval(myHungerCounter)
        }
      },2000);
    };

// age count increment +1
        function ageCount() {
        myAgeCounter = setInterval(function(){
        number++;
        ageCounter.innerText ="Age:" + number
    if( age === 10){ // age count reached 10
        clearInterval()
        myPetHeaven.innerText = "your pet went to Heaven :')"
        }
        }, 1000); // 2 sec
    }
    // sleepines count
        function sleepinessCount() {
        mySleepCounter = setInterval(function(){
        tired++; //  sleep increment +1
        sleepCounter.innerText = "Sleep:" + tired;
    if( tired === 10){ // sleepiness has reached 10
        clearInterval(mySleepCounter)
        myPetHeaven.innerText = "your pet went to Heaven :')"
            }
        }, 2000); // 3 seconds
    } 
    // bordem count increment +1
    function bordemCount(){
        myBoredCounter = setInterval(function(){
        bored++;
        boredCounter.innerText = " bored:" + bored;
    if(bored === 10){ // hunger count reached 10
       
     clearInterval(myHungerCounter)
    clearInterval(mySleepCounter)
    clearInterval(myBoredCounter)
    clearInterval(myAgeCounter)
        myPetHeaven.innerText = "your pet went to Heaven :')" 
    }   
     // clear counter for each . 
        },2500)
        
     }
    // increments 4 bordem
    function ageClick(){
        myAge--;
        ageCounter.innerText = "Age:" ;
    }

    function bordemClick(){
            tired--;
            boredCounter.innerText = "Bored:" + bordem;
    };
        // increments for hunger 
    function hungerClick(){
            food--;
            hungerCounter.innerText = "Hunger:" + food;

    }
    function tiredClick(){
             tired--; 
        sleepCounter.innerText = "Sleep:" + tired;
    }


    // function handleStopClick() {
    //     clearInterval(ageCount);
    //     clearInterval(bordemCount);
    //     clearInterval(hungerCount);
    //     clearInterval(sleepinessCount);
    
    
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

   