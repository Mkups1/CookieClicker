// Muffin Masher

let cnv = document.getElementById("canvas")
let ctx = cnv.getContext("2d")
cnv.width = 240;
cnv.height = 300;

let muffin = document.getElementById("muffin")
let cursorDiv = document.getElementById("cursor-div")
let cursorFloat = document.getElementById("cursor-float")
let muffinAmount = 0
let cursorAmount = 0

let insideDotX = 120
let insideDotY = 150

let angle = 0

let cursorX, cursorY

let distance = 50
document.getElementById("cursor-div").addEventListener("mousedown", loop)


requestAnimationFrame(loop)

function loop(){
 //  Draw background and muffin 
 ctx.fillStyle = "white"
 ctx.fillRect(0, 0, 240, 300)
 ctx.drawImage(muffin, 0, 100)
 // Draw muffin amount 
 ctx.font = "30px Arial"
 ctx.fillStyle = "rgb(125, 50, 0)"
 ctx.fillText("Muffins:" + muffinAmount, 25, 50)
 // Draw cursor spinning 
 document.getElementById("cursor-div").addEventListener("mousedown", moreBuilding)
 function moreBuilding() {
   if (muffinAmount >=10) {
    muffinAmount -= 10
    cursorAmount++
    console.log(cursorAmount)
    ctx.drawImage(cursorFloat, 150, 250, 25, 25)
   } if (muffinAmount <= 10) {
     cursorDiv.style.background="grey"
   }
  }
 requestAnimationFrame(loop)
}

window.setInterval(
  function muffinSec(){
    muffinAmount++
    if (muffinAmount >= 10){
      cursorDiv.style.background="white"
    } 
    console.log(muffinAmount)
  }, 1000);


document.addEventListener("mousedown", moreMuffin)




function moreMuffin(event) {
    if (event.x - cnv.getBoundingClientRect().x >= 20 && event.x - cnv.getBoundingClientRect().x <= 180 && event.y - cnv.getBoundingClientRect().y >= 110 && event.y - cnv.getBoundingClientRect().y <= 260) {
        muffinAmount++
        if (muffinAmount >= 10){
          cursorDiv.style.background="white"
        } 
        console.log(muffinAmount)
    }
}



