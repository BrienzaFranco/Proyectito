let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

let initialX;
let initialY;

const dibujar = (mouseX, mouseY) => {
    ctx.beginPath();
    ctx.moveTo(initialX,initialY);
    ctx.lineWidth = 20;
    ctx.lineCap = "round";
    ctx.lineJoin= "round";
    ctx.lineTo(mouseX,mouseY);
    ctx.stroke();

    initialX = mouseX
    initialY = mouseY
 };

const mouseDown = (evt) => {
    initialX = evt.offsetX
    initialY = evt.offsetY
    dibujar(initialX,initialY);
};

canvas.addEventListener("mousedown", mouseDown);