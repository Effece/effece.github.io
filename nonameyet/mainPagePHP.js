/*

var actus = [
	["Nouvelle actualité à venir !", "Eh oui, sous peu, une nouvelle actualité va arriver, et elle ne dépend que de vous.", "La Direction"],
	["Le génie de François", "François est un être fort intelligent. Si ses pensées et réfléxions diverses vous intéressent, n'hésitez pas à le contacter.", "La Direction"],
	["Nouvelle fonctionnalité : les actualités", "Désormais, vous pourrez partager des nouvelles sur ce site.", "La Direction"],
	["Ouverture", "Le site du <b>Jeu Sans Nom</b> a ouvert. Merci beaucoup de votre coopération.", "La Direction"],
	["Erreur potentielle", "Si vous voyez ce message, c'est probablement qu'il y a eu une erreur.", "La Direction"]
];
var actusCode = ["", "", "", "", ""];
updActus(actus);

Automatisé en PHP.

*/

var user = sessionStorage.getItem("username");
if (user !== null)
	document.getElementById("actAuteur").value = user;

function ajtActu() {

	let titre  = document.getElementById("actTitre");
	let cont   = document.getElementById("actCont");
	let auteur = document.getElementById("actAuteur");

	if (titre.value === "" || cont.value === "" || auteur.value === "") {
		alert("Vous n'avez pas spécifié des champs requis.");
		return;
	}

	/*

	for (var i = actus.length - 1; i > 0; i--)
		actus[i] = actus[i - 1];

	actus[0] = [titre.value, cont.value, auteur.value];

	updActus(actus);

	A modifier.

	*/

	document.actualite.submit();

}

function updActus(l) {

	let actualites = document.getElementById("modif");
	actualites.innerHTML = "";
	for (var i = 0; i < l.length; i++) {
		actusCode[i] = "<div class = \"article\"><h2>" + l[i][0] + "</h2><p>" + l[i][1].replaceAll('\n', '<br>') + "</p><p class = \"auteur\">" + l[i][2] + "</p></div>";
		actualites.innerHTML += actusCode[i];
	}

}