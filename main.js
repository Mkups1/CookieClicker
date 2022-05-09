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
let displayCursorNum = document.getElementById("cursors")


let cursorAngles = []
let insideDotX = 90
let insideDotY = 170

let angle = 0

let cursorX = []
let cursorY = []

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
 ctx.save()
//  ctx.translate(cnv.width/2, cnv.height/2)
 // Draw cursor spinning
 for(let n=0; n < cursorAngles.length; n++) {
    cursorX[n] = insideDotX + (distance * Math.cos((cursorAngles[n] - 90) * Math.PI / 180))
    cursorY[n] = insideDotY + (distance * Math.sin((cursorAngles[n] - 90) * Math.PI / 180))
    ctx.drawImage(cursorFloat, cursorX[n], cursorY[n], 25, 25)
    cursorAngles[n] ++
 }
 ctx.restore()
 requestAnimationFrame(loop)
}


// Make the muffins go up every second
window.setInterval(
  function muffinSec(){
    muffinAmount++
    muffinAmount += cursorAmount
    muffinAmount += bakerAmount * 10
    if (muffinAmount >= 10 * cursorAmount + 10){
      cursorDiv.style.background="white"
    } if (muffinAmount >= 10 * bakerAmount + 10){
      bakerDiv.style.background="white"
    } 
    console.log(muffinAmount)
  }, 1000);


document.addEventListener("mousedown", moreMuffin)


// When you click make the muffins go up

function moreMuffin(event) {
    if (event.x - cnv.getBoundingClientRect().x >= 20 && event.x - cnv.getBoundingClientRect().x <= 180 && event.y - cnv.getBoundingClientRect().y >= 110 && event.y - cnv.getBoundingClientRect().y <= 260) {
        muffinAmount++
        if (muffinAmount >= 10 * cursorAmount + 10){
          cursorDiv.style.background="white"
        } if (muffinAmount >= 10 * bakerAmount + 10){
          bakerDiv.style.background="white"
        }
        console.log(muffinAmount)
    }
}

// Make buildings go up on click
document.getElementById("cursor-div").addEventListener("mousedown", moreCursor)
document.getElementById("baker-div").addEventListener("mousedown", moreBaker)
// cursor
function moreCursor() {
  if (muffinAmount >= 10 * cursorAmount + 10) {
   muffinAmount -= 10 * cursorAmount + 10
   if (cursorAmount > 0) {
    cursorAngles.push(cursorAngles[cursorAngles.length - 1] - 190)
    cursorX.push(cursorX[cursorX.length -1] - 15)
    cursorY.push(cursorX[cursorY.length -1] - 15)
   } else  {
     cursorAngles.push(15)
     cursorX.push(15)
     cursorY.push(15)
   }
   cursorAmount++
   displayCursorNum.innerHTML = cursorAmount
   console.log(cursorAmount)
   
  } if (muffinAmount <= 10 * cursorAmount + 10) {
    cursorDiv.style.background="grey"
  } if (muffinAmount <= 10 * bakerAmount + 10) {
    bakerDiv.style.background="grey"
  }
 }
 
//  baker
 function moreBaker() {
  if (muffinAmount >=10 * bakerAmount + 10) {
   muffinAmount -= 10 * bakerAmount + 10
   bakerAmount++
   console.log(bakerAmount)
   
  } if (muffinAmount <= 10 * bakerAmount + 10) {
    bakerDiv.style.background="grey"
  }
 }