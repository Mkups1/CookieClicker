// Muffin Masher

let cnv = document.getElementById("canvas")
let ctx = cnv.getContext("2d")
cnv.width = 400;
cnv.height = 850;

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
 // Draw background  
 ctx.drawImage(background, 0, 0, 1250, 850)
 ctx.drawImage(muffin, 50, 300, 300, 300)
 // Draw muffin amount 
 ctx.font = "30px Arial"
 ctx.fillStyle = "rgb(125, 50, 0)"
 ctx.fillText("Muffins:" + muffinAmount, 25, 150)
 //  Unlockables
 //  cursor
 ctx.fillStyle = cursorColor
 ctx.fillRect(914, 319, 313, 50) 
 if (muffinAmount >= 15){
    cursorColor = "white"
 } else if (muffinAmount < 15)
    cursorColor = "grey"
 //  baker
 ctx.fillStyle = bakerColor
 ctx.fillRect(914, 374, 313, 50) 
 if (muffinAmount >= 30){
    bakerColor = "white"
 } else if (muffinAmount < 30)
 bakerColor = "grey"
 ctx.drawImage(baker, 1150,375, 50, 50)
 //  Farm
 ctx.fillStyle = farmColor
 ctx.fillRect(914, 429, 313, 50) 
 if (muffinAmount >= 40){
   farmColor = "white"
 } else if (muffinAmount < 40)
 farmColor = "grey"
 //  Mine
 ctx.fillStyle = mineColor
 ctx.fillRect(914, 484, 313, 50)
 if (muffinAmount >= 40){
   mineColor = "white"
 } else if (muffinAmount < 40)
 mineColor = "grey"
 //  Factory
 ctx.fillStyle = factoryColor
 ctx.fillRect(914, 539, 313, 50) 
 if (muffinAmount >= 40){
   factoryColor = "white"
 } else if (muffinAmount < 40)
 factoryColor = "grey"
 //  Bank
 ctx.fillStyle = bankColor
 ctx.fillRect(914, 594, 313, 50) 
 if (muffinAmount >= 40){
   bankColor = "white"
 } else if (muffinAmount < 40)
 bankColor = "grey"
 //  Temple
 ctx.fillStyle = templeColor
 ctx.fillRect(914, 649, 313, 50) 
 if (muffinAmount >= 40){
   templeColor = "white"
 } else if (muffinAmount < 40)
 templeColor = "grey"
 // Alchemy Lab
 ctx.fillStyle = alchemyColor
 ctx.fillRect(914, 704, 313, 50)  
 if (muffinAmount >= 40){
   alchemyColor = "white"
 } else if (muffinAmount < 40)
 alchemyColor = "grey"
 // Time Machine 
 ctx.fillStyle = tMachineColor
 ctx.fillRect(914, 759, 313, 50)  
 if (muffinAmount >= 40){
   tMachineColor = "white"
 } else if (muffinAmount < 40)
 tMachineColor = "grey"
 
 requestAnimationFrame(loop)
}

document.addEventListener("mousedown", moreMuffin)

function moreMuffin(event) {
    if (event.x >= 100 && event.x <= 325 && event.y >=400 && event.y <= 650) {
        muffinAmount++
        console.log(muffinAmount)
    }
}

