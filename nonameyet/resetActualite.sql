USE `jeusansnom`;

DELETE FROM actualite;

INSERT INTO actualite VALUES (1, "Erreur potentielle", "Si vous voyez ce message, c'est probablement qu'il y a eu une erreur.", "La Direction");
INSERT INTO actualite VALUES (2, "Ouverture", "Le site du <b>Jeu Sans Nom</b> a ouvert. Merci beaucoup de votre coopération.", "La Direction");
INSERT INTO actualite VALUES (3, "Nouvelle fonctionnalité : les actualités", "Désormais, vous pourrez partager des nouvelles sur ce site.", "La Direction");
INSERT INTO actualite VALUES (4, "Le génie de François", "François est un être fort intelligent. Si ses pensées et réfléxions diverses vous intéressent, n'hésitez pas à le contacter.", "La Direction");
INSERT INTO actualite VALUES (5, "Nouvelle actualité à venir !", "Eh oui, sous peu, une nouvelle actualité va arriver, et elle ne dépend que de vous.", "La Direction");

SELECT * FROM actualite;