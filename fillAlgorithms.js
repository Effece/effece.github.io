const table = document.getElementById("list");
var alg, txt, sit, but;

for (const algInd of Object.keys(algs)) {

	alg = algs[algInd];

	txt = '<tr><th>situationRep</th><th>nameRep</th><th>mainAlgorithmRep</th><th>buttonsRep</th></tr>';

	sit = situationHTML(algs[algInd]["situation"]);
	but = buttonHTML(algs[algInd]);
	
	txt = txt.replace("situationRep", sit).replace("nameRep", alg["name"]).replace("mainAlgorithmRep", alg["mainAlgorithm"]).replace("buttonsRep", but);
	table.innerHTML += txt;

}

function updateMoreInfos(elt, name, id) {

	let value = algs[name][elt.value];
	
	let txt = "";
	if (Array.isArray(value)) {
		for (const e of value)
			txt += e + "<br>";
		txt = txt.slice(0, txt.length - 4);
	} else if (typeof value === "object") {
		for (const k of Object.keys(value))
			txt += k + ": " + value[k].toString() + "<br>";
		txt = txt.slice(0, txt.length - 4);
	} else
		txt = value.toString();

	document.getElementById(id).innerHTML = txt;

}