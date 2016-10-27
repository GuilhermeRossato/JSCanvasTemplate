"use strict";
var cnvc;
window.addEventListener("load", function() {
	cnvc = new CanvasReactor(document.getElementById("canvas"),Math.max(window.innerHeight - 200, 100) * (1.777) - 150,Math.max(window.innerHeight - 200, 100));
	console.log("Initialized");
	cnvc.addEventListener("draw", ctx=>{
		console.log("draw");
		return true;
	}
	);
	cnvc.draw();
});
