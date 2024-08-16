function unofficialScramble() {
	/*
	U D F B R L
	25 moves
	after a letter, equiprobability of: "[nothing]", "'", "2"
	a letter can't appear again after changing rotation axis
	*/

	let moves = ['U', 'D', 'F', 'B', 'R', 'L'], symbols = ["", "'", "2"];

	let current = random(5), previous = - 2, before = - 4, sequence = "";
	
	for (let i = 0; i < 25; i++) {

		sequence += moves[current] + symbols[random(2)] + " ";
		
		before = previous;
		previous = current;

		if (Math.trunc(previous / 2) === Math.trunc(before / 2)) {
			current = random(3);
			if (current >= Math.min(previous, before))
				current += 2;
		} else {
			current = random(4);
			if (current >= previous)
				current += 1;
		}
		
	}

	sequence = sequence.slice(0, - 1);
	return sequence;

}

function random(max) {
	return Math.round(Math.random() * max);
}