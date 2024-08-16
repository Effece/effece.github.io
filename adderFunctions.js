function loadFace() {

	let inputs = document.getElementsByClassName("faceInput");
	let situation = Array(inputs.length).fill("");
	for (let i = 0; i < inputs.length; i++)
		situation[i] = inputs[i].value;
	document.getElementById("face").innerHTML = situationHTML(situation);

}

function resetFaceInputs(content) {

	let txt = "";

	for (let i = 0; i < 9; i++) {
		txt += `<input type = "text" class = "faceInput" value = "${content}" />`;
		if (i % 3 === 2)
			txt += "<br>";
	}

	document.getElementById("input").innerHTML = txt;

}

function submitFunc(download) {
	
	/*
	let form = document.getElementsByName("adder");
	let formData = new FormData(form[0]);
	console.log(formData);
	alert("a");
	*/

	let name = document.getElementsByName("name")[0].value;
	let dict = {};

	dict["name"] = name;

	let otherNames = document.getElementsByName("otherNames");
	dict["alternativeNames"] = [];
	for (const n of otherNames)
		if (n.value)
			dict["alternativeNames"].push(n.value);

	let categs = document.getElementsByName("categs");
	dict["categories"] = [];
	for (const c of categs)
		if (c.value)
			dict["categories"].push(c.value);

	let sit = document.getElementsByClassName("faceInput");
	dict["situation"] = [];
	for (const s of sit)
		dict["situation"].push(s.value);

	dict["mainAlgorithm"] = document.getElementsByName("algorithm")[0].value;

	let otherAlgs = document.getElementsByName("otherAlgorithms");
	dict["otherAlgorithms"] = [];
	for (const a of otherAlgs)
		if (a.value)
			dict["otherAlgorithms"].push(a.value);

	dict["learnt"] = parseInt(document.getElementsByName("learnt")[0].value);

	dict["evaluation"] = {};
	let evs = ["alg", "r", "mm", "as", "bf", "sp", "pr", "u", "gh", "hv", "c"];
	for (const ev of evs)
		dict["evaluation"][ev] = parseInt(document.getElementsByName("ev" + ev)[0].value);

	dict["moves"] = parseInt(document.getElementsByName("moves")[0].value);
	dict["cycleLength"] = parseInt(document.getElementsByName("cycleLength")[0].value);
	dict["mirror"] = document.getElementsByName("mirror")[0].value;

	dict["notes"] = document.getElementsByName("additional")[0].value.split('\n');

	if (name in algs)
		for (const e of Object.keys(dict)) {
			if (e in algs[name]) {
				if (confirm(`Attribute ${e} is already set to:\n${algs[name][e]}\nChange it to:\n${dict[e]}`))
					algs[name][e] = dict[e];
			} else
				algs[name][e] = dict[e];
		}
	else
		algs[name] = dict;

	if (download)
		download();

}

function download() {

	let file = document.createElement('a');
	file.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent("var algs = " + JSON.stringify(algs, null, 4)));
	file.setAttribute('download', 'algorithms.json');

	document.body.appendChild(file);
	file.click();
	document.body.removeChild(file);

}

function sortAlgs() {

	let keys = Object.keys(algs);
	keys.sort();

	let temp = {};
	for (const alg of keys)
		temp[alg] = algs[alg];

	algs = temp;

}