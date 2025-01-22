function suite() {
	
	document.getElementById("username").value = username;
	document.getElementById("cle").value = cle;
	if (document.getElementById("coup").value === "") {
		let userNum = document.getElementById('usernum');
		let num = parseInt(userNum.innerHTML);
		let p = document.getElementsByClassName(`p${num}`)[0];
		let r, c;
		r = parseInt(p.id[0]);
		c = parseInt(p.id[1]);
		let coords = [r, c];
		document.getElementById("coup").value = getReach(coords)[0].id;
		document.getElementById("acoup").value = `${r}${c}`;
		// si le joueur n'a rien sélectionné / ses propositions n'étaient pas valides, il joue la première possibilité trouvée
	}

	document.formulaire.submit();

}

var cont = document.getElementById("formCont");
var contTxt = cont.innerHTML.split(';');
var username = contTxt[0];
var cle = contTxt[1]; // bon...
cont.innerHTML = "";

//var date = new Date();
//var t1 = date.getTime();

setTimeout(suite, 10000);

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

function reach(c0, c1) { // c0 acoords c1 coords (à modifier)
	return ([0, 1].includes(Math.abs(c0[0] - c1[0]))) && ([0, 1].includes(Math.abs(c0[1] - c1[1])));
}

function getReach(coords) {

	width = 5;
	height = 5;

	let elt, res;
	res = [];
	for (let i = 0; i < height; i++) for (let j = 0; j < width; j++) {
		elt = document.getElementById(`${i}${j}`);
		if (!elt.className.includes('croix') && !(coords[0] === i && coords[1] === j) && reach(coords, [i, j]))
			res.push(elt); // désolé je pouvais difficilement faire autrement
	}

	return res;

}