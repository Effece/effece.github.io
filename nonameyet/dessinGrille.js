var std = {
	0: 'p1',
	77: 'p2'
};

var fWidth, fHeight, fP1X, fP1Y, fP2X, fP2Y, fPiece;
var formSpecifiee = true;

function creerPlateauStandard() {
	// plateau standard : 8x8, chaque joueur à un coin
	creerPlateau(std, 8, 8);
	return;
}

function creerPlateauForm() {

	// si page accédée sans formulaire -> plateau standard (8x8 positions dans coins)
	if (!formSpecifiee) {
		creerPlateauStandard();
		return;
	}

	// ensemble des éléments pré-définis (joueurs, croix dans certains cas)
	let conf = {};
	let case1, case2;

	// cas où les coordonnées du joueur 1 n'ont pas été spécifiées
	if (fP1X === undefined || fP1Y === undefined)
		case1 = 0;
	else
		case1 = fP1Y * 10 + fP1X;
	conf[case1] = 'p1';

	// cas où les coordonnées du joueur 2 n'ont pas été spécifiées
	if (fP2X === undefined || fP2Y === undefined)
		case2 = (fHeight - 1) * 10 + fWidth - 1; // coin inférieur droit (= fHeight * 10 + fWidth - 11 | mais moins personnalisable)
	else
		case2 = fP2Y * 10 + fP2X;
	conf[case2] = 'p2';

	// création d'un plateau personnalisé
	creerPlateau(conf, fWidth, fHeight);
	if (fPiece !== undefined) sessionStorage.setItem("piece", fPiece);
	return;
}

function creerPlateau(file, width, height) {

	// sauvegarde temporaire pour réutiliser les données dans multijoueurLocal.js
	sessionStorage.setItem("width", width);
	sessionStorage.setItem("height", height);
	sessionStorage.setItem("piece", "Roi");
	/*
	Par défaut, la pièce est le Roi.
	Elle n'intervient pas dans la création du tableau donc n'est pas donnée en paramètre.
	Je la mets ici par défaut, sans utiliser de variable, mais il faut l'actualiser dans la fonction faisant appelle à celle-ci si nécessaire.
	*/
	// "temporaire" mais je n'ai pas réussi à l'annuler...

	let espace = document.getElementById("espace");
	let t = "<table>";
	let cls = '';

	for (let i = 0; i < height; i++) {
		t += "<tr>";
		for (let j = 0; j < width; j++)	{
			if (file[i * 10 + j] !== undefined) cls = file[i * 10 + j];
			t += `<td><button class = '${cls} case' id = ${i}${j} /></td>`;
			cls = '';
		}
		t += "</tr>";
	}

	espace.innerHTML = t;

	return;

}

function dataElt(d, n) {
	return d[n].split(":")[1];
}

function capteForm() {

	let t = document.getElementById("recu");
	//alert(t.innerHTML);

	// vide31415 est un code que je me permets pour dire que le site n'a pas reçu de formulaire
	// s'il n'a pas reçu de formulaire, il procède à une mise en place normale
	if (t.innerHTML.includes("vide31415")) {
		formSpecifiee = false;
		t.innerHTML = null;
		return;
	}

	let data = t.innerHTML.split(";");

	// il faudrait trouver un moyen d'arrêter si la longueur de la liste est dépassée
	fWidth  = parseInt(dataElt(data, 0));
	fHeight = parseInt(dataElt(data, 1));
	fP1X    = parseInt(dataElt(data, 2)) - 1; // - 1
	fP1Y    = parseInt(dataElt(data, 3)) - 1; // imposé
	fP2X    = parseInt(dataElt(data, 4)) - 1; // par
	fP2Y    = parseInt(dataElt(data, 5)) - 1; // les tableaux
	fPiece  =          dataElt(data, 6);

	t.innerHTML = null;
	return;

}

function genForm() {

	let t = document.getElementById("recu");

	if (t.innerHTML.includes("vide314315")) {
		formSpecifiee = false;
		t.innerHTML = null;
		return;
	}

	let data = t.innerHTML.split(";");

	fWidth  = parseInt(dataElt(data, 0));
	fHeight = parseInt(dataElt(data, 1));

	// jusque là j'ai copié la fonction précédente
	//  c'est ici que tout recommence...

	let sets = {};
	let l = (data.length - 3) / 3; // les données reçues sont des lots de 3 informations + 2 mesures pour la taille du plateau

	let x, y, value;
	for (let i = 0; i < l; i++) {
		x = parseInt(dataElt(data, i * 3 + 2));
		y = parseInt(dataElt(data, i * 3 + 3));
		value =      dataElt(data, i * 3 + 4);
		sets[x * 10 + y] = value;
	}

	creerPlateau(sets, fWidth, fHeight);

}