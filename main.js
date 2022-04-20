// Muffin Masher

let cnv = document.getElementById("canvas")
let ctx = cnv.getContext("2d")
cnv.width = 240;
cnv.height = 300;

let muffin = document.getElementById("muffin")
let cursorDiv = document.getElementById("cursor")
let muffinAmount = 0




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
    muffinAmount++
  }, 1000);


document.addEventListener("mousedown", moreMuffin)

function moreMuffin(event) {
    if (event.x - cnv.getBoundingClientRect().x >= 20 && event.x - cnv.getBoundingClientRect().x <= 180 && event.y - cnv.getBoundingClientRect().y >= 110 && event.y - cnv.getBoundingClientRect().y <= 260) {
        muffinAmount++
        console.log(muffinAmount)
    }
}

if(muffinAmount >= 100){
  cursorDiv = "white"
}



