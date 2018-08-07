var canvas;
var ctx;

var frame = 0;
var frames = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, 2, -1, 2, -1, 2, -1, 2, 3, 3, 3, 3, 3];

var liuImg = new Image();
liuImg.src = "data/img/liu.png";

function initialize() {
	window.addEventListener("load", resize, false);
	window.addEventListener("resize", resize, false);
	setInterval(draw, 100);
}

function start() {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	draw();
}

function draw() {
	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, 800, 600);

	var red = false;
	var yellow = false;
	var green = false;
	switch(frames[frame]) {
	case 0:
		{
			red = true;
		}
		break;
	case 1:
		{
			red = true;
			yellow = true;
		}
		break;
	case 2:
		{
			green = true;
		}
		break;
	case 3:
		{
			yellow = true;
		}
		break;
	default:
		break;
	}

	ctx.fillStyle = (red ? "#ff0000" : "#666666");
	ctx.beginPath();
	ctx.arc(400, 110, 90, 0, 2 * Math.PI, false);
	ctx.fill();

	ctx.fillStyle = (yellow ? "#ffff00" : "#666666");
	ctx.beginPath();
	ctx.arc(400, 300, 90, 0, 2 * Math.PI, false);
	ctx.fill();

	ctx.fillStyle = (green ? "#00ff00" : "#666666");
	ctx.beginPath();
	ctx.arc(400, 490, 90, 0, 2 * Math.PI, false);
	ctx.fill();

	ctx.drawImage(liuImg, 800 - liuImg.width - 10, 600 - liuImg.height - 10, liuImg.width, liuImg.height);

	if(frame < frames.length) {
		frame++;
	} else {
		frame = 0;
	}
}

function resize() {
	var height = window.innerHeight;
	var ratio = canvas.width / canvas.height;
	var width = height * ratio;

	canvas.style.width = width + "px";
	canvas.style.height = height + "px";
}