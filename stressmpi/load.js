function setUpdate(eltfunc, eltid) {
	let x = setInterval(function() {
		let res = eltfunc();
		if (res == 0)
			clearInterval(x);
		document.getElementById(eltid).innerHTML = res;
	}, 10);
}

const obj = document.getElementById("infos");

for (let [n, infs] of Object.entries(infos)) {
	if (infs.titre == null) {
		let txt = `<tr class = ${infs.class}> <td><label>${infs.label}</label></td> <td id = ${n}> - </td> </tr>`;
		obj.innerHTML += txt;
		if (infs.func !== null)
			setUpdate(infs.func, n);
	} else {
		obj.innerHTML += `<tr class = ${infs.class}> <td colspan = 2><label>${infs.titre}</label></td> </tr>`;
	}
}