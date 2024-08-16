function changeNb(nb) {

	let newNb = parseInt(nb);
	let field = document.getElementById("times");

	let v;
	field.innerHTML = "";
	for (let i = 0; i < newNb; i++) {
		v = (i + 1).toString();
		field.innerHTML += `<fieldset><legend>Time #${v}</legend>
		<label>Time:</label><input type = "number" name = "time" step = "0.01" /><br>
		<label>Scramble:</label><input type = "text" name = "scramble" value = "${unofficialScramble()}" /><br>
		<label>Method:</label><input type = "text" name = "method" value = "CFOP" /><br>
		<label>First face color:</label><input type = "text" name = "firstFace" value = "white" /><br>
		</fieldset>`;
	}

}

function submitFunc(download) {

	let dict = {};

	dict["number"] = parseInt(document.getElementsByName("nb")[0].value);
	dict["date"] = document.getElementsByName("date")[0].value;
	dict["link"] = document.getElementsByName("link")[0].value;
	document.getElementsByName("link")[0].value = null;
	
	dict["times"] = [];
	dict["scrambles"] = [];
	dict["methods"] = [];
	dict["firstFaces"] = [];
	let times, time, scrambles, scramble, methods, method, firstFaces, firstFace, solve;
	times = document.getElementsByName("time");
	scrambles = document.getElementsByName("scramble");
	methods = document.getElementsByName("method");
	firstFaces = document.getElementsByName("firstFace");
	solve = {
		"time": 0,
		"date": dict["date"],
		"link": dict["link"],
		"scramble": "",
		"method": "",
		"firstFace": "",
		"notes": ["Part of a session."]
	};
	
	for (let i = 0; i < dict["number"]; i++) {

		time = parseFloat(times[i].value);
		dict["times"].push(time);
		solve["time"] = time;
		times[i].value = null;

		scramble = scrambles[i].value;
		dict["scrambles"].push(scramble);
		solve["scramble"] = scramble;
		scrambles[i].value = unofficialScramble();

		method = methods[i].value;
		dict["methods"].push(method);
		solve["method"] = method;
		methods[i].value = "CFOP";

		firstFace = firstFaces[i].value;
		dict["firstFaces"].push(firstFace);
		solve["firstFace"] = firstFace;
		firstFaces[i].value = "white";

		sTimes.push(structuredClone(solve));

	}
	
	dict["notes"] = document.getElementsByName("additional")[0].value.split('\n');
	document.getElementsByName("additional")[0].value = null;

	// average
	let nAvg = dict["times"].reduce((partialSum, a) => partialSum + a, 0);
	let avg = nAvg - Math.max(...dict["times"]) - Math.min(...dict["times"]);
	avg = Math.round(avg / (dict["number"] - 2) * 100) / 100;
	nAvg = Math.round(nAvg / dict["number"] * 100) / 100;
	dict["avg"] = avg;
	dict["nAvg"] = nAvg;
	alert(`Performance:\nAverage: ${avg.toString()};\nAverage with all times: ${nAvg.toString()}.`);

	sesTimes.push(dict);

	if (download)
		download();

}

function download() {

	let fileA = document.createElement('a');
	fileA.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent("var sesTimes = " + JSON.stringify(sesTimes, null, 4)));
	fileA.setAttribute('download', 'sessionTimes.json');

	document.body.appendChild(fileA);
	fileA.click();
	document.body.removeChild(fileA);

	let fileB = document.createElement('a');
	fileB.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent("var sTimes = " + JSON.stringify(sTimes, null, 4)));
	fileB.setAttribute('download', 'singleTimes.json');
	
	document.body.appendChild(fileB);
	fileB.click();
	document.body.removeChild(fileB);

}