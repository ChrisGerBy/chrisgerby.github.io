let canvasMain = document.getElementById("main");
let ctxMain = canvasMain.getContext('2d');
ctxMain.fillStyle = "#FFA500";
ctxMain.fillRect(0, 0, 400, 350);
ctxMain.fillStyle = "#008080";
ctxMain.fillRect(400, 0, 400, 350);
ctxMain.fillStyle = "white";
ctxMain.font = "70px Arial";
ctxMain.fillText("<canvas>", 50, 160);
ctxMain.font = "70px Arial";
ctxMain.fillText("<svg>", 490, 160);

let canvas1 = document.getElementById("canvas-rect1");
let ctx1 = canvas1.getContext('2d');
canvas1.style.border = "2px solid #000000";
ctx1.fillStyle = "#f92672";
ctx1.fillRect(100, 50, 100, 100);
ctx1.fillStyle = "#0000FF";
ctx1.font = "20px Arial";
ctx1.fillText("X", 140, 25);
ctx1.fillText("Y", 15, 100);

let canvas2 = document.getElementById("canvas-rect2");
let ctx2 = canvas2.getContext('2d');
canvas2.style.border = "2px solid #000000";
ctx2.rect(100, 50, 100, 100);
ctx2.stroke();
ctx2.fillStyle = "#0000FF";
ctx2.font = "20px Arial";
ctx2.fillText("X", 140, 25);
ctx2.fillText("Y", 15, 100);

let canvasLine1 = document.getElementById("canvas-line1");
let ctxLine1 = canvasLine1.getContext('2d');
canvasLine1.style.border = "2px solid #000000";
ctxLine1.moveTo(60, 60);
ctxLine1.lineTo(200, 100);
ctxLine1.stroke();
ctxLine1.fillStyle = "#0000FF";
ctxLine1.font = "20px Arial";
ctxLine1.fillText("start", 60, 40);
ctxLine1.fillText("end", 200, 120);

let canvasCircle = document.getElementById("canvas-circle");
let ctxCircle = canvasCircle.getContext('2d');
canvasCircle.style.border = "2px solid #000000";
ctxCircle.beginPath();
ctxCircle.arc(100, 100, 80, 0, 2 * Math.PI);
ctxCircle.stroke();

ctxCircle.beginPath();
ctxCircle.strokeStyle = "#0000FF";
ctxCircle.moveTo(0, 100);
ctxCircle.lineTo(100, 100);
ctxCircle.stroke();

ctxCircle.beginPath();
ctxCircle.strokeStyle = "#0000FF";
ctxCircle.moveTo(100, 0);
ctxCircle.lineTo(100, 100);
ctxCircle.fill();
ctxCircle.stroke();

ctxCircle.font = "20px Arial";
ctxCircle.fillStyle = "blue";
ctxCircle.fillText("x", 40, 80);
ctxCircle.fillText("y", 80, 60);
ctxCircle.stroke();


let canvasCircle2 = document.getElementById("canvas-circle2");
let ctxCircle2 = canvasCircle2.getContext('2d');
canvasCircle2.style.border = "2px solid #000000";
ctxCircle2.beginPath();
ctxCircle2.arc(100, 100, 80, 0, 1.5 * Math.PI);
ctxCircle2.stroke();

ctxCircle2.font = "20px Arial";
ctxCircle2.fillStyle = "blue";
ctxCircle2.fillText("0", 202, 98);
ctxCircle2.fillText("0.5 * Math.PI", 102, 205);
ctxCircle2.fillText("1 * Math.PI", 30, 95);
ctxCircle2.fillText("1.5 * Math.PI", 102, 25);
ctxCircle.stroke();

ctxCircle2.beginPath();
ctxCircle2.moveTo(100, 0);
ctxCircle2.lineTo(100, 202);
ctxCircle2.strokeStyle = "gray";
ctxCircle2.stroke();

ctxCircle2.beginPath();
ctxCircle2.moveTo(0, 100);
ctxCircle2.lineTo(202, 100);
ctxCircle2.strokeStyle = "gray";
ctxCircle2.stroke();