<!DOCTYPE html>

<html>
	<head>
		<title>Jeu Sans Nom - Receveur</title>
		<link rel = "icon" type = "image/x-icon" href = "favicon.ico">
		<link rel = "stylesheet" href = "overall.css">
		<link rel = "stylesheet" href = "links.css">
		<link rel = "stylesheet" href = "plateau.css">
	</head>
	<body onload = "genForm()">
		<header></header>
		<div class = "col" id = "links">
			<?php include "liens.html" ?>
		</div>
		<div class = "col" id = "overall">
			
			<div id = "espace"> </div>
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
			Si possible, j'essaierai d'afficher la grille directement avec le PHP, sans utiliser de JavaScript.
			-->
		</div>
		<script src = "dessinGrille.js"></script>
	</body>
</html>