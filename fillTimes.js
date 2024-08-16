function fill(best) {

	let singles = document.getElementById("singles");
	let sessions = document.getElementById("sessions");

	if (best) {
		sTimes.sort((a, b) => a["time"] - b["time"]);
		sesTimes.sort((a, b) => a["avg"] - b["avg"]);
	}

	let len;

	if (best)
		len = 20;
	else
		len = sTimes.length;

	let single, session, link;

	for (let i = 0; i < len; i++) {

		single = sTimes[i];
		if (single["link"] === "")
			link = `${formatTime(single["time"])}`;
		else
			link = `<a href = "${single["link"]}">${formatTime(single["time"])}</a>`;
		singles.innerHTML += `<tr>
			<th>${(i + 1).toString()}</th>
			<th>${single["date"]}</th>
			<th title = "${single["notes"].join("\n") + `\n\nMethod: ${single["method"]}.\nFirst face color: ${single["firstFace"]}.`}">
				${link}</th>
			<th>${single["scramble"]}</th></tr>`;

	}

	if (best)
		len = 5;
	else
		len = sesTimes.length;

	for (let i = 0; i < len; i++) {

		session = sesTimes[i];
		if (session["link"] === "")
			link = `${formatTime(session["avg"])}`;
		else
			link = `<a href = "${session["link"]}">${formatTime(session["avg"])}</a>`;
		sessions.innerHTML += `<tr>
			<th>${(i + 1).toString()}</th>
			<th>${session["date"]}</th>
			<th title = "${session["notes"].join("\n")}">
				${link}</th>
			<th>${session["times"].join("<br>")}</th>
			<th>${session["scrambles"].join("<br>")}</th></tr>`;

	}

}

function formatTime(time) {

	let t = time.toString();
	if (parseInt(time) === time)
		t += ".00";
	else if (parseInt(time * 10) === time * 10)
		t += "0";

	return t;

}