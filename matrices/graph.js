function matriceHTML(m) {
	let nn = n();
	txt = "<table><tbody>";
	for (let i = 0; i < nn; i++) {
		txt += "<tr>";
		for (let j = 0; j < nn; j++)
			txt += "<td>" + m[i][j].toString() + "</td>";
		txt += "</tr>";
	}
	txt += "</tbody></table>";
	return txt;
}

function maj() {
	let nn = n();

	let can = document.getElementById("canvas");
	can.innerHTML = matriceHTML(mcalc());
	let antican = document.getElementById("anticanvas");
	antican.innerHTML = matriceHTML(icalc());
	
	let testvas = document.getElementById("testvas");
	let txt = "<table><tbody>";
	for (let i = 0; i < nn; i++) {
		txt += "<tr>";
		for (let j = 0; j < nn; j++)
			txt += '<td><input type = "number" placeholder = "_" class = "testInp" /></td>';
		txt += "</tr>";
	}
	txt += "</tbody></table>";
	testvas.innerHTML = txt;

	let resvas = document.getElementById("resvas");
	resvas.innerHTML = "";
}

function reset() {
	setMcalc(melange(identite()));
	setIcalc(identite());
	maj();
}