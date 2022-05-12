// Muffin Masher

let cnv = document.getElementById("canvas")
let ctx = cnv.getContext("2d")
cnv.width = 245;
cnv.height = 300;

let muffin = document.getElementById("muffin")
let cursorDiv = document.getElementById("cursor-div")
let cursorFloat = document.getElementById("cursor-float")
let bakerDiv = document.getElementById("baker-div")
let bakeryDiv = document.getElementById("bakery-div")
let farmDiv = document.getElementById("farm-div")
let factoryDiv = document.getElementById("factory-div")
let bankDiv = document.getElementById("bank-div")
let muffinAmount = 0
let cursorAmount = 0
let bakerAmount = 0
let bakeryAmount = 0
let farmAmount = 0
let factoryAmount = 0
let bankAmount = 0
let displayCursorNum = document.getElementById("cursors")
let displayBakerNum = document.getElementById("bakers")
let displayBakeryNum = document.getElementById("bakeries")
let displayFarmNum = document.getElementById("farms")
let displayFactoryNum = document.getElementById("factories")
let displayBankNum = document.getElementById("banks")
let cursorUpgrade = document.getElementById("cursor-upgrade")
let cursorUpAmount = 1


let cursorAngles = []
let insideDotX = 110
let insideDotY = 170

let angle = 0

let cursorX = []
let cursorY = []

let distance = 100

let done = false


requestAnimationFrame(loop)

function loop(){
 //  Draw background and muffin 
 ctx.fillStyle = "white"
 ctx.fillRect(0, 0, 240, 300)
 ctx.drawImage(muffin, 20, 100)
 // Draw muffin amount 
 ctx.font = "30px Arial"
 ctx.fillStyle = "rgb(125, 50, 0)"
 ctx.fillText("Muffins:" + muffinAmount, 25, 50)

//  ctx.translate(cnv.width/2, cnv.height/2)
 // Draw cursor spinning
 for(let n=0; n < cursorAngles.length; n++) {
    cursorX[n] = insideDotX + (distance * Math.cos((cursorAngles[n] - 90) * Math.PI / 180))
    cursorY[n] = insideDotY + (distance * Math.sin((cursorAngles[n] - 90) * Math.PI / 180))
    ctx.save()
    ctx.translate(cursorX[n] + 12.5, cursorY[n] + 12.5)
    ctx.rotate((cursorAngles[n] + 180) * Math.PI / 180)
    ctx.drawImage(cursorFloat, -12.5, -12.5, 25, 25)
    ctx.restore()
    cursorAngles[n] ++
 }
  
 requestAnimationFrame(loop)
}


// Make the muffins go up every second
window.setInterval(
  function muffinSec(){
    muffinAmount++
    muffinAmount += cursorAmount * cursorUpAmount
    muffinAmount += bakerAmount * 10
    muffinAmount += bakeryAmount * 50
    muffinAmount += farmAmount * 100
    muffinAmount += factoryAmount * 500
    muffinAmount += bankAmount * 1000
    if (muffinAmount >= 10 * cursorAmount + 10){
      cursorDiv.style.background="white"
    } 
    if (muffinAmount >= 100 * bakerAmount + 100){
      bakerDiv.style.background="white"
    } 
    if (muffinAmount >= 500 * bakeryAmount + 500){
      bakeryDiv.style.background="white"
    }
    if (muffinAmount >= 1000 * farmAmount + 1000){
      farmDiv.style.background="white"
    }
    if (muffinAmount >= 5000 * factoryAmount + 5000){
      factoryDiv.style.background="white"
    }
    if (muffinAmount >= 10000 * bankAmount + 10000){
      bankDiv.style.background="white"
    }
    if (!done){
      if (muffinAmount === 10) {
        cursorUpgrade.style.display = "block"
      }
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
        } 
        if (muffinAmount >= 100 * bakerAmount + 100){
          bakerDiv.style.background="white"
        }
        if (muffinAmount >= 500 * bakeryAmount + 500){
          bakeryDiv.style.background="white"
        }
        if (muffinAmount >= 1000 * farmAmount + 1000){
          farmDiv.style.background="white"
        }
        if (muffinAmount >= 5000 * factoryAmount + 5000){
          factoryDiv.style.background="white"
        }
        if (muffinAmount >= 10000 * bankAmount + 10000){
          bankDiv.style.background="white"
        }
        if (!done){
          if (muffinAmount === 10) {
            cursorUpgrade.style.display = "block"
          }
        }
        console.log(muffinAmount)
    }
}

// Make buildings go up on click
document.getElementById("cursor-div").addEventListener("mousedown", moreCursor)
document.getElementById("baker-div").addEventListener("mousedown", moreBaker)
document.getElementById("bakery-div").addEventListener("mousedown", moreBakery)
document.getElementById("farm-div").addEventListener("mousedown", morefarm)
document.getElementById("factory-div").addEventListener("mousedown", morefactory)
document.getElementById("bank-div").addEventListener("mousedown", morebank)
// Buildings section
// cursor
function moreCursor() {
  if (muffinAmount >= 10 * cursorAmount + 10) {
   muffinAmount -= 10 * cursorAmount + 10
   if (cursorAmount > 0) {
    cursorAngles.push(cursorAngles[cursorAngles.length - 1] - 190)
    cursorX.push(cursorX[cursorX.length -1] - 15)
    cursorY.push(cursorY[cursorY.length -1] - 15)
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
  } 
  if (muffinAmount <= 100 * bakerAmount + 100) {
    bakerDiv.style.background="grey"
  }
  if (muffinAmount <= 500 * bakeryAmount + 500) {
    bakeryDiv.style.background="grey"
 }
  if (muffinAmount <= 1000 * farmAmount + 1000){
  farmDiv.style.background="grey"
  }
  if (muffinAmount <= 5000 * factoryAmount + 5000){
    factoryDiv.style.background="grey"
  }
  if (muffinAmount <= 10000 * bankAmount + 10000){
    bankDiv.style.background="grey"
  }
}
//  baker
function moreBaker() {
  if (muffinAmount >=100 * bakerAmount + 100) {
    muffinAmount -= 100 * bakerAmount + 100
    bakerAmount++
    console.log(bakerAmount)
   
  } 
  displayBakerNum.innerHTML = bakerAmount
  if (muffinAmount <= 10 * cursorAmount + 10) {
    cursorDiv.style.background="grey"
  } 
  if (muffinAmount <= 100 * bakerAmount + 100) {
    bakerDiv.style.background="grey"
  }
  if (muffinAmount <= 500 * bakeryAmount + 500) {
    bakeryDiv.style.background="grey"
  }
  if (muffinAmount <= 1000 * farmAmount + 1000){
    farmDiv.style.background="grey"
  }
  if (muffinAmount <= 5000 * factoryAmount + 5000){
    factoryDiv.style.background="grey"
  }
  if (muffinAmount <= 10000 * bankAmount + 10000){
    bankDiv.style.background="grey"
  }
}
//  bakery
function moreBakery() {
  if (muffinAmount >= 500 * bakeryAmount + 500) {
    muffinAmount -= 500 * bakeryAmount + 500
    bakeryAmount++
    console.log(bakeryAmount)
   
  } 
  displayBakeryNum.innerHTML = bakeryAmount
  if (muffinAmount <= 10 * cursorAmount + 10) {
    cursorDiv.style.background="grey"
  } 
  if (muffinAmount <= 100 * bakerAmount + 100) {
    bakerDiv.style.background="grey"
  }
  if (muffinAmount <= 500 * bakeryAmount + 500) {
    bakeryDiv.style.background="grey"
  }
  if (muffinAmount <= 1000 * farmAmount + 1000){
    farmDiv.style.background="grey"
  }
  if (muffinAmount <= 5000 * factoryAmount + 5000){
    factoryDiv.style.background="grey"
  }
  if (muffinAmount <= 10000 * bankAmount + 10000){
    bankDiv.style.background="grey"
  }
}

//  farm
function morefarm() {
  if (muffinAmount >= 1000 * farmAmount + 1000) {
    muffinAmount -= 1000 * farmAmount + 1000
    farmAmount++
    console.log(farmAmount)
   
  } 
  displayFarmNum.innerHTML = farmAmount
  if (muffinAmount <= 10 * cursorAmount + 10) {
    cursorDiv.style.background="grey"
  } 
  if (muffinAmount <= 100 * bakerAmount + 100) {
    bakerDiv.style.background="grey"
  }
  if (muffinAmount <= 500 * bakeryAmount + 500) {
    bakeryDiv.style.background="grey"
  }
  if (muffinAmount <= 1000 * farmAmount + 1000){
    farmDiv.style.background="grey"
  }
  if (muffinAmount <= 5000 * factoryAmount + 5000){
    factoryDiv.style.background="grey"
  }
  if (muffinAmount <= 10000 * bankAmount + 10000){
    bankDiv.style.background="grey"
  }
}

//  factory
function morefactory() {
  if (muffinAmount >= 5000 * factoryAmount + 5000) {
    muffinAmount -= 5000 * factoryAmount + 5000
    factoryAmount++
    console.log(factoryAmount)
   
  } 
  displayFactoryNum.innerHTML = factoryAmount
  if (muffinAmount <= 10 * cursorAmount + 10) {
    cursorDiv.style.background="grey"
  } 
  if (muffinAmount <= 100 * bakerAmount + 100) {
    bakerDiv.style.background="grey"
  }
  if (muffinAmount <= 500 * bakeryAmount + 500) {
    bakeryDiv.style.background="grey"
  }
  if (muffinAmount <= 1000 * farmAmount + 1000){
    farmDiv.style.background="grey"
  }
  if (muffinAmount <= 5000 * factoryAmount + 5000){
    factoryDiv.style.background="grey"
  }
  if (muffinAmount <= 10000 * bankAmount + 10000){
    bankDiv.style.background="grey"
  }
}

//  bank
function morebank() {
  if (muffinAmount >= 10000 * bankAmount + 10000) {
    muffinAmount -= 10000 * bankAmount + 10000
    bankAmount++
    console.log(bankAmount)
   
  } 
  displayBankNum.innerHTML = bankAmount
  if (muffinAmount <= 10 * cursorAmount + 10) {
    cursorDiv.style.background="grey"
  } 
  if (muffinAmount <= 100 * bakerAmount + 100) {
    bakerDiv.style.background="grey"
  }
  if (muffinAmount <= 500 * bakeryAmount + 500) {
    bakeryDiv.style.background="grey"
  }
  if (muffinAmount <= 1000 * farmAmount + 1000){
    farmDiv.style.background="grey"
  }
  if (muffinAmount <= 5000 * factoryAmount + 5000){
    factoryDiv.style.background="grey"
  }
  if (muffinAmount <= 10000 * bankAmount + 10000){
    bankDiv.style.background="grey"
  }
}

// Upgrades section
// Make upgrades bought on click
document.getElementById("cursor-upgrade").addEventListener("mousedown", moreCursorUp)


function moreCursorUp() {
  if (!done){
    if(muffinAmount >= 10) {
      muffinAmount -= 10
      cursorUpAmount++
      done = true
      cursorUpgrade.style.display = "none" 
    }
  }
}

