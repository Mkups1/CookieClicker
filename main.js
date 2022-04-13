// Muffin Masher

let cnv = document.getElementById("canvas")
let ctx = cnv.getContext("2d")
cnv.width = 240;
cnv.height = 300;

let background = document.getElementById("background-left")
let muffin = document.getElementById("muffin")
let baker = document.getElementById("baker")
let muffinAmount = 0
let bakerColor = "grey"
let cursorColor = "grey"
let farmColor = "grey"
let mineColor = "grey"
let factoryColor = "grey"
let bankColor = "grey"
let templeColor = "grey"
let alchemyColor = "grey"
let tMachineColor = "grey"
let borderY = 369



requestAnimationFrame(loop)

function loop(){
 //  Draw background and muffin 
 ctx.drawImage(muffin, 0, 100)
 ctx.fillStyle = "white"
 ctx.fillRect(25, 0, 300, 50)
 // Draw muffin amount 
 ctx.font = "30px Arial"
 ctx.fillStyle = "rgb(125, 50, 0)"
 ctx.fillText("Muffins:" + muffinAmount, 25, 50)

 requestAnimationFrame(loop)
}

window.setInterval(
  function muffinSec(){
    muffinAmount = muffinAmount + 1
  }, 1000);


document.addEventListener("mousedown", moreMuffin)

function moreMuffin(event) {
    if (event.x - cnv.getBoundingClientRect().x >= 20 && event.x - cnv.getBoundingClientRect().x <= 180 && event.y - cnv.getBoundingClientRect().y >= 110 && event.y - cnv.getBoundingClientRect().y <= 260) {
        muffinAmount++
        console.log(muffinAmount)
    }
}

