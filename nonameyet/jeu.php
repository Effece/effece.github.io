<!DOCTYPE html>

<html>
	<head>
		<title>Jeu Sans Nom - Jeu</title>
		<link rel = "icon" type = "image/x-icon" href = "favicon.ico">
		<link rel = "stylesheet" href = "overall.css">
		<link rel = "stylesheet" href = "links.css">
		<link rel = "stylesheet" href = "plateau.css">
		<script src = "action.js"></script>
	</head>
	<body>
		<header></header>
		<div class = "col" id = "links">
			<?php include "liens.html" ?>
		</div>
		<div class = "col" id = "overall">
			<!-- créer un nv code qui capte un nv coup et l'ajoute à la base de données -->
			<?php include "codeJeu.php" ?>
		</div>
	</body>
	<?php
	if (empty($_POST)) die;
	echo '<p id = "formCont">' . $_POST['username']. ';' . $_POST['cle'] . '</p>';
	?>
	<form style = "display: none" action = "?" method = "POST" name = "formulaire">
		<input type = "text" name = "username" id = "username" value = "" />
		<input type = "text" name = "cle" id = "cle" value = "" />
		<input type = "text" name = "coup" id = "coup" value = "" />
		<input type = "text" name = "acoup" id = "acoup" value ="" />
	</form>
	<script src = "timer.js"></script>
</html>