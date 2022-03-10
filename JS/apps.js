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
const lightsEl = document.getElementById("btn-lights")
const petSurvived = document.getElementById("petSurvived")

hungerCount();
sleepinessCount();
bordemCount();
ageCount();

let hunger = 1
let hungerCounter = null;

() {
    tamagotchiName : "",
    setName() {
        this.tamagotchiName = prompt (`what is your pet name?, Enter Name`)
        const nameDiv = document.querySelector(`#tama-name p `) 
        // console.log(nameDiv)
        nameDiv.innerTEXT = (` Name: ${this.tamagotchiName}`)
    },

    startGame() { 
        this.setName()
        this.tamagotchi = new Tamagotchi(this.tamagotchiiName)
        console.log(this.tamagotchi) 
    },

// Event Listeners 
button.addEventListener("click", (event) => {
})

hungryButton.addEventListener("click", (event) => {
tamaGame.tamagotchi.hungryPet()
document.getElementById()
console.log(tamaGame.Tamagotchi)
 })

sleepButton.addEventListener("click", (event) => {
tamaGame.tamagotchi.sleepPet() 
document.getElementById()
console.log(tamaGame.Tamagotchi)
 });

socializeButton.addEventListener("click", (event) => {
tamaGame.tamagotchi.socializePet()
document.getElementById()
console.log(tamaGame.Tamagotchi)
 });

bathroomButton.addEventListener("click", (event) => {
tamaGame.tamagotchi.bathroomPet()
document.getElementById()
console.log(tamaGame.Tamagotchi)
   })
startGame() 
    this,setName( {
        this.tamagotchi = new Tamagotchi(this.tamagotchiName)
        console.log(this.Tamagotchi)
    })
aging() 
    const intervalID = setInterval (() => {
        console.log("aging pet")
    })
