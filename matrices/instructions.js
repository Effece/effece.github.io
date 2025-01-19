function corrLigne(txt) {
	let i = parseInt(txt.substring(1));
	return mcalc()[i];
}

document.getElementById("ch1").addEventListener('keyup', (event) => {
	if (event.key !== "Enter") return;
	ch1event();
});

function ch1event() {
	let mclc = mcalc();

	let txt = document.getElementById("ch1").value;
	txt.replace("- ", "+ -");
	let instr = txt.split(' ');
	
	try {
		let rowI = parseInt(instr[0].substring(1));
		let row = mclc[rowI].slice();

		let ops = [];

		// enlever les + (inutiles, sous-entendus)
		let i = 0;
		while (i < instr.length) {
			if (instr[i] === "+")
				instr.splice(i);
			else
				i += 1;
		}

		// acquisition
		let mats = [];
		for (let i = 2; i < instr.length; i++) {
			let ins = instr[i].split("*");
			if (ins.length === 2)
				mats.push(scalaireLigne(parseInt(ins[0]), corrLigne(ins[1])));
			else
				mats.push(corrLigne(ins[0]));
		}

		// sommes
		let m1 = mats[0];
		mats.splice(0);
		while (mats.length > 0) {
			let m2 = mats[0];
			mats.splice(0);
			m1 = sommeLignes(m1, m2);
		}

		if (instr[1] === "<--")
			mclc[rowI] = mats;
		else {
			mclc[rowI] = mats;
			mclc[parseInt(instr[2].slice(1))] = row;
		}
	} catch (error) {
		alert(error);
	}

	setMcalc(mclc);
}

document.getElementById("ch2").addEventListener('keyup', (event) => {
	if (event.key !== "Enter") return;
	ch2event();
});

function ch2event() {
	let newN = document.getElementById("ch2").value;
	if (newN < 1) return;

	setN(newN);
	reset();
}

document.getElementById("ch3").addEventListener("keyup", (event) => {
	if (event.key !== "Enter") return;
	ch3event();
});

function ch3event() {
	let newLambda = document.getElementById("ch3").value;
	if (newLambda < 1) return;

	setLambdaMax(newLambda);
	reset();
}

function verifier() {
	let nn = n();

	let inps = document.getElementsByClassName("testInp");
	let m = matrice();
	for (let i = 0; i < inps.length; i++)
		m[Math.floor(i / nn)][i % nn] = parseInt(inps[i].value);

	let res = prod(m, mcalc());
	/*let ide = identite();
	for (let i = 0; i < nn; i++)
		for (let j = 0; j < nn; j++)
			if (res[i][j] !== ide[i][j]) {
				alert("Faux.");
				return;
			}
	alertt("Correct.");*/
	let resvas = document.getElementById("resvas");
	resvas.innerHTML = matriceHTML(res);
}
