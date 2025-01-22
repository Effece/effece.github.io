<?php

if (empty($_POST))
	die("Aucun formulaire fourni.");

if ($_POST['cle'] != "3141592")
	die("Connexion invalide.");

$username = $_POST['username'];
$enCours = true; // par défaut, on considère que la partie est en cours
$cur = 0;
$p1 = '';
$p2 = '';

$host = 'localhost:3306';
$user = 'root';
$pw   = '';

$mysqli = new mysqli($host, $user, $pw, 'jeusansnom');

if ($mysqli->connect_error) {
	die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}

$results = $mysqli->query('SELECT * FROM vars');

while ($row = $results->fetch_assoc())
	switch ($row['nom']) {
		case "enCours":
			$enCours = $row['val'] == "true";
			break;
		case "cur":
			$cur = $row['val'];
			break;
		case "p1":
			$p1 = $row['val'];
			break;
		case "p2":
			$p2 = $row['val'];
			break;
	}
// je n'ai pas trouvé de meilleure méthode...

$results->free();

// partie en cours ?
if ($enCours) {

	// l'utilisateur est un des joueurs ?
	if ($p1 != $username && $p2 != $username)
		die("Vous n'êtes pas un des joueurs.");

	else {
		// jeu
		echo "Joueur 1 : " . $p1 . "<br>Joueur 2 : " . $p2;
		include "nouveauCoup.php";
		include "grille.php";
		if ($userNum == $cur /* && isset($_POST['coup']) */) {
			$sql = 'UPDATE vars SET val = ' . strval(intval($cur) % 2 + 1) . ' WHERE nom = "cur"';
			if ($mysqli->query($sql) === TRUE) {
			} else {
				echo "Error: " . $sql . "<br>" . $mysqli->error;
			}
		}
	}

} else {
	// création de la partie
	include "creationPartie.php";
}

$mysqli->close();

?>