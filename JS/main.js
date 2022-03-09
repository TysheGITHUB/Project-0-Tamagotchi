class Tamagotchi {
    constructor(start, hungry,socialize,sleep,barthroom){
        this.start= this.start
        this.hungry = this.hungry
        this.socialize = this.socialize
        this.sleep = this.sleep
        this.bathroom = this.bathroom
    }
}
//button selector 
const startButton = document.querySelector('#start')
const hungryButton = document.querySelector('hungry')
const socializeButton = document.querySelector('#socialize')
const sleepButton = document.querySelector('#sleep')
const bathroomButton = document.querySelector('#bathroom')

const memetchiGame = {
    memetchiGame: "",
    memethchi: "",
    setName() {
        this.memetchiGame = (`what is your pets name?, "Enter Name`)
    },
    startGame() {

    }
}

// event listener 
startButton.addEventListener("click", (event) => {
    memetchiGame.startGame()
})