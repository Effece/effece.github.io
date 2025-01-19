// on suppose toutes les tailles cohérentes

function somme(m1, m2) {
	let nn = n();
	let m = matrice();
	for (let i = 0; i < nn; i++)
		for (let j = 0; j < nn; j++)
			m[i][j] = m1[i][j] + m2[i][j];
	return m;
}

function prod(m1, m2) {
	let nn = n();
	let m = matrice();
	for (let i = 0; i < nn; i++)
		for (let j = 0; j < nn; j++) {
			let s = 0;
			for (let k = 0; k < nn; k++) {
				if (m1[i][k] != 0 && m2[k][j] != 0)
					s += m1[i][k] * m2[k][j];
			}
			m[i][j] = s;
		}
	return m;
}

function scalaire(k, mp) {
	let nn = n();
	let m = matrice();
	for (let i = 0; i < nn; i++)
		for (let j = 0; j < nn; j++)
			m[i][j] = k * mp[i][j];
	return m;

}

function sommeLignes(l1, l2) {
	let l = [];
	for (let j = 0; j < n(); j++)
		l[j] = l1[j] + l2[j];
	return l;
}

function scalaireLigne(k, lp) {
	let l = [];
	for (let i = 0; i < n(); i++)
		l[i] = k * lp[i];
	return l;
}