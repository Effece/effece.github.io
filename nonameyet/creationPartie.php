<?php

// le programme doit être implémenté dans un programme possédant les variables p1, p2, enCours et username, une connexion sur une base mysqli

if ($p1 == null) {

	$sql = 'UPDATE vars SET val = "' . $username . '" WHERE nom = "p1"';

	if ($mysqli->query($sql) === TRUE) {
		echo "Rechargez la page lorsqu'un autre joueur sera connecté.";
	} else {
		echo "Error: " . $sql . "<br>" . $mysqli->error;
	}

} elseif ($p2 == null) {

	$sql = 'UPDATE vars SET val = "' . $username . '" WHERE nom = "p2"';

	if ($mysqli->query($sql) === TRUE) {
		echo "Rechargez la page.";
		$sql = 'UPDATE vars SET val = "true" WHERE nom = "enCours"';
		if ($mysqli->query($sql) === TRUE) {
		} else {
			echo "Error: " . $sql . "<br>" . $mysqli->error;
		}
	} else {
		echo "Error: " . $sql . "<br>" . $mysqli->error;
	}

}

?>