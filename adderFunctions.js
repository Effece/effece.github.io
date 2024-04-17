function loadFace() {

	let inputs = document.getElementsByClassName("faceInput");
	let situation = Array(inputs.length).fill("");
	for (let i = 0; i < inputs.length; i++)
		situation[i] = inputs[i].value;
	document.getElementById("face").innerHTML = situationHTML(situation);

}

function resetFaceInputs() {

	let txt = "";

	for (let i = 0; i < 9; i++) {
		txt += '<input type = "text" class = "faceInput" value = "yf" />';
		if (i % 3 === 2)
			txt += "<br>";
	}

	document.getElementById("input").innerHTML = txt;

}

function submit() {
	
}