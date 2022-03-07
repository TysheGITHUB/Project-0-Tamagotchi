// identify the elements in the DOM with variables in our JS
const hungryBtn = document.querySelector("btn-Hungry");
const soicalizeBtn = document.querySelector("btn-Soicalize");
const sleepBtn = document.querySelector("btn-sleep");
const bathroomBtn = document.querySelector("btn-bathroom")
const restBtn = document.querySelector("btn-rest"); 
const countEl = document.getElementById("count");


class Pet {
    constructor (age, hungry, socialzie, sleep, bathrrom ) {
        this.age = age;
        this.hungry = hungry;
        this.socialize= socialize;
        this.sleep= sleep;
        this.bathroom = bathroom;
    }
};

// let Hungry = 100;
// let Socialize = 100
// let Sleep = 100;
// let Bathroom = 100;
  
function hungryClick() {
  // console.log("hungry button clicked!");
  myTimer = setInterval(Loop, 1000) 
    count ++ ;
    countEl.innerText = "Count: " + count ;
 1000;


function handleSoicalizeClick() {
  // console.log("pause button clicked!");
  clearInterval(myCounter);
};
function handleSleepClick() {
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

const stopTimer = () => {
    clearInterval(setSeconds(0))
    document.querySelector('#counter').remove()
}




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

}