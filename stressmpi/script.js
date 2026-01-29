function countdown(date) {
	return (function() {
		let evt = new Date(date).getTime();
		let cur = new Date().getTime();
		let d = evt - cur;

		if (d < 0)
			return 0;

		let j = Math.floor(d / (1000 * 60 * 60 * 24));
		let h = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let m = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
		let s = Math.floor((d % (1000 * 60)) / 1000);
		let ms = Math.floor(d % 1000);

		return `${j}j ${h}h ${m}m ${s}s ${ms}ms`;
	});
}

function pourcentage(dateA, dateB) {
	return (function() {
		let deb = new Date(dateA).getTime();
		let fin = new Date(dateB).getTime();
		let cur = new Date().getTime();

		if (cur > fin)
			return "100.00%";

		let p = (cur - deb) / (fin - deb);
		return `${(100 * p).toFixed(2)}%`;
	});
}