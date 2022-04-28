// Muffin Masher

let cnv = document.getElementById("canvas")
let ctx = cnv.getContext("2d")
cnv.width = 240;
cnv.height = 300;

let muffin = document.getElementById("muffin")
let cursorDiv = document.getElementById("cursor-div")
let cursorFloat = document.getElementById("cursor-float")
let bakerDiv = document.getElementById("baker-div")
let muffinAmount = 0
let cursorAmount = 0
let bakerAmount = 0

let insideDotX = 90
let insideDotY = 170

let angle = 0

let cursorX, cursorY

let distance = 100



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
 // Draw cursor 
 if (cursorAmount >= 1) {
   ctx.drawImage(cursorFloat, cursorX, cursorY, 25, 25)
 }
 // Draw cursor spinning
 cursorX = insideDotX + (distance * Math.cos((angle - 90) * Math.PI / 180))
 cursorY = insideDotY + (distance * Math.sin((angle - 90) * Math.PI / 180))
 angle++
 requestAnimationFrame(loop)
}

window.setInterval(
  function muffinSec(){
    muffinAmount++
    if (muffinAmount >= 10){
      cursorDiv.style.background="white"
    } if (muffinAmount >= 100){
      bakerDiv.style.background="white"
    }
    console.log(muffinAmount)
  }, 1000);


document.addEventListener("mousedown", moreMuffin)




function moreMuffin(event) {
    if (event.x - cnv.getBoundingClientRect().x >= 20 && event.x - cnv.getBoundingClientRect().x <= 180 && event.y - cnv.getBoundingClientRect().y >= 110 && event.y - cnv.getBoundingClientRect().y <= 260) {
        muffinAmount++
        if (muffinAmount >= 10){
          cursorDiv.style.background="white"
        } if (muffinAmount >= 100){
          bakerDiv.style.background="white"
        }
        console.log(muffinAmount)
    }
}


document.getElementById("cursor-div").addEventListener("mousedown", moreCursor)
document.getElementById("baker-div").addEventListener("mousedown", moreBaker)

function moreCursor() {
  if (muffinAmount >=10) {
   muffinAmount -= 10
   cursorAmount++
   console.log(cursorAmount)
   
  } if (muffinAmount <= 10) {
    cursorDiv.style.background="grey"
  }
 }

 function moreBaker() {
  if (muffinAmount >=100) {
   muffinAmount -= 100
   bakerAmount++
   console.log(bakerAmount)
   
  } if (muffinAmount <= 100) {
    bakerDiv.style.background="grey"
  }
 }