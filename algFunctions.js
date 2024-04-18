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

function buttonHTML(alg) {

	let listName = "list" + alg["name"];
	let txt = `<select name = "${listName}" onchange = "updateMoreInfos(this, '${alg["name"]}', '${listName}Span');">`;
	
	for (const att of Object.keys(alg))
		if (alg[att])
			txt += `<option value = "${att}">${prettyVarName(att)}`;
	
	txt += `</select><br><span class = "moreInfos" id = "${listName}Span"></span>`;

	return txt;

}

function prettyVarName(name) {

	let newName = "";
	for (const l of name)
		if (l === l.toUpperCase())
			newName += " " + l.toLowerCase();
		else
			newName += l;
	newName = newName[0].toUpperCase() + newName.slice(1);

	return newName;

}