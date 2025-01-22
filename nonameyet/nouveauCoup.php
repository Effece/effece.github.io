<?php

/*$coupX = intval($_POST['coup'][0]);
$coupY = intval($_POST['coup'][1]);
$acoupX = intval($_POST['acoup'][0]);
$acoupY = intval($_POST['acoup'][1]);*/

$results = $mysqli->query('SELECT nom FROM vars WHERE val = "' . $_POST['username'] . '"');
$userNum = 0;

while ($row = $results->fetch_assoc())
	$userNum = $row['nom'][1];

echo '<br>Numéro de joueur : ';
echo '<p id = "usernum" style = "display: inline">' . $userNum . '</p>';
echo '<br>Joueur actuel : ' . $cur;

$results->free();

if ($userNum == $cur && isset($_POST['coup'])) {

	$sql = 'UPDATE jeu SET pos = "' . $_POST['coup'] . '" WHERE cont = "p' . $cur . '"';

	if ($mysqli->query($sql) === TRUE) {
	} else {
		echo "Error: " . $sql . "<br>" . $mysqli->error;
	}

	$sql = 'INSERT INTO jeu VALUES (' . $_POST['acoup'] . ', "croix")';

	if ($mysqli->query($sql) === TRUE) {
	} else {
		echo "Error: " . $sql . "<br>" . $mysqli->error;
	}

}

?>