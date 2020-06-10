const usp = new URLSearchParams(window.location.search);
const resultsList = document.getElementById("result-plate");

document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById("plateCanvas");
    var ctx = canvas.getContext("2d");
    draw();
    drawText(ctx);
});

let plate = [];
for (let i = 1; i < 8; i++){
    plate.push(usp.get("plateSign"+i));
    createPlateString(usp.get("plateSign"+i), i);
}

function createPlateString(text, i){
    text = text.toUpperCase();
    console.log(text);
    drawLetter(text, i);
}

// resultsList.append(plate);

function drawText(ctx){
    ctx.font = '48px sans-serif';
    ctx.textAlign = "center";
}

function drawLetter(letter, i){
    var canvas = document.getElementById("plateCanvas");
    var ctx = canvas.getContext("2d");
    ctx.font = '88px sans-serif';
    ctx.fillText(letter, 70*i, 150, 40);
}

const btnDisplay = document.getElementById("btnDisplay");
const btnDownload = document.getElementById("btnDownload");
const myCanvas = document.getElementById("plateCanvas");
const bckgCanvas = document.getElementById("backgroundCanvas");
const imgConverted = document.getElementById("createdPlate");

btnDisplay.addEventListener("click", function(){
    const dataURI = myCanvas.toDataURL();
    imgConverted.src = dataURI;
})

btnDownload.addEventListener("click", function(){
    if (window.navigator.msSaveBlob){
        window.navigator.msSaveBlob(myCanvas.msToBlob(), "myplate.png")
    } else {
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.href = myCanvas.toDataURL();
        a.download = "myplate.png";
        a.click();
        document.body.removeChild(a);
    }
})

function draw() {
    var ctx = myCanvas.getContext('2d');
    var img = new Image();
    img.onload = function() {
      ctx.drawImage(img, 0, 0, 600, 300);
    };
    img.src = 'image.png';
  }
  