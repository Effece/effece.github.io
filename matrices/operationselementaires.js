function permutation() {
	let nn = n();
	let m = identite();
	for (let i = 0; i < nn-1; i++) {
		let rnd = genInt(nn-i);
		let tmp = m[nn-i-1];
		m[nn-i-1] = m[rnd];
		m[rnd] = tmp;
	}
	return m;
}

function dilatation() {
	let lambda = genLambda();
	let i = genInd();
	let m = somme(identite(), scalaire(lambda-1, elementaire(i, i)));
	return m;
}

function transvection() {
	let lambda = genLambda();
	let i = genInd();
	let j = genInd();
	while (j === i)
		j = genInd();
	let m = somme(identite(), scalaire(lambda, elementaire(i, j)));
	return m;
}