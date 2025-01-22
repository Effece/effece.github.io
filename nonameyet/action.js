function input(elt) {

	//if (!enCours) return;

	let userNum = document.getElementById('usernum');
	let p = parseInt(userNum.innerHTML);

	// obtention de la case
	let r, c; // row column ; priorité : tableau[r][c]
	r = parseInt(elt.id[0]);
	c = parseInt(elt.id[1]);

	let ar, ac; // ancienne row ancienne column
	let ap = document.getElementsByClassName(`p${p}`)[0];
	ar = parseInt(ap.id[0]);
	ac = parseInt(ap.id[1]);

	let er, ec; // ennemi row ennemi column
	let ep = document.getElementsByClassName(`p${p % 2 + 1}`)[0];
	er = parseInt(ep.id[0]);
	ec = parseInt(ep.id[1]);
	// par défaut, on considérera que l'ennemi est le joueur suivant (variations si le jeu est à plus de 3 joueurs)

	let coords, acoords, ecoords;
	coords  = [r, c];
	acoords = [ar, ac];
	ecoords = [er, ec];

	if (!(reach(acoords, coords) || win(acoords, coords, ecoords)) || (r === ar && c === ac) || elt.className.includes('croix')) { // ou !a && !b d'après la loi de Morgan
		return;
	}

	//ap.className = "croix case";
	//elt.className = `p${p + 1} case`;
	document.getElementById("coup").value = `${r}${c}`;
	document.getElementById("acoup").value = `${ar}${ac}`;

	/*if (r === er && c === ec) {
		return;
	}

	//p = pSuivant(p);

	if (los(coords)) {
		return;
	}*/

	return;

}

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

function reach(c0, c1) { // c0 acoords c1 coords (à modifier)
	return ([0, 1].includes(Math.abs(c0[0] - c1[0]))) && ([0, 1].includes(Math.abs(c0[1] - c1[1])));
}

function getReach(coords) {

	width = 5;
	height = 5;

	let elt, res;
	res = [];
	for (let i = 0; i < height; i++) for (let j = 0; j < width; j++) {
		elt = document.getElementById(`${i}${j}`);
		if (!elt.className.includes('croix') && !(coords[0] === i && coords[1] === j) && reach(coords, [i, j]))
			res.push(elt); // désolé je pouvais difficilement faire autrement
	}

	return res;

}

function win(acoords, coords, ecoords) {
	return (coords === ecoords) && reach(acoords, coords);
}

function los(coords) {

	return getReach(coords).length === 0;

}