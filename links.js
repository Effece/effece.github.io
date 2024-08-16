var linkColumn = document.getElementById("links");
const initSize = parseInt(window.getComputedStyle(linkColumn).getPropertyValue("width").replace("px", ""), 10);

function linkColumnClick(elt) {
	let size = parseInt(window.getComputedStyle(elt).getPropertyValue("width"), 10);
	let mainBoard = document.getElementById("overall");
	if (size <= initSize) {
		elt.className = elt.className.replaceAll(" trimmed", "");
		mainBoard.className = mainBoard.className.replaceAll(" untrimmed", "");
	} else {
		elt.className = elt.className.concat(" trimmed");
		mainBoard.className = mainBoard.className.concat(" untrimmed");
	}
}