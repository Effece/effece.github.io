<!--

Les règles du jeu sont expliquées sur la page regles.html.

Le code CSS est intégralement personnel, outre la recherche de certains attributs.
Le code JavaScript est inspiré d'un code Python que j'avais écrit avant, je l'ai adapté légèrement pour ce projet. Par ailleurs j'exploite le localStorage et le sessionStorage, espaces que j'ai découvert en cherchant comment stocker des informations entre les pages.
Le code HTML est intégralement personnel.
Le (peu de) code PHP est inspiré du cours, de lecture de documents sur la syntaxe du langage.
Le SQL dans le PHP est inspiré de plusieurs pages diverses. La création de la base de données également.

Mon site demande un serveur PHP8+ et un serveur MySQL. La base de données utilisée se nomme `jeusansnom` et contient les tables :
- `actualite` : plusieurs lignes avec titre, contenu et auteur d'une actualité écrite sur index.php

-->

<!DOCTYPE html>

<html>
	<head>
		<title>Jeu Sans Nom</title>
		<link rel = "icon" type = "image/x-icon" href = "favicon.ico">
		<link rel = "stylesheet" href = "overall.css">
		<link rel = "stylesheet" href = "links.css">
		<link rel = "stylesheet" href = "indexStyle.css">
		<link rel = "stylesheet" href = "articles.css">
	</head>
	<body>
		<header></header>
		<div class = "col" id = "links">
			<?php include "liens.html" ?>
		</div>
		<div class = "col" id = "overall">
			<h1>Bienvenue sur le <b>Jeu Sans Nom</b></h1>
			<p>Le <b>Jeu Sans Nom</b>, comme son nom ne l'indique pas, est un jeu de stratégie. Il est conçu pour être joué à deux, sur un plateau de forme carrée et dont les cases sont des carrés de même taille. Pour plus de détails, consultez <a class = "innerLien" href = "regles.html">les règles</a>.</p>
			<img class = "separateur" src = "separateur2.png" />
			<h1>Actualité</h1>
			<form id = "actu" name = "actualite" method = "POST" action = "?">
				<!--
				Formulaire renvoyant sur la même page.
				Je m'en sers pour récupérer l'actualité proposée et l'ajouter à la base de données en utilisant le PHP et le SQL.
				Eventuellement, il faudrait que le nombre d'actualités par utilisateur / chaque jour soit limité.
				-->
				<input class = "actuCls" type = "text" placeholder = "Titre" id = "actTitre" name = "titre" />
				<!--<input class = "actuCls" type = "text" placeholder = "Actualité" id = "actCont" />-->
				<textarea class = "actuCls" placeholder = "Actualité" id = "actCont" maxlength = 1000 name = "cont"></textarea>
				<input class = "actuCls" type = "text" placeholder = "Auteur" id = "actAuteur" value = "Anonyme" name = "auteur" />
				<!--<input class = "actuCls" type = "submit" value = "Envoyer" onclick = "ajtActu()" />-->
				<input class = "actuCls" type = "button" value = "Envoyer" onclick = "ajtActu()" />
			</form>
			<div id = "actualites">
				<?php include "actualite.php"; ?>
			<img class = "separateur" src = "separateur2.png" />
			<h1>Documents consultables</h1>
			<p>Ah, il n'y a rien (pour l'instant...).</p>
		</div>
		<script src = "mainPagePHP.js"></script>
		<!--
		<script> document.getElementById("links").style.height = document.getElementById("overall").style.height;
		</script>
		Ce bout de code aurait pour objectif de mettre à la même hauteur les deux colonnes.
		-->
		<?php include "nouvelleActualite.php"; ?>
	</body>
</html>