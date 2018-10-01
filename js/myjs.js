var container = document.getElementById("container");
var color = "grey";
var rainbow = false;

for(var r = 0; r < 16; r++){
	var row = document.createElement("div");
	row.setAttribute("class", "row");
	for(var c = 0; c < 16; c++){
		var col = document.createElement("div");
		col.setAttribute("style", "width: 40px; height: 40px;");
		col.setAttribute("class", "square");
		row.appendChild(col);
	}
	container.appendChild(row);
}


var squares = document.querySelectorAll(".square");

var drawColor = (e) => {
	if(rainbow){
		function getRandomColor(){
		var letters = '0123456789ABCDEF';
		var newColor = '#';
		for(var i = 0; i < 6; i++){
			newColor += letters[Math.floor(Math.random() * 16)];
		}
		return newColor;
	}
	color = getRandomColor();
	}
	e.target.style.backgroundColor = color;
}

squares.forEach(square => square.addEventListener("mouseenter", drawColor));

var reset = () => {
	squares.forEach(square => square.style.backgroundColor = "white");
}

var clearGrid = document.querySelector("#clear");
clearGrid.addEventListener("click", reset);

var setRainbow = () =>{
	rainbow = true;
}

var rainbowBtn = document.querySelector("#rainbow");
rainbowBtn.addEventListener("click", setRainbow);

var defGrid = () => {
	var length = window.prompt("Enter a value from 1 to 100");
	var children = document.querySelectorAll(".row");
	children.forEach((child) => container.removeChild(child));

	for(var r = 0; r < length; r++){
	var row = document.createElement("div");
	row.setAttribute("class", "row");
	for(var c = 0; c < length; c++){
		var col = document.createElement("div");
		col.setAttribute("style", "width: " + 640/length + "px; height: " + 640/length+ "px;");
		col.setAttribute("class", "square");
		row.appendChild(col);
	}
	container.appendChild(row);
	}
	var squares = document.querySelectorAll(".square");
	squares.forEach(square => square.addEventListener("mouseenter", drawColor));

}

var defGridBtn = document.querySelector("#defgrid");
defGridBtn.addEventListener("click", defGrid);