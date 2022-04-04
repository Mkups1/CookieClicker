// Muffin Masher

let cnv = document.getElementById("canvas")
let ctx = cnv.getContext("2d")
cnv.width = 1250;
cnv.height = 775;

let muffin = document.getElementById("muffin")

ctx.drawImage(muffin, 100, 137, 300, 300)