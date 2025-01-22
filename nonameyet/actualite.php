<?php

$host = 'localhost:3306';
$user = 'root';
$pw   = '';

$mysqli = new mysqli($host, $user, $pw, 'jeusansnom');

if ($mysqli->connect_error) {
	die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}

$results = $mysqli->query("SELECT * FROM actualite");

$iMax = 0;
while ($rowMax = $results->fetch_assoc()) $iMax++;

$results->free();

$results = $mysqli->query("SELECT * FROM actualite");

$txt = '';

$i = 0;
while($row = $results->fetch_assoc()) {
	$i++;
	if ($i > $iMax - 5)
		$txt = '<div class = "article"><h2>' . $row['titre'] . '</h2><p>' . $row['cont'] . '</p><p class = "auteur">' . $row['auteur'] . '</p></div>' . $txt;
	// modèle : <div class="article"><h2>Titre</h2><p>Contenu</p><p class="auteur">Auteur</p></div>
}

echo $txt;

$results->free();

$mysqli->close();

// OH CA MARCHE !!!

/*

J'ai eu beaucoup de difficultés pour installer PHP, MySQL et activer MySQLi...
Mon site demande un serveur PHP (j'utilise la dernière version, PHP8), un serveur MySQL avec une base de données nommée `jeusansnom`, dans laquelle sont contenues plusieurs tables que je développerai ci-après lorsque j'aurai fini le site. S'il n'y a pas de paragraphe après celui-ci, c'est que j'ai oublié.

FICHIERS SQL EXECUTES

 1 -

USE `jeusansnom`;

INSERT INTO actualite (id, titre, cont, auteur)
VALUES (1, "Nouvelle actualité à venir !", "Eh oui, sous peu, une nouvelle actualité va arriver, et elle ne dépend que de vous.", "La Direction");
INSERT INTO actualite (id, titre, cont, auteur)
VALUES (2, "Le génie de François", "François est un être fort intelligent. Si ses pensées et réfléxions diverses vous intéressent, n'hésitez pas à le contacter.", "La Direction");
INSERT INTO actualite (id, titre, cont, auteur)
VALUES (3, "Nouvelle fonctionnalité : les actualités", "Désormais, vous pourrez partager des nouvelles sur ce site.", "La Direction");
INSERT INTO actualite (id, titre, cont, auteur)
VALUES (4, "Ouverture", "Le site du <b>Jeu Sans Nom</b> a ouvert. Merci beaucoup de votre coopération.", "La Direction");
INSERT INTO actualite (id, titre, cont, auteur)
VALUES (5, "Erreut potentielle", "Si vous voyez ce message, c'est probablement qu'il y a eu une erreur.", "La Direction");

SELECT * FROM actualite;

*/

?>