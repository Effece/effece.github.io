function melange(mp) {
	// pour garantir une matrice inversible, il faut partir de In
	let m = mp;
	let prof = 10 + genInt(10);
	for (let i = 0; i < prof; i++) {
		let op = genInt(3);
		let oe;
		switch (op) {
			case 0: oe = permutation();
			case 1: oe = dilatation();
			case 2: oe = transvection();
		}
		m = prod(oe, m);
	}
	return m;
}