/*var n = 4;
var lambdaMax = 10;
var prof = 15;
var mcalc, icalc;*/


let storage = localStorage;


storage.setItem("n", 4);
storage.setItem("lambdaMax", 5);
storage.setItem("mcalc", []);


function n() { return storage.getItem("n"); }

function lambdaMax() { return storage.getItem("lambdaMax"); }

function mcalc() { return JSON.parse(storage.getItem("mcalc")); }

function icalc() { return JSON.parse(storage.getItem("icalc")); }


function setN(newN) { storage.setItem("n", newN); }

function setLambdaMax(newLambdaMax) { storage.setItem("lambdaMax", newLambdaMax); }

function setMcalc(newMcalc) { storage.setItem("mcalc", JSON.stringify(newMcalc)); }

function setIcalc(newIcalc) { storage.setItem("icalc", JSON.stringify(newIcalc)); }


function genInt(mx) {
	return Math.floor(Math.random() * mx);
}

function genInd() {
	return genInt(n());
}

function genLambda() {
	let nb = genInt(2*lambdaMax())-lambdaMax();
	if (nb === 0) return 1;
	return nb;
}