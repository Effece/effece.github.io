var form = document.getElementById("acces");

var username = sessionStorage.getItem("username");

// si l'utilisateur n'est pas connecté, il est renvoyé sur la page de connexion
if (username === null) {
	form.action = "connexion.html";
	document.acces.submit();
}

// ce code ne devrait pas être utilisé si l'utilisateur n'est pas connecté

document.getElementById("username").value = username;
document.getElementById("cle").value = "3141592"; // certes, elle n'est pas très bien cachée

form.action = "jeu.php";
document.acces.submit();

/*

Ce script est exécuté dès l'ouverture de la page et renvoie quasi instantanément sur une autre page.
Le seul moyen que j'ai trouvé d'exploiter des données recueillies en JavaScript avec du PHP était d'utiliser un formulaire comme celui-ci.

Le nom d'utilisateur est stocké sur le sessionStorage en JavaScript. Cependant, j'exécute les codes JavaScript après ceux PHP.
Sur cette page, le nom d'utilisateur est récupéré puis envoyé sur une autre page par un formulaire.

La "clé" est une mesure de sécurité pour s'assurer que jeu.php est utilisé uniquement depuis cette page.

*/