const box = document.getElementById("list");
var alg, txt, sit;
var allKeys = Object.keys(algs);
var ind = 0;

alg = algs[allKeys[ind]];
refreshBox();

function refreshBox() {

	txt = '<tr><th>situationRep</th><th>nameRep</th><th>mainAlgorithmRep</th></tr>';

	sit = situationHTML(alg["situation"]);

	txt = txt.replace("situationRep", sit).replace("nameRep", alg["name"]).replace("mainAlgorithmRep", alg["mainAlgorithm"]);
	box.innerHTML = txt;

}

function moveIndex(value) {
	ind += value;
	// ind %= allKeys.length;
	if (ind < 0)
		ind += allKeys.length;
	else if (ind >= allKeys.length)
		ind -= allKeys.length;
	alg = algs[allKeys[ind]];
	refreshBox();
}

function randomAlg() {
	ind = Math.floor(Math.random() * allKeys.length);
	alg = algs[allKeys[ind]];
	refreshBox();
}

function customName(name) {
	let tInd = - 1;
	for (const algInd of allKeys)
		if (allKeys[algInd] === name)
			tInd = algInd;
	if (tInd !== - 1) {
		ind = tInd;
		alg = algs[name];
		refreshBox();
	}
}

function customIndex(index) {
	if (0 <= index < allKeys.length) {
		ind = index;
		alg = algs[allKeys[ind]];
		refreshBox();
	}
}