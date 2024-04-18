function deleteElement() {
	let name = document.getElementsByName("name")[0].value;
	if (name in algs)
		delete algs[name];
	else
		alert("This name doesn't exist in the sheet.");
}

function deleteAttribute() {
	let name = document.getElementsByName("name")[0].value;
	let attribute = document.getElementsByName("attribute")[0].value;
	if (name in algs)
		if (attribute in algs[name])
			delete algs[name][attribute];
		else
			alert("This attribute doesn't exist for this algorithm.");
	else
		alert("This name doesn't exist in the sheet.");
}

function updateAttribute() {
	let name = document.getElementsByName("name")[0].value;
	let attribute = document.getElementsByName("attribute")[0].value;
	let newValue = document.getElementsByName("newValue")[0].value;
	if (name in algs) {
		algs[name][attribute] = eval(newValue);
		if (attribute === "name") {
			// need to update the key
			algs[eval(newValue)] = algs[name];
			delete algs[name];
		}
	} else
		alert("This name doesn't exist in the sheet.");
}