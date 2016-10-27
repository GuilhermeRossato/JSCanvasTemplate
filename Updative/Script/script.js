"use strict";
var cnvc;
window.addEventListener("load", function() {
	cnvc = new CanvasUpdater(document.getElementById("canvasRecipient"), 16,Math.max(window.innerHeight - 200, 100) * (1.777) - 150,Math.max(window.innerHeight - 200, 100));
	cnvc.addEventListener("update", ctx=>{
		return true;
	}
	);
	cnvc.draw();
});
