function updCan(elt) {

	let v = elt.value * 400 / 9; // taille du div / longueur max
	let can = document.getElementById("can");
	let presets;

	if (elt.id === "width") {
		can.style.width  = v.toString() + "px";
		presets = document.getElementsByClassName("preWidth");
	}

	else if (elt.id === "height") {
		can.style.height = v.toString() + "px";
		presets = document.getElementsByClassName("preHeight");
	}

	for (let i = 0; i < presets.length; i++) {
		presets[i].max = elt.value;
		if (presets[i].value > elt.value) presets[i].value = elt.value;
	}

	return;

}

function verValue(elt) {

	let cls = elt.className.split(' ')[1] === 'preWidth'? 'width' : 'height';
	let max = document.getElementById(cls).value;
	elt.value = Math.min(max, elt.value);

	return;

}

function updNbPresets(elt) {

	let maxW = document.getElementById("width").value;
	let maxH = document.getElementById("height").value;
	let curW = document.getElementsByClassName("preWidth");
	let curH = document.getElementsByClassName("preHeight");
	let curC = document.getElementsByClassName("txtPreset");

	let anciennesVW = [];
	anciennesVW.length = elt.value;
	anciennesVW.fill(1);
	let anciennesVH = [];
	anciennesVH.length = elt.value;
	anciennesVH.fill(1);
	let anciensCont = [];
	anciensCont.length = elt.value;
	anciensCont.fill('croix');

	for (let i = 0; i < Math.min(elt.value, curW.length); i++) {
		anciennesVW[i] = curW[i].value;
		anciennesVH[i] = curH[i].value;
		anciensCont[i] = curC[i].value;
	}

	let presets = document.getElementById("jevaisdisparaitre");
	let t = '';
	for (let j = 0; j < elt.value; j++)
		t += `<input type = "number" class = "nbPreset preWidth"  onchange = "verValue(this)" min = "0" max = "${maxW}" value = "${anciennesVW[j]}" name = "custEltX${j}" />
			  <input type = "number" class = "nbPreset preHeight" onchange = "verValue(this)" min = "0" max = "${maxH}" value = "${anciennesVH[j]}" name = "custEltY${j}" />
			  <input type = "text" class = "txtPreset contenu${j}" value = "${anciensCont[j]}" maxlength = "5" name = "custEltV${j}" /><br>`;
	presets.innerHTML = t;

	return;

}