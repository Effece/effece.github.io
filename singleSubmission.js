function submitFunc(download) {

	let dict = {};

	dict["time"] = parseFloat(document.getElementsByName("time")[0].value);
	dict["date"] = document.getElementsByName("date")[0].value;
	dict["link"] = document.getElementsByName("link")[0].value;
	dict["scramble"] = document.getElementsByName("scramble")[0].value;
	dict["method"] = document.getElementsByName("method")[0].value;
	dict["firstFace"] = document.getElementsByName("firstFace")[0].value;
	dict["notes"] = document.getElementsByName("additional")[0].value.split('\n');

	sTimes.push(dict);

	if (download)
		download();

}

function download() {

	let file = document.createElement('a');
	file.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent("var sTimes = " + JSON.stringify(sTimes, null, 4)));
	file.setAttribute('download', 'singleTimes.json');

	document.body.appendChild(file);
	file.click();
	document.body.removeChild(file);

}