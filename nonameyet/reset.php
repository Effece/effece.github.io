<!DOCTYPE html>

<html>
	<head>
		<title>Jeu Sans Nom</title>
		<link rel = "icon" type = "image/x-icon" href = "favicon.ico">
		<link rel = "stylesheet" href = "overall.css">
		<link rel = "stylesheet" href = "links.css">
		<?php

		if (!empty($_POST)) {

			$host = 'localhost:3306';
			$user = 'root';
			$pw   = '';

			$mysqli = new mysqli($host, $user, $pw, 'jeusansnom');

			if ($mysqli->connect_error) {
				die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
			}

			switch ($_POST['bdd']) {
				case 'actualite':
					$sql = 'DELETE FROM actualite';
					if ($mysqli->query($sql) === TRUE) {} else { echo "Error: " . $sql . "<br>" . $mysqli->error; }
					$sql = 'INSERT INTO actualite VALUES (1, "Erreur potentielle", "Si vous voyez ce message, c\'est probablement qu\'il y a eu une erreur.", "La Direction")';
					if ($mysqli->query($sql) === TRUE) {} else { echo "Error: " . $sql . "<br>" . $mysqli->error; }
					$sql = 'INSERT INTO actualite VALUES (2, "Ouverture", "Le site du <b>Jeu Sans Nom</b> a ouvert. Merci beaucoup de votre coopération.", "La Direction")';
					if ($mysqli->query($sql) === TRUE) {} else { echo "Error: " . $sql . "<br>" . $mysqli->error; }
					$sql = 'INSERT INTO actualite VALUES (3, "Nouvelle fonctionnalité : les actualités", "Désormais, vous pourrez partager des nouvelles sur ce site.", "La Direction")';
					if ($mysqli->query($sql) === TRUE) {} else { echo "Error: " . $sql . "<br>" . $mysqli->error; }
					$sql = 'INSERT INTO actualite VALUES (4, "Le génie de François", "François est un être fort intelligent. Si ses pensées et réfléxions diverses vous intéressent, n\'hésitez pas à le contacter.", "La Direction")';
					if ($mysqli->query($sql) === TRUE) {} else { echo "Error: " . $sql . "<br>" . $mysqli->error; }
					$sql = 'INSERT INTO actualite VALUES (5, "Nouvelle actualité à venir !", "Eh oui, sous peu, une nouvelle actualité va arriver, et elle ne dépend que de vous.", "La Direction")';
					if ($mysqli->query($sql) === TRUE) {} else { echo "Error: " . $sql . "<br>" . $mysqli->error; }
					break;
				case 'jeu':
					$sql = 'DELETE FROM jeu';
					if ($mysqli->query($sql) === TRUE) {} else { echo "Error: " . $sql . "<br>" . $mysqli->error; }
					$sql = 'INSERT INTO jeu VALUES (0, "p1")';
					if ($mysqli->query($sql) === TRUE) {} else { echo "Error: " . $sql . "<br>" . $mysqli->error; }
					$sql = 'INSERT INTO jeu VALUES (44, "p2")';
					if ($mysqli->query($sql) === TRUE) {} else { echo "Error: " . $sql . "<br>" . $mysqli->error; }
					break;
				case 'vars':
					$sql = 'DELETE FROM vars';
					if ($mysqli->query($sql) === TRUE) {} else { echo "Error: " . $sql . "<br>" . $mysqli->error; }
					$sql = 'INSERT INTO vars VALUES ("p1", null)';
					if ($mysqli->query($sql) === TRUE) {} else { echo "Error: " . $sql . "<br>" . $mysqli->error; }
					$sql = 'INSERT INTO vars VALUES ("p2", null)';
					if ($mysqli->query($sql) === TRUE) {} else { echo "Error: " . $sql . "<br>" . $mysqli->error; }
					$sql = 'INSERT INTO vars VALUES ("enCours", "false")';
					if ($mysqli->query($sql) === TRUE) {} else { echo "Error: " . $sql . "<br>" . $mysqli->error; }
					$sql = 'INSERT INTO vars VALUES ("cur", "1")';
					if ($mysqli->query($sql) === TRUE) {} else { echo "Error: " . $sql . "<br>" . $mysqli->error; }
					break;
			}

		}

		?>
	</head>
	<body>
		<header></header>
		<div class = "col" id = "links">
			<!--<div id = "links2"></div>-->
			<h2 class = "sectionLien"><span>Général</span></h2>
			<a class = "lien" href = "index.html">Page principale</a>
			<a class = "lien" href = "regles.html">Règles du jeu</a>
			<a class = "lien" href = "ajouts.html">Nouveautés à venir</a>
			<a class = "lien" href = "genTableau.html">Générer un tableau</a>
			<h2 class = "sectionLien"><span>Jouer</span></h2>
			<a class = "lien" href = "jeu.html">Mode standard</a>
			<a class = "lien" href = "">Sans classement</a>
			<a class = "lien" href = "contreOrdinateur.php">Affronter l'ordinateur</a>
			<a class = "lien" href = "multijoueurLocal.php">Multijoueur local</a>
			<a class = "lien" href = "personnalise.html">Personnalisé</a>
			<a class = "lien" href = "">Observer une partie</a>
			<h2 class = "sectionLien"><span>Individuel</span></h2>
			<a class = "lien" href = "connexion.html">Connexion</a>
			<a class = "lien" href = "connexion.html">Inscription</a>
			<h2 class = "sectionLien"><span>Classement</span></h2>
			<a class = "lien" href = "">Dans le monde</a>
			<a class = "lien" href = "">Durant la semaine</a>
			<h2 class = "sectionLien"><span>Autre</span></h2>
			<a class = "lien" href = "https://google.com">Test de microphone</a>
			<a class = "lien" href = "formulaireInutile.html">Envoyer un formulaire</a>
			<a class = "lien" href = "emploiDuTemps.html">Voir un emploi du temps</a>
		</div>
		<div class = "col" id = "overall">
			<form action = "?" method = "POST" name = "formulaire">
				<h2>Mot de passe</h2>
				<input type = "password" id = "pw" placeholder = "Alors ?" />
				<h2>Base de données :</h2>
				<input type = "text" name = "bdd" placeholder = "Base de données" />	
				<input type = "button" value = "Valider" onclick = "verifier()" />
			</form>
		</div>
		<script>
			function verifier() {
				if (document.getElementById("pw").value === "lemotdepassecomplique")
					document.formulaire.submit();
			}
		</script>
	</body>
</html>