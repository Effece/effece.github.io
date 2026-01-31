function cts(nb, long) {
	// Convertir un entier en chaîne de long caractères (complète avec des 0)
	let txt = `${nb}`;
	while (txt.length < long)
		txt = "0" + txt;
	return txt;
}

function ctdwdata(date) {
	// Dictionnaire des durées jusqu'à date
	let evt = new Date(date).getTime();
	let cur = new Date().getTime();
	let d = evt - cur;

	if (d < 0)
		return 0;

	return {
		"se": Math.floor(d / (1000 * 60 * 60 * 24 * 7)),
		"j": Math.floor(d / (1000 * 60 * 60 * 24)),
		"h": Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
		"m": Math.floor((d % (1000 * 60 * 60)) / (1000 * 60)),
		"s": Math.floor((d % (1000 * 60)) / 1000),
		"ms": Math.floor(d % 1000)
	};
}

function countdown(date) {
	return (function() {
		let res = ctdwdata(date);

		if (res == 0)
			return 0;

		let j = res["j"];
		let h = res["h"];
		let m = res["m"];
		let s = res["s"];
		let ms = res["ms"];
		return `${cts(j, 1)}j ${cts(h, 2)}h ${cts(m, 2)}m ${cts(s, 2)}s ${cts(ms, 3)}ms`;
	});
}

function countdownw(date) {
	// Countdown en semaines
	return (function() {
		let res = ctdwdata(date);

		if (res == 0)
			return 0;

		let se = res["se"];
		return `${se} semaines`;
	});
}

function pourcentage(dateA, dateB) {
	return (function() {
		let deb = new Date(dateA).getTime();
		let fin = new Date(dateB).getTime();
		let cur = new Date().getTime();

		if (cur > fin)
			return "100.00000%";

		let p = (cur - deb) / (fin - deb);
		return `${(100 * p).toFixed(5)}%`;
	});
}

var vacs = [1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0];
var hpj = {
	"m": [[],[8,11],[10,12,13,15],[8,12],[14,17]],
	"p": [[8,10,15,17],[14,17],[],[15,17],[]],
	"i": [[10,12,13,15],[],[8,10],[],[10,12]],
	"f": [[],[11,13],[],[],[]],
	"a": [[],[],[],[13,15],[]]
}; // horaires par jours

function semscours(date) {
	return (function () {
		let res = ctdwdata(date);
		let t = 0;
		for (let i = 0; i < res["se"]; i++)
			t += 1-vacs[i];
		return `${t} semaines`;
	});
}

function heures(mat, date) {
	return (function() {
		let res = ctdwdata(date);
		let t = 0;
		for (let i = 0; i < res["j"] + 1; i++) {
			if (vacs[Math.floor(i/7)] == 1)
				continue; // en vacances
			let jour = 6 - i%7;
			if (jour >= 5)
				continue; // samedi ou dimanche
			let hors = hpj[mat][jour];
			let ind = hors.length;
			if (i == res["j"]) { // aujourd'hui
				let hr = new Date().getHours();
				while (ind > 0 && hors[ind] > hr) {
					ind--;
					if (ind % 2 == 0)
						t += hors[ind+1] - hors[ind];
				}
				if (ind % 2 == 1)
					t += hors[ind+1] - hr;
			} else { // jour complet
				ind -= 2;
				while (ind >= 0) {
					t += hors[ind+1] - hors[ind];
					ind -= 2;
				}
			}
		}
		return `${t}h`;
	});
}