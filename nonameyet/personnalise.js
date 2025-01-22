var pieces = ["Roi", "Reine", "Tour", "Fou", "Cavalier"];

function updCan(elt) {

	let v = elt.value * 400 / 9;
	let can = document.getElementById("can");
	let p1x, p1y, p2x, p2y;
	p1x = document.getElementById("p1x");
	p1y = document.getElementById("p1y");
	p2x = document.getElementById("p2x");
	p2y = document.getElementById("p2y");

	if (elt.id === "width") {
		can.style.width  = v.toString() + "px";
		p1x.max = elt.value.toString();
		p2x.max = elt.value.toString();
	}

	else if (elt.id === "height") {
		can.style.height = v.toString() + "px";
		p1y.max = elt.value.toString();
		p2y.max = elt.value.toString();
	}

	return;

}

function jouerForm() {

	let width, height, p1x, p1y, p2x, p2y, piece;
	width = document.getElementById("width");
	height = document.getElementById("height");
	p1x = document.getElementById("p1x");
	p1y = document.getElementById("p1y");
	p2x = document.getElementById("p2x");
	p2y = document.getElementById("p2y");
	piece = document.getElementById("piece");

	if (piece.value === "") {
		alert("Veuillez saisir un type de déplacement ! Vous pouvez choisir parmi les pièces des Echecs.");
		return false;
	} else if (!pieces.includes(piece.value)) {
		alert("La pièce demandée ne figure pas dans le catalogue des pièces.");
		return false;
	}

	document.regles.submit();
	return;

}