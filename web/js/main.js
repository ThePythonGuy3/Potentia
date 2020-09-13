var canvas = document.getElementById("drawPlace");
var zoomZone = document.getElementById("side2");

var ctx = canvas.getContext("2d");
var value = 1;

ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 150, 75);

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
