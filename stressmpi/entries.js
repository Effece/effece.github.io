const infos = {
	"ecritsX": {
		label: "Ecrits (X/ENS)",
		func: countdown("Apr 13, 2026 08:00:00"),
		class: "c0"
	},
	"ecritsXse": {
		label: "Ecrits en semaines (X/ENS)",
		func: countdownw("Apr 13, 2026 08:00:00"),
		class: ""
	},
	"ecritsMines": {
		label: "Ecrits (Mines-Ponts)",
		func: countdown("Apr 27, 2026 08:00:00"),
		class: "c1"
	},
	"fin": {
		label: "Fin de la prepa",
		func: countdown("Aug 1, 2026 08:00:00"),
		class: ""
	},
	"pourcentageEcoule": {
		label: "Pourcentage d'avancement",
		func: pourcentage("Sep 1, 2025 08:00:00", "Apr 13, 2026 08:00:00"),
		class: "c1"
	},
	"pourcentageTotal": {
		label: "Pourcentage d'avancement (sup incluse)",
		func: pourcentage("Sep 1, 2024 10:00:00", "Apr 13, 2026 08:00:00"),
		class: ""
	},
	"cours": {
		titre: "Cours restants jusqu'aux concours",
		class: "t0"
	},
	"joursRestant": {
		label: "Jours totaux",
		func: null,
		class: ""
	},
	"semainesRestant": {
		label: "Semaines totales",
		func: semscours("Apr 13, 2026 08:00:00"),
		class: ""
	},
	"heures": {
		titre: "Heures restantes",
		class: "t1"
	},
	"mathsRestant": {
		label: "Maths",
		func: heures("m", "Apr 13, 2026 08:00:00"),
		class: ""
	},
	"phyRestant": {
		label: "Physique",
		func: heures("p", "Apr 13, 2026 08:00:00"),
		class: ""
	},
	"infoRestant": {
		label: "Informatique",
		func: heures("i", "Apr 13, 2026 08:00:00"),
		class: ""
	},
	"frRestant": {
		label: "Français",
		func: heures("f", "Apr 13, 2026 08:00:00"),
		class: ""
	},
	"angRestant": {
		label: "Anglais",
		func: heures("a", "Apr 13, 2026 08:00:00"),
		class: ""
	},
	"ds": {
		titre: "DS. restants jusqu'aux concours",
		class: "t0"
	},
	"dsRestant": {
		label: "Nombre total de DS.",
		func: null,
		class: ""
	},
	"dsMaths": {
		label: "Maths",
		func: null,
		class: ""
	},
	"dsPhy": {
		label: "Physique",
		func: null,
		class: ""
	},
	"dsInfo": {
		label: "Informatique",
		func: null,
		class: ""
	},
	"dsFr": {
		label: "Français",
		func: null,
		class: ""
	},
	"dsAnglais": {
		label: "Anglais",
		func: null,
		class: ""
	},
	"kholles": {
		titre: "Khôlles restantes jusqu'aux concours",
		class: "t0"
	},
	"khollesRestant": {
		label: "Nombre total de khôlles",
		func: null,
		class: ""
	},
	"khollesMaths": {
		label: "Maths",
		func: null,
		class: ""
	},
	"khollesPhy": {
		label: "Physique",
		func: null,
		class: ""
	},
	"khollesAnglais": {
		label: "Anglais",
		func: null,
		class: ""
	},
	"autre": {
		titre: "Autre",
		class: "t0"
	},
	"5/2": {
		label: "Temps avant l'éventuel début de 5/2",
		func: countdown("Sep 1, 2026 08:00:00"),
		class: ""
	}

};
