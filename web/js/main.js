var canvas = document.getElementById("drawPlace");
var zoomZone = document.getElementById("side2");

var ctx = canvas.getContext("2d");
var value = 1;

/*ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 150, 75);*/

var pos = { x: canvas.x, y: canvas.y };

document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

// new position from mouse event
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

// resize canvas
function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

function draw(e) {
  // mouse left button must be pressed
  if (e.buttons !== 1) return;

  ctx.beginPath(); // begin

  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#c0392b';

  ctx.moveTo(pos.x, pos.y); // from
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to

  ctx.stroke(); // draw it!
}

//math utilities not shipped in Math module
class Mathf {
	static clamp(v, min, max){
		return v < min ? min : (v > max ? max : v);
	}
}

zoomZone.addEventListener("wheel", event => {

	if(event.deltaY == 100){
		value += -0.2;
	} else {
		value += 0.2;
	}
	value = Mathf.clamp(value, 0.5, 4);
	canvas.style["transform"] = `scale(${value})`
	/*console.log(event.deltaY);
	console.log(value);*/
});
