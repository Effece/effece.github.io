function matrice() {
	let nn = n();
	let m = [];
	for (let i = 0; i < nn; i++) {
		m[i] = [];
		for (let j = 0; j < nn; j++)
			m[i][j] = 0;
	}
	return m;
}

function identite() {
	let m = matrice();
	for (let i = 0; i < n(); i++)
		m[i][i] = 1;
	return m;
}

function elementaire(k, l) {
	let m = matrice();
	m[k][l] = 1;
	return m;
}
