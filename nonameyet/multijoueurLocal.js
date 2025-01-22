//import * as jeu from "jeu.js";

var p, pMax, piece, enCours;
p       = 0;
pMax    = 2;
piece   = "Roi";
enCours = true;

var width, height;
//width = sessionStorage.getItem("width");
//height = sessionStorage.getItem("height");

//sessionStorage.removeItem("width");
//sessionStorage.removeItem("height");

function pSuivant(n) {
	return (n + 1) % pMax;
}

function setInputs() {

	let cases = document.getElementsByClassName("case");
	for (var i = 0; i < cases.length; i++)
		cases[i].setAttribute("onclick", "input(this)");

	// aucun rapport avec la fonction mais je dois rajouter ce code ici...
	piece = sessionStorage.getItem("piece");

}

function input(elt) {

	if (!enCours) return;

	// obtention de la case
	let r, c; // row column ; priorité : tableau[r][c]
	r = parseInt(elt.id[0]);
	c = parseInt(elt.id[1]);

	let ar, ac; // ancienne row ancienne column
	let ap = document.getElementsByClassName(`p${p + 1}`)[0]; // corriger le p + 1 (faire que joueur 1 = 0)
	ar = parseInt(ap.id[0]);
	ac = parseInt(ap.id[1]);

	let er, ec; // ennemi row ennemi column
	let ep = document.getElementsByClassName(`p${pSuivant(p) + 1}`)[0]; // pareil
	er = parseInt(ep.id[0]);
	ec = parseInt(ep.id[1]);
	// par défaut, on considérera que l'ennemi est le joueur suivant (variations si le jeu est à plus de 3 joueurs)

	let coords, acoords, ecoords;
	coords  = [r, c];
	acoords = [ar, ac];
	ecoords = [er, ec];

	if (!(reach(piece, acoords, coords) || win(piece, acoords, coords, ecoords)) || (r === ar && c === ac) || elt.className.includes('croix')) { // ou !a && !b d'après la loi de Morgan
		alert("Vous ne pouvez pas jouer ici !");
		return;
	}

	ap.className = "croix case";
	elt.className = `p${p + 1} case`;

	if (r === er && c === ec) {
		alert(`La partie est terminée ; bravo au joueur ${p + 1} !`);
		enCours = false;
		return;
	}

	p = pSuivant(p);

	if (los(piece, coords)) {
		alert(`La partie est terminée par bloquage ; bravo au joueur ${p + 1} !`);
		enCours = false;
		return;
	}

	return;

}

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

function reach(piece, c0, c1) { // c0 acoords c1 coords (à modifier)
	switch (piece) {
		case "Roi":      return ([0, 1].includes(Math.abs(c0[0] - c1[0]))) && ([0, 1].includes(Math.abs(c0[1] - c1[1])));
		case "Tour":     return (c0[0] === c1[0]) || (c0[1] === c1[1]);
		case "Fou":      return (Math.abs(c0[0] - c1[0]) === Math.abs(c0[1] - c1[1]));
		case "Reine":    return reach('Tour', c0, c1) || reach('Fou', c0, c1);
		case "Cavalier": return ((Math.abs(c0[0] - c1[0]) === 1) && Math.abs(c0[1] - c1[1]) === 2) || ((Math.abs(c0[0] - c1[0]) === 2) && (Math.abs(c0[1] - c1[1]) === 1));
	}
	return true;
}

function getReach(piece, coords) {

	width = sessionStorage.getItem("width");
	height = sessionStorage.getItem("height");

	let elt, res;
	res = [];
	for (let i = 0; i < height; i++) for (let j = 0; j < width; j++) {
		elt = document.getElementById(`${i}${j}`);
		if (!elt.className.includes('croix') && !(coords[0] === i && coords[1] === j) && reach(piece, coords, [i, j]))
			res.push(elt); // désolé je pouvais difficilement faire autrement
	}

	return res;

}

function win(piece, acoords, coords, ecoords) {
	return (coords === ecoords) && reach(piece, acoords, coords);
}

function los(piece, coords) {

	return getReach(piece, coords).length === 0;

}