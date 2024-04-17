const table = document.getElementById("list");
var alg, txt, sit;

for (var algInd in algs) {
	alg = algs[algInd];
	txt = '<tr><th>situationRep</th><th>nameRep</th><th>mainAlgorithmRep</th><th>buttonsRep</th></tr>';
	sit = situationHTML(algs[algInd]["situation"]);
	txt = txt.replace("situationRep", sit).replace("nameRep", alg["name"]).replace("mainAlgorithmRep", alg["mainAlgorithm"]);
	table.innerHTML += txt;
}