// Muffin Masher

let cnv = document.getElementById("canvas")
let ctx = cnv.getContext("2d")
cnv.width = 1250;
cnv.height = 850;

let background = document.getElementById("background")
let muffin = document.getElementById("muffin")
let muffinAmount = 0
let bakerColor = "grey"
let cursorColor = "grey"
let farmColor = "grey"
let minecolor = "grey"
let factoryColor = "grey"
let bankColor = "grey"
let templeColor = "grey"
let 


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
 //  Farm
 ctx.fillStyle = "rgb(125,125,125)"
 ctx.fillRect(914, 429, 313, 50) 
 //  Mine
 ctx.fillStyle = "rgb(125,125,125)"
 ctx.fillRect(914, 484, 313, 50)
 //  Factory
 ctx.fillStyle = "rgb(125,125,125)"
 ctx.fillRect(914, 539, 313, 50) 
 //  Bank
 ctx.fillStyle = "rgb(125,125,125)"
 ctx.fillRect(914, 594, 313, 50) 
 requestAnimationFrame(loop)
}

document.addEventListener("mousedown", moreMuffin)

function moreMuffin(event) {
    if (event.x >= 100 && event.x <= 325 && event.y >=400 && event.y <= 650) {
        muffinAmount++
        console.log(muffinAmount)
    }
}

