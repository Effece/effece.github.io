var mdpInuPrev = false;

var user = sessionStorage.getItem("username");
if (user !== null) {
	//sessionStorage.removeItem("username");
	//alert("Vous avez été déconnecté.");
	if (confirm(`Vous êtes déjà connecté sous le nom de ${user}. Rester connecté ?`))
		document.login.submit();
	sessionStorage.removeItem("username");
}

function mdpInutile() {
	if (mdpInuPrev) return;
	mdpInuPrev = true;
	alert(`Rappel :
Un mot de passe ici ne sert à rien !
Oui, cette entrée sert uniquement à mettre une entrée "mot de passe", car après tout, il faut mettre tout ce que l'on peut sur ce projet. Après réflexion, il est vrai que les mots de passe convenaient parfaitement à ce site.
Ne vous attendez pas à disposer d'un nom d'utilisateur unique. Chaque utilisateur peut utiliser l'identifiant qu'il souhaite.`);
}

function genMDP() {
	let t = '';
	/* code inexistant, pour l'instant ? */
	t = 'UD19/.H?W5%l5';
	return t;
}

function connexion() {

	let un, pw;
	let username = document.getElementById("username");
	let password = document.getElementById("password");
	if (username.value === "") {
		alert("Merci de saisir un nom d'utilisateur !");
		return;
	}
	un = username.value;
	if (password.value === "") {
		pw = genMDP();
		alert(`Puisque vous n'avez pas saisi de mot de passe, il a automatiquement été défini comme : ${pw}`);
	} else pw = password.value;

	sessionStorage.setItem("username", un);

	document.login.submit();

}