let count = 0;

// setInterval(function(){
//     count++;
//     console.log(count);
// }, 1000)

let intervalFunc = setInterval(function(){
    count++;
    console.log(count);
}, 1000);

// clearInterval(intervalFunc);

const jumpEl = document.getElementById("btn-jump");
const sitEl = document.getElementById("btn-sit");
const runEl = document.getElementById("btn-run");

function handleJumpClick() {
     console.log("Jump,Clicked");
     package.innerText
}
function handleSitClick(){
    console.log("Sit Button Ready")
}

function handleRunClick(){
    console.log("RUN,clicked")
}

startEl.addEventListener('click', callbackFunction)
.addEventListener('click', callbackFunction)
.addEventListener('click', callbackFunction)


