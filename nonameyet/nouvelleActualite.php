<?php

if (empty($_POST)) exit();
foreach($_POST as $key => $value)
	if (!isset($value)) exit();

// normalement, s'il n'y a rien de fourni, la suite ne devrait pas s'éxecuter ? ...
// inscription dans la base de données

$host = 'localhost:3306';
$user = 'root';
$pw   = '';

$mysqli = new mysqli($host, $user, $pw, 'jeusansnom');

if ($mysqli->connect_error) {
	die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}

$id     = 1;
$titre  = '';
$cont   = '';
$auteur = '';

$results = $mysqli->query("SELECT id FROM actualite");

while($row = $results->fetch_assoc())
	if ($row['id'] > $id) $id = $row['id'];
$id++;

$results->free();

foreach ($_POST as $key => $value) {

	switch ($key) {
		case 'titre':
			$titre = $value;
			break;
		case 'cont':
			$cont = $value;
			break;
		case 'auteur':
			$auteur = $value;
			break;
	}

}

$sql = 'INSERT INTO actualite (id, titre, cont, auteur) VALUES (' . $id . ', "' . $titre . '", "' . $cont . '", "' . $auteur . '")';
//$sql = 'UPDATE actualite SET titre = "' . $titre . '", cont = "' . $cont . '", auteur = "' . $auteur . '" WHERE id = ' . $id;

if ($mysqli->query($sql) === TRUE) {
} else {
	echo "Error: " . $sql . "<br>" . $mysqli->error;
}

//$results->free();
$mysqli->close();

?>