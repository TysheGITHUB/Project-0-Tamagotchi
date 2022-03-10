console.log("tamagotchi")
class Tamagotchi {
    constructor(name, age,hunger,sleep,bordem){
        // this.start= this.start
        this.name = this.name
        this.age = 0;
        this.hunger = 1
        this.sleepiness = this.sleep
        this.bordem = this.bored
    }

    hungerPet(){
        this.hungry--
    }
    sleepinesPet(){
        this.sleep = this.sleep -4
    }
    bordemPet(){
        this.socialize-- 
    }
}
//button selector 
// const startButton = document.querySelector('#start')
const hungerEl = document.getElementById('#btn-hunger')
const sleepinessEl = document.getElementById('#btn-sleepiness')
const bordemEl = document.getElementById('#btn-bordem')
const colorButton = document.getElementById(".myClassLights");
const petSurvived = document.getElementById("petSurvived")

hungerCount();
sleepinessCount();
bordemCount();
ageCount();

let hunger = 1
let hungerCounter = null;

function hungerCount() {
    hungerCounter = setInterval(function(){
        hunger++;
        hunger.innerText = "hunger" + hunger;
        if (hunger === 10)
        petSurvived.innerText = "Your pet went to Heaven :')";
        if(hunger == 10 || bordem == 10 || sleepiness == 10)
        clearInterval(hungerCounter);
        }, 1000);
    }
   // click functions + event listener to pass the functions

   hungerEl.addEventListener("click", hungerClick)
   colorButton.addEventListener("click", colorChange);

    // startGame() { 
    //     this.setName()
    //     this.tamagotchi = new Tamagotchi(this.tamagotchiiName)
    //     console.log(this.tamagotchi) 
    // },

// Event Listeners 