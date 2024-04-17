function getCategories(name) {
	alert(algs[name]["categories"]);
}

function situationHTML(situation) {

	let sit = '<table class = "situation">';

	for (var c = 0; c < situation.length; c++) {
		if (c % 3 === 0)
			sit += "<tr>";
		sit += '<th class = "cls"></th>'.replace("cls", situation[c]);
		if (c % 3 === 2)
			sit += "</tr>";
	}

	sit += "</table>";

	return sit;

}