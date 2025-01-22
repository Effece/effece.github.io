<!DOCTYPE html>

<html>
	<head>
		<title>Jeu Sans Nom - Multijoueur local</title>
		<link rel = "icon" type = "image/x-icon" href = "favicon.ico">
		<link rel = "stylesheet" href = "overall.css">
		<link rel = "stylesheet" href = "links.css">
		<link rel = "stylesheet" href = "plateau.css">
	</head>
	<body onload = "capteForm(); creerPlateauForm(); setInputs();">
		<header></header>
		<div class = "col" id = "links">
			<?php include "liens.html" ?>
		</div>
		<div class = "col" id = "overall">
			<div id = "espace"></div>
		</div>
		<div id = "recu">
			<?php
				if (empty($_GET))
					echo 'vide31415';
				else {
					foreach ($_GET as $key => $value) {
						echo $key . ":" . $value . ";";
					}
				}
			?>
			<!--
			Comme pour receveur.php, si possible, j'enlèverai toute trace de dessinGrille.js pour permettre l'affichage de la grille intégralement par le PHP.
			-->
		</div>
		<script src = "dessinGrille.js"></script>
		<script src = "multijoueurLocal.js"></script>
	</body>
</html>