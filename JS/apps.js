console.log("tamagotchi")
class Tamagotchi {
    constructor(start, hungry,socialize,sleep,barthroom){
        // this.start= this.start
        this.name = this.name
        this.age = 0;
        this.hungry = 1
        this.sleep = this.sleep
        this.bathroom = this.bored
    }
    
    hungryPet(){
        this.hungry--
    }
    sleepPet(){
        this.sleep = this.sleep -4
    }
    socializePet(){
        this.socialize-- 
    }
}
//button selector 
// const startButton = document.querySelector('#start')
const hungryButton = document.querySelector('#hungry')
const sleepButton = document.querySelector('#sleep')
const bathroomButton = document.querySelector('#bathroom')

const tamaGame = {
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

// event listener 
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
