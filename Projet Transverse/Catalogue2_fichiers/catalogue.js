/*
Copyright (C) 2016 Cédric Schott, ESEP LESIA - Observatoire de Paris-Meudon

CATALOGUE

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
*/
$(document).ready(function() {

// retrieve parameters from URL
GetURLParameter=function(sPageURL, sParam) {
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++)
	{
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) return sParameterName[1];
	}
}

// string tables for multi languages
var languages = {
   fr:{	
      catalog:"Catalogue",
   	  hot:"chaude",
      warm:"tiède",
      cold:"froide",
      mercurians:"mercurienne",
      subterrans:"mini-terrienne",
      terrans:"terriennes",
      superterrans:"super-terrienne",
      neptunians:"neptunienne",
      jovians:"jovienne", 
      Other:"autre",   
      IRXS:"IR Excess", 
      TTV:"variation de l'instant de transit",
      AST:"astrométrie",
      TR:"transit",
      DI:"imagerie",                          
      GML:"microlentille", 
      PT:"pulsar",
      RV:"vitesse radiale", 
      copyto: "Copier vers élément",
      exoplanet:"Exoplanète",
      planetstatus: "statut",
      category: "catégorie",
      star: "Etoile" ,
      planet: "planète",
      detectionmode: "détection",  
      period: "période",
      semimajoraxis: "a",
      eccentricity: "e",
      inclination: "i",
      omega: "omega",
      molecules: "mol.",
      m_pl: "M_pl",
      r_pl: "R_pl",
      teq: "teq",
      density: "densité",
      starname: "Etoile",      
      distance: "distance",
      ra: "alpha",
      dec: "delta",
      mag_v: "magV",
      metallicity: "métal.",
      m_et: "M_st",
      r_et: "R_st", 
      spec_type: "Cl_Sp",
      age: "age",
      temp_eff:  "Teff",
      detecteddisk: "Disque détecté",
      nbplanets: "Nb planètes",
      orange: "orange : ",
      blue: "bleu : ",
      calcvalues: "les valeurs calculées",
      moreinfos: "(en savoir plus)",
      linkstosim3D: "les liens vers le simulateur 3D",
        "confirmed": "confirmée",
        "candidate": "candidate",
        "unconfirmed": "non confirmée",

      infobulles :
       { 
    "selectbox": "sélection",
    "planet": "nom donné par les découvreurs, souvent le nom de l'étoile ou du projet ayant donné lieu à la découverte, suivi d'une lettre, b, c, d, ... chaque lettre correspond à une planète du système",
	"planetstatus": "statut de l'exoplanète : candidate, confirmée", 
  "category": "catégorie selon la température : chaude, tiède, froide ; et selon la masse : mercurienne, mini-terrienne, terrienne, superterrienne, neptunienne, jovienne",
	"detectionmode": "méthode de détection : vitesse radiale – pulsar – microlentille – imagerie – transit - astrométrie - variation de l'instant de transit",
	"discoveryyear": "année de découverte",
	"period": "période en jours de la révolution de la planète autour de l'étoile",
	"semimajoraxis": "demi-grand axe de l'orbite de la planète autour de son étoile, en Unités Astronomiques",
	"eccentricity": "excentricité de l'orbite de la planète",
	"inclination": "inclinaison du plan de l'orbite par rapport au plan du ciel, en degrés",
	"omega": "longitude du noeud ascendant, en degrés",
	"molecules": "liste des molécules détectées dans l’atmosphère de l’exoplanète",
	"m_pl": "Msin(i) de la planète, en masses de Jupiter",
	"m_pl_earthunit": "Msin(i) de la planète, en masses de Terre",
	"r_pl": "rayon de la planète, en rayons de Jupiter",
	"r_pl_earthunit": "rayon de la planète, en rayons de Terre",
	"teq": "température d'équilibre en degrés Kelvin",
	"density": "densité moyenne de la planète, en g/cm^3",
	"temp_eq": "température d'équilibre en degrés Kelvin",
	"log_g": "logarithme de la gravité",
	"starname": "nom de l’étoile",
	"distance": "distance de l'étoile, en parsecs (1 pc = 3,26 années-lumière)",
	"ra": "ascension droite, en degrés",
	"dec": "déclinaison en degrés",
	"mag_v": "magnitude V de l’étoile",
	"metallicity": "métallicité de l'étoile",
	"m_et": "masse de l'étoile, en masses du Soleil",
	"r_et": "rayon de l'étoile, en rayons du Soleil",
	"spec_type": "classe spectrale de l'étoile",
	"age": "age de l'étoile en milliards d'années",
	"temp_eff": "température effective de l’étoile, en degrés Kelvin",
	"detecteddisk": "détection d'un disque autour de l'étoile",
	"nbplanets": "nombre de planètes dans le système"

    },
    
       oLanguage :
        {
    "sProcessing":     "Chargement en cours...",
    "sSearch":         "Rechercher&nbsp;:",
    "sLengthMenu":     "Afficher _MENU_ &eacute;l&eacute;ments",
    "sInfo":           "Affichage de l'&eacute;lement _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
    "sInfoEmpty":      "Affichage de l'&eacute;lement 0 &agrave; 0 sur 0 &eacute;l&eacute;ments",
    "sInfoFiltered":   "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
    "sInfoPostFix":    "",
    "sLoadingRecords": "Chargement en cours...",
    "sZeroRecords":    "Aucun &eacute;l&eacute;ment &agrave; afficher",
    "sEmptyTable":     "Aucune donnée disponible dans le tableau",
    "oPaginate": {
        "sFirst":      "Premier",
        "sPrevious":   "Pr&eacute;c&eacute;dent",
        "sNext":       "Suivant",
        "sLast":       "Dernier"
    },
    
    "oAria": {
        "sSortAscending":  ": activer pour trier la colonne par ordre croissant",
        "sSortDescending": ": activer pour trier la colonne par ordre décroissant"
    }
    
},

 
	copyselectedlist: "Copier la liste sélectionnée",
    savetoxls: "Enregistrer vers Tableur",
    displaycolumns: "Afficher les colonnes",
    allcolumns:  "Toutes les colonnes",
    none: "Aucune", 
    all: "Tous"
    
   },
   
   en:{	
      catalog:"Catalog",
   	  hot:"hot",
      warm:"warm",
      cold:"cold",
      mercurians:"mercurian",
      subterrans:"mini-terran",
      terrans:"terrans",
      superterrans:"superterran",
      neptunians:"neptunian",
      jovians:"jovian",
      Other:"other",  
      IRXS:"IR Excess", 
      TTV:"transit-timing variation",
      AST:"astrometry",
      TR:"transit",
      DI:"direct imaging",                          
      GML:"microlensing", 
      PT:"pulsar",
      RV:"radial velocity",
      copyto: "Copy to element",
      exoplanet:  "Exoplanet",
      planetstatus: "status",
      planet: "planet",
      category: "category",
      detectionmode: "detection",
      discoveryyear: "year",
      period: "period",
      semimajoraxis: "a",
      eccentricity: "e",
      inclination: "i",
      omega: "omega",
      molecules: "mol.",
      m_pl: "M_pl",
      r_pl: "R_pl",
      teq: "teq",
      density: "density",
      starname: "Star",      
      distance: "distance",
      ra: "alpha",
      dec: "delta",
      mag_v: "magV",
      metallicity: "metall.",
      m_et: "M_st",
      r_et: "R_st", 
      spec_type: "Sp_Cl",
      age: "age",
      temp_eff:  "Teff",
      detecteddisk: "detected disc",
      nbplanets: "Nb planets",
      orange: "orange: ",
      blue: "blue: ",
      calcvalues: "values calculated",
      moreinfos: "(more info)",
      linkstosim3D: "links to the 3D simulator",
  "confirmed": "confirmed",
  "candidate": "candidate",
  "unconfirmed": "unconfirmed",

      infobulles :
       { 
    "selectbox": "selection",
    "planet": "[à traduire EN] nom donné par les découvreurs, souvent le nom de l'étoile ou du projet ayant donné lieu à la découverte, suivi d'une lettre, b, c, d, ... chaque lettre correspond à une planète du système",
    "planetstatus": "[à traduire EN] exoplanet status : confirmed, candidate",
	"category": "[à traduire EN] catégorie selon la température : chaude, tiède, froide ; et selon la masse : mercurienne, mini-terrienne, terrienne, superterrienne, neptunienne, jovienne",
	"detectionmode": "[à traduire EN] méthode de détection : vitesse radiale – pulsar – microlentille – imagerie – transit - astrométrie - variation de l'instant de transit",
	"discoveryyear": "[à traduire EN] année de découverte",
	"period": "[à traduire EN] période en jours de la révolution de la planète autour de l'étoile",
	"semimajoraxis": "[à traduire EN] demi-grand axe de l'orbite de la planète autour de son étoile, en Unités Astronomiques",
	"eccentricity": "[à traduire EN] excentricité de l'orbite de la planète",
	"inclination": "[à traduire EN] inclinaison du plan de l'orbite par rapport au plan du ciel, en degrés",
	"omega": "[à traduire EN] longitude du noeud ascendant, en degrés",
	"molecules": "[à traduire EN] liste des molécules détectées dans l’atmosphère de l’exoplanète",
	"m_pl": "[à traduire EN] Msin(i) de la planète, en masses de Jupiter",
	"m_pl_earthunit": "Msin(i) de la planète, en masses de Terre",
	"r_pl": " [à traduire EN] rayon de la planète, en rayons de Jupiter",
	"r_pl_earthunit": "rayon de la planète, en rayons de Terre",
	"teq": "[à traduire EN] température d'équilibre en degrés Kelvin",
	"density": "[à traduire EN] densité moyenne de la planète, en g/cm^3",
	"temp_eq": "température d'équilibre en degrés Kelvin",
	"log_g": "logarithme de la gravité",
	"starname": "[à traduire EN] nom de l’étoile",
	"distance": "[à traduire EN] distance de l'étoile, en parsecs (1 pc = 3,26 années-lumière)",
	"ra": "[à traduire EN] ascension droite, en degrés",
	"dec": "[à traduire EN] déclinaison en degrés",
	"mag_v": "[à traduire EN] magnitude  V de l’étoile",
	"metallicity": "[à traduire EN] métallicité de l'étoile",
	"m_et": "[à traduire EN] masse de l'étoile, en masses du Soleil",
	"r_et": "[à traduire EN] rayon de l'étoile, en rayons du Soleil",
	"spec_type": "[à traduire EN] classe spectrale de l'étoile",
	"age": "[à traduire EN] age de l'étoile en milliards d'années",
	"temp_eff": "[à traduire EN] température effective de l’étoile, en degrés Kelvin",
	"detecteddisk": "[à traduire EN] détection d'un disque autour de l'étoile",
	"nbplanets": "[à traduire EN] nombre de planètes dans le système"
    },
    
       oLanguage :
      {
    "sProcessing":     "Processing...",
    "sSearch":         "Search&nbsp;:",
    "sLengthMenu":     "Show _MENU_ entries",
    "sInfo":           "Showing _START_ to _END_ of _TOTAL_ entries",
    "sInfoEmpty":      "Showing 0 to 0 of 0 entries",
    "sInfoFiltered": "(filtered from _MAX_ total entries)",
    "sInfoPostFix":    "",
    "sLoadingRecords": "Loading data...",
    "sZeroRecords":    "No records to display",
    "sEmptyTable":     "No matching records found",
    "oPaginate": {
        "sFirst":    "First",
        "sPrevious": "Previous",
        "sNext":     "Next",
        "sLast":     "Last"
    },
    "oAria": {
        "sSortAscending":  ": Activate to sort column ascending",
        "sSortDescending": ": Activate to sort column descending"
    }
},

    copyselectedlist: "Copy the selection list",           
    savetoxls: "Save to spreadsheet",
    displaycolumns: "Display columns",
    allcolumns:  "All columns",
    none: "None",
    all:"All"
         		
   },
 

 br:{  
      catalog:"Catálogo",
      hot:"quente",
      warm:"morno",
      cold:"frio",
      mercurians:"mercurianos",
      subterrans:"sub-terrestres",
      terrans:"terrestres",
      superterrans:"superterrestres",
      neptunians:"netunianos",
      jovians:"jupiterianos",  
      Other:"outro",    
      IRXS:"Excesso Infravermelho", 
      TTV:"variação do instante de trânsito",
      AST:"astrometria",
      TR:"trânsito",
      DI:"imageamento direto",                            
      GML:"microlente", 
      PT:"pulsar",
      RV:"velocidade radial", 
      copyto: "Copiar para",
      exoplanet:"Exoplaneta",
      planetstatus: "estado",
      category: "categoria",
      star: "estrela" ,
      planet: "planeta",
      detectionmode: "deteção",  
      period: "período",
      semimajoraxis: "a",
      eccentricity: "e",
      inclination: "i",
      omega: "ômega",
      molecules: "mol.",
      m_pl: "M_pl",
      r_pl: "R_pl",
      teq: "teq",
      density: "densidade",
      starname: "Estrela",      
      distance: "distância",
      ra: "alpha",
      dec: "delta",
      mag_v: "magV",
      metallicity: "metal.",
      m_et: "M_st",
      r_et: "R_st", 
      spec_type: "Cl_Sp",
      age: "idade",
      temp_eff:  "Tef",
      detecteddisk: "Disco detectado",
      nbplanets: "No de planetas",
       linkstosim3D: "[à traduire] les liens vers le simulateur 3D",
  "confirmed": "[à traduire] confirmed",
  "candidate": "[à traduire] candidate",
  "unconfirmed": "[à traduire] unconfirmed",

      infobulles :
       { 
    "selectbox": "seleção",
    "planet": "nome dado aos descobridores, seguido do nome da estrela ou do projeto que realizou a descoberta, seguido de uma letra, b, c, d, ... cada letra corresponde a um planeta do sistema",
  "planetstatus": "[à traduire] exoplanet status : Candidate, Confirmed", 
  "category": "categoria por temperatura : quente, morna, fria ; por massa : mercuriano, miniterrestre, terrestre, superterrestre, netuniano, jupiteriano",
  "detectionmode": "método de deteção : velocidade radial – pulsar – microlente – imageamento direto – trânsito - astrometria - variação do instante de trânsito",
  "discoveryyear": "ano da descoberta",
  "period": "períododa revolução do planeta ao redor da estrela, em dias",
  "semimajoraxis": "semieixo maior da órbita do planeta ao redor de sua estrela, em Unidades Astronômicas",
  "eccentricity": "excentricidade da órbita do planeta",
  "inclination": "inclinação do plano da órbita em relação ao plano do céu, em graus",
  "omega": "longitude do nodo ascendente, em graus",
  "molecules": "lista de moléculas detectadas na atmosfera do exoplaneta",
  "m_pl": "Msin(i) do planeta, em massas de Júpiter",
  "m_pl_earthunit": "Msin(i) do planeta, em massas da Terra",
  "r_pl": "raio do planeta, em raios de Jupiter",
  "r_pl_earthunit": "raio do planeta, em raios da Terra",
  "teq": "temperatura de equilíbrio, em Kelvin",
  "density": "densidade média do planeta, em g/cm^3",
  "temp_eq": "temperatura de equilíbrio, em Kelvin",
  "log_g": "logaritimo da gravidade",
  "starname": "nome da estrela",
  "distance": "distância da estrela, em parsecs (1 pc = 3,26 anos-luz)",
  "ra": "ascenção reta, em graus",
  "dec": "declinação, em graus",
  "mag_v": "magnitude V da estrela",
  "metallicity": "métalicidade da estrela",
  "m_et": "massa da estrela, em massas do Sol",
  "r_et": "raio da estrela, em raios do Sol",
  "spec_type": "classe espectral da estrela",
  "age": "idade da estrela, em bilhões de anos",
  "temp_eff": "temperatura efetiva da estrela, em Kelvin",
  "detecteddisk": "deteção de um disco ao redor da estrela",
  "nbplanets": "número de planetas no sistema"

    },
    
       oLanguage :
        {
    "sProcessing":     "Carregando...",
    "sSearch":         "Pesquisar :",
    "sLengthMenu":     "Mostrando resultados do _MENU_",
    "sInfo":           "Mostrando resultados de _START_ a _END_ do total de _TOTAL_",
    "sInfoEmpty":      "Mostrando de 0 a 0 do total de 0",
    "sInfoFiltered":   "(filtrado de _MAX_ resultados do total)",
    "sInfoPostFix":    "",
    "sLoadingRecords": "Carregando...",
    "sZeroRecords":    "Nenhum dado para acrescentar",
    "sEmptyTable":     "Nenhum dado disponível para exibição",
    "oPaginate": {
        "sFirst":      "Primeiro",
        "sPrevious":   "Anterior",
        "sNext":       "Seguinte",
        "sLast":       "Último"
    },
    
    "oAria": {
        "sSortAscending":  ": organizar as colunas por ordem crescente",
        "sSortDescending": ": organizar as colunas por ordem decrescente"
    }
    
},

 
  copyselectedlist: "Copiar a lista selecionada",
    savetoxls: "Salvar na Tabela",
    displaycolumns: "Mostrar as colunas",
    allcolumns:  "Todas as colunas",
    none: "Nenhum", 
    all: "Tudo"
    
   },
   
   it:{ 
      catalog:"Catalogo",
      hot:"chaude",
      warm:"tiède",
      cold:"froide",
      mercurians:"mercurienne",
      subterrans:"mini-terrienne",
      terrans:"terrienne",
      superterrans:"super-terrienne",
      neptunians:"neptunienne",
      jovians:"jovienne", 
      Other:"autre",   
      IRXS:"IR Excess", 
      TTV:"variation de l'instant de transit",
      AST:"astrométrie",
      TR:"transit",
      DI:"imagerie",                          
      GML:"microlentille", 
      PT:"pulsar",
      RV:"vitesse radiale", 
      copyto: "Copier vers élément",
      exoplanet:"Exoplanète [IT]",
      planetstatus: "statut",
      category: "catégorie",
      star: "Etoile" ,
      planet: "planète",
      detectionmode: "détection",  
      period: "période",
      semimajoraxis: "a",
      eccentricity: "e",
      inclination: "i",
      omega: "omega",
      molecules: "mol.",
      m_pl: "M_pl",
      r_pl: "R_pl",
      teq: "teq",
      density: "densité",
      starname: "Etoile",      
      distance: "distance",
      ra: "alpha",
      dec: "delta",
      mag_v: "magV",
      metallicity: "métal.",
      m_et: "M_st",
      r_et: "R_st", 
      spec_type: "Cl_Sp",
      age: "age",
      temp_eff:  "Teff",
      detecteddisk: "Disque détecté",
      nbplanets: "Nb planètes",
      orange: "orange : ",
      blue: "bleu : ",
      calcvalues: "les valeurs calculées",
      moreinfos: "(en savoir plus)",
      linkstosim3D: "les liens vers le simulateur 3D",
        "confirmed": "confirmée",
        "candidate": "candidate",
        "unconfirmed": "non confirmée",

      infobulles :
       { 
    "selectbox": "sélection",
    "planet": "nom donné par les découvreurs, souvent le nom de l'étoile ou du projet ayant donné lieu à la découverte, suivi d'une lettre, b, c, d, ... chaque lettre correspond à une planète du système",
  "planetstatus": "statut de l'exoplanète : candidate, confirmée", 
  "category": "catégorie selon la température : chaude, tiède, froide ; et selon la masse : mercurienne, mini-terrienne, terrienne, superterrienne, neptunienne, jovienne",
  "detectionmode": "méthode de détection : vitesse radiale – pulsar – microlentille – imagerie – transit - astrométrie - variation de l'instant de transit",
  "discoveryyear": "année de découverte",
  "period": "période en jours de la révolution de la planète autour de l'étoile",
  "semimajoraxis": "demi-grand axe de l'orbite de la planète autour de son étoile, en Unités Astronomiques",
  "eccentricity": "excentricité de l'orbite de la planète",
  "inclination": "inclinaison du plan de l'orbite par rapport au plan du ciel, en degrés",
  "omega": "longitude du noeud ascendant, en degrés",
  "molecules": "liste des molécules détectées dans l’atmosphère de l’exoplanète",
  "m_pl": "Msin(i) de la planète, en masses de Jupiter",
  "m_pl_earthunit": "Msin(i) de la planète, en masses de Terre",
  "r_pl": "rayon de la planète, en rayons de Jupiter",
  "r_pl_earthunit": "rayon de la planète, en rayons de Terre",
  "teq": "température d'équilibre en degrés Kelvin",
  "density": "densité moyenne de la planète, en g/cm^3",
  "temp_eq": "température d'équilibre en degrés Kelvin", 
  "log_g": "logarithme de la gravité",
  "starname": "nom de l’étoile",
  "distance": "distance de l'étoile, en parsecs (1 pc = 3,26 années-lumière)",
  "ra": "ascension droite, en degrés",
  "dec": "déclinaison en degrés",
  "mag_v": "magnitude V de l’étoile",
  "metallicity": "métallicité de l'étoile",
  "m_et": "masse de l'étoile, en masses du Soleil",
  "r_et": "rayon de l'étoile, en rayons du Soleil",
  "spec_type": "classe spectrale de l'étoile",
  "age": "age de l'étoile en milliards d'années",
  "temp_eff": "température effective de l’étoile, en degrés Kelvin",
  "detecteddisk": "détection d'un disque autour de l'étoile",
  "nbplanets": "nombre de planètes dans le système"

    },
    
       oLanguage :
        {
    "sProcessing":     "Chargement en cours...",
    "sSearch":         "Rechercher&nbsp;:",
    "sLengthMenu":     "Afficher _MENU_ &eacute;l&eacute;ments",
    "sInfo":           "Affichage de l'&eacute;lement _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
    "sInfoEmpty":      "Affichage de l'&eacute;lement 0 &agrave; 0 sur 0 &eacute;l&eacute;ments",
    "sInfoFiltered":   "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
    "sInfoPostFix":    "",
    "sLoadingRecords": "Chargement en cours...",
    "sZeroRecords":    "Aucun &eacute;l&eacute;ment &agrave; afficher",
    "sEmptyTable":     "Aucune donnée disponible dans le tableau",
    "oPaginate": {
        "sFirst":      "Premier",
        "sPrevious":   "Pr&eacute;c&eacute;dent",
        "sNext":       "Suivant",
        "sLast":       "Dernier"
    },
    
    "oAria": {
        "sSortAscending":  ": activer pour trier la colonne par ordre croissant",
        "sSortDescending": ": activer pour trier la colonne par ordre décroissant"
    }
    
},

 
  copyselectedlist: "Copier la liste sélectionnée",
    savetoxls: "Enregistrer vers Tableur",
    displaycolumns: "Afficher les colonnes",
    allcolumns:  "Toutes les colonnes",
    none: "Aucune", 
    all: "Tous"
    
   }
                     

};
   
var langResources;

var sPageURL = window.location.search.substring(1);
var langparam = GetURLParameter(sPageURL, 'lang');

// replace lang. labels

changeLanguage=function(lang){
    langResources = languages[lang];

    $("title[name='lbl']").each(function(i, elt){
        console.log("!!!!"+langResources[$(elt).attr("caption")]);
        $(elt).text(langResources[$(elt).attr("caption")]);
    }); 

    $("span[name='lbl']").each(function(i, elt){
         $(elt).text(langResources[$(elt).attr("caption")]);
    });       
 
}

// change language interface 

switch (langparam) {
	
	case "fr":
	changeLanguage("fr");
	break;
	
	case "en":
	changeLanguage("en");
	break;
	
  case "es":
  changeLanguage("es");
  break;

  case "it":
  changeLanguage("it");
  break;

  case "br":
  changeLanguage("br");
  break;

  case "zh":
  changeLanguage("zh");
  break;
  
	default:
	changeLanguage("fr");
	break;
}

// get parameters
getParam=function(sname)
{
  var params = location.search.substr(location.search.indexOf("?")+1);
  var sval = "";
  params = params.split("&");
    // split param and value into individual pieces
    for (var i=0; i<params.length; i++)
       {
         temp = params[i].split("=");
         if ( [temp[0]] == sname ) { sval = temp[1]; }
       }
  return sval;
}

// get category for filtering

var decodedcatg = decodeURIComponent(getParam("catg"));

// get nb of planetes for filtering

var decodednbpl = decodeURIComponent(getParam("nbpl"));

var tmp = decodedcatg.split("-");

// planet thermal type

switch (tmp[0]) {
	case "hot": 
		thermaltype = langResources["hot"]; 
		break;
    case "warm": 
    	thermaltype = langResources["warm"]; 
    	break;
    case "cold": 
    	thermaltype = langResources["cold"];  
    	break;
    default: 
    	thermaltype = ""; 
    	break;        			
}

// planet type 

switch ( tmp[1] ) {
    case "mercurians":    	
    	masstype = langResources["mercurians"];
    	break;
    case "subterrans":     	 
    	masstype = langResources["subterrans"];
    	break;
    case "terrans":   	 
    	masstype = langResources["terrans"];
    	break;
    case "superterrans":  	
    	masstype = langResources["superterrans"]; 
    	break;
    case "neptunians":   	 
    	masstype = langResources["neptunians"]; 
    	break;
    case "jovians":   	
    	masstype = langResources["jovians"]; 
    	break;
    default: 
    	masstype = ""; 
    	break;        			
}
            		
var categ = masstype+" "+thermaltype;

var nbplanets="";

if (decodednbpl>0) {
	nbplanets="N"+decodednbpl;

}



// calculate star temperature based on spectrum
calcTstar=function(spectre) {

	        if (spectre == "pulsar")
	            return (1E6);
	        
	        // From uni.edu/morgans/astro/course/Notes/section2/spectraltemps.html
	        
	        var tspec2 = ["O5", "O6", "O7", "O8", "O9", "B0", "B1", "B2", "B3", "B5", "B6", "B7",
	            "B8", "B9", "A0", "A1", "A2", "A3", "A4", "A5", "A7", "F0", "F2", "F3", "F5", "F6",
	            "F7", "F8", "G0", "G1", "G2", "G5", "G8", "K0", "K1", "K2", "K3", "K4", "K5", "K7",
	            "M0", "M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8"
	        ];
	        var ttemp = [54000, 45000, 43300, 40600, 37800, 29200, 23000, 21000, 17600, 15200, 14300, 13500,
	            12300, 11400, 9600, 9330, 9040, 8750, 8480, 8310, 7920, 7350, 7050, 6850, 6700, 6550,
	            6400, 6300, 6050, 5930, 5800, 5660, 5440, 5240, 5110, 4960, 4800, 4600, 4400, 4000,
	            3750, 3700, 3600, 3500, 3400, 3200, 3100, 2900, 2700
	        ];
	        if (spectre != null && spectre.length > 1) {
	            var spec2 = spectre.substring(0, 2);
	            for (var i = 0; i < tspec2.length; i++)
	                if (tspec2[i] == spec2)
	                    return (ttemp[i]);
	        }
	        var spec1;
	        if (spectre != null && spectre != "")
	            spec1 = spectre.substring(0, 1);
	        else
	            spec1 = null;
	        if (spec1 == "0")
	            return (35000);
	        else if (spec1 == "B")
	            return (13500);
	        else if (spec1 == "A")
	            return (8100);
	        else if (spec1 == "F")
	            return (6500);
	        else if (spec1 == "G")
	            return (5400);
	        else if (spec1 == "K")
	            return (4000);
	        else if (spec1 == "M")
	            return (2600);
	        else {
	            console.log("spectre non trouvé dans la table: " + spectre);
	            return (5400);
	        }
	    }

// If the effective temperature of the star and/or the radius star are unknown,
// we use the spectral class to calculate the equilibrium temperature of the planet.

getTeq=function(planet, tstar, rstar, a, spec) {
	
	var TeqK = "unknown";
	
	if (tstar == null || tstar == "") {
		console.log(planet+" "+"tstar was missing");
		
		if (spec == null || spec == "") {
			console.log(planet+" "+"spec was missing");
			spec = "G"; // like our sun
		}
		
		tstar = calcTstar(spec);
		console.log(planet+" : "+spec+" >>> "+tstar+ "K");
		
	}
	
	if (rstar == null || rstar == "") {
		console.log(planet+" "+"rstar is missing");
		// rstar = 1.65;
	}
	
	if (a == null || a == "") {
		console.log(planet+" "+"semi major axis is missing");
		// a = 8.45 AU is the solar system average 
	}
	
	TeqK = calcTeq(tstar, rstar, a, planet); // effective/equilibrium temperature
	
	return TeqK;
}

// get thermal type of the planet

getThermalType=function(TsK) {
	
	var TsC = TsK-273.15;
	
	switch(true) { 
			
			case (TsC >= -50) && (TsC <= 100) :
				return "warm";
			case (TsC > 100) :
				return "hot";
			case (TsC < 50) :
				return "cold";
			default :
				return "unknown";
	}	
}

// calculate eq. temp 
calcTeq=function(tstar, rstar, dga) {
		var albedo = 0;
		// convert R from [RSol] to [UA]
		var rstar_UA = rstar * 0.00465247;
		return tstar * Math.sqrt(rstar_UA/(2*dga)) * (1-albedo)^0.25;
}

// calculate surface temp
calcTs=function(tstar, rstar, dga) {
		var albedo = 0.3;
		var e = 0.1;
		// convert R from [RSol] to [UA]
		var rstar_UA = rstar * 0.00465247;
		return tstar * Math.sqrt(rstar_UA/(2*dga)) * ((1-albedo)/(1-e))^0.25;
}

// get naming for detection mode

getDetectionMode=function(code) {

var a = code.split(",");

var detectedby = [];

var code="";

for (i = 0; i < a.length; i++) {

code = a[i].replace(/^\s+|\s+$/gm,'');

switch (code) {

      case 'Other':
        
			case 'IRXS':
				
			case 'TTV':
					
			case 'AST':
					
			case 'TR':
					
			case 'DI':
									
			case 'GML':

			case 'PT':
             
      case 'RV':

        detectedby.push(langResources[code]); 
        break;

			case '3':

				detectedby.push("!"); 
				break;				
			
			case '':

				detectedby.push("-");
				break;	

			default:

        detectedby.push(code+"?");
				break;	
			}	
}

	return detectedby.join(", ");

}

// formating functions

round=function(num, precision) { 
  		var div = Math.pow(10, precision); 
  		return Math.ceil(num*div)/div;
	}

formatNumber=function(n) {   
    	
    	if (n == null || n == "") return "-";
    	return round(n, 3);
    	
	}

formatNumber5dec=function(n) {   
    	
    	if (n == null || n == "") return "-";
    	return round(n, 5);
    	
	}



	// set up for datatable

  var colLabels = ["selectbox", "planet","planetstatus","category","detectionmode","discoveryyear","period","semimajoraxis","eccentricity",
             "inclination","omega","molecules","m_pl","r_pl", "teq", "density", /* "temp_eq", */ /* "log_g", */
             "starname","distance","ra","dec","mag_v","metallicity","m_et","r_et","spec_type","age","temp_eff", "detecteddisk","nbplanets"];
  
  var infobulles = langResources["infobulles"];
   
   $.fn.dataTable.TableTools.buttons.copy_to_div = $.extend(
  true,
  $.fn.dataTable.TableTools.buttonBase,
  {
    "sNewLine":    "<br>",
    "sButtonText": "Copy to element",
    "target":      "",
    "fnClick": function( button, conf ) {
      $(conf.target).show(); 
      $(conf.target).html( this.fnGetTableData(conf) );
    }
  }
  
   );

   $('#copy').hide();

  var noSortColumnIndice = [];
  var text = $('#htmlTable tr th:first').text();
  var noSearchColumnIndice = [];
  $("thead th span").each(function() {
    var cpt = $(this).attr("caption");
    
    if ( !(cpt == "exoplanet" || cpt == "category"|| cpt == "star" ) ) { noSearchColumnIndice.push($(this).index()); }
  });
  
   var oTable;
   
   // init the datatable
   

   initDt = function(jsonsrc)
   {
    console.log("initDt with"+jsonsrc);
    oTable = $('#exoplanets').dataTable( {
      
        "bProcessing": true,
        
        
        
        "sAjaxSource": jsonsrc,
        
        "sDom": 'CT<"clear">lfrtip',
        
        "oColVis": {
          "bClose": true, "sClose": "Close Menu",
          "buttonText": langResources["displaycolumns"],
      "aiExclude": [ 0 ],
            "showAll": langResources["allcolumns"],
            "showNone": langResources["none"] 
    },
         
         "oTableTools": {
          "sRowSelect": "multi",
          "sRowSelector": 'td:first-child',
          "sSwfPath": "./swf/copy_csv_xls.swf",
          "fnRowSelected": function ( nodes ) {
                // The row was selected
           },
            "fnRowDeselected": function ( nodes ) {
                // The row was deselected
            },
            "aButtons": [ 
               /* 
                 {
                    "sExtends":     "select_all",
                    "sButtonText": "Sélectionner tout"
                },
                 {
                    "sExtends":     "select_none",
                    "sButtonText": "Désélectionner tout"
                },
                */
                 {
                    "sExtends":     "copy",
                    "mColumns": [1],
                    "bFooter": false,
                    "target":      "#copy",
                    "sButtonText": langResources["copyselectedlist"]
                },
                 {
                    "sExtends":     "xls",
                    "bFooter": false,
                    "sButtonText": langResources["savetoxls"]
                }
            ]
        },
        
       

     // called on every draw event (sort, filter, pagination)
     fnDrawCallback: function () {
      
      $('#exoplanets tbody tr td').each( function() {
      var sTitle;
      var nCell;
    
      nCell = this.cellIndex;
      
      
      sTitle = infobulles[colLabels[nCell]];
      
      if (sTitle == undefined) sTitle = "???";
    
       } );
  
       // Apply the tooltips
       $('#exoplanets tbody tr td[title]').tooltip( {
        "delay": 0,
        "track": true,
        "fade": 250
       } );
  
    },
    
    "oSearch": {"sSearch": categ+" "+nbplanets},
    
       "iDisplayLength": 10,
      "aLengthMenu": [[10, 50, 100, -1], [10, 50, 100, langResources["all"] ]],
      
      aoColumnDefs: [{
        aTargets: ["_all"],
        
        fnCreatedCell: function(nTd, sData, oData, iRow, iCol) {
          
          sTitle = infobulles[colLabels[iCol]];
      
      if (sTitle == undefined) sTitle = "???";
      
      nTd.title = sTitle;
        }
    },{
       "aTargets" : noSortColumnIndice,
        bSortable: false
    },{
      "bSearchable" : false,
      aTargets : noSearchColumnIndice
    }],
    
    /*
      "aoColumnDefs" : [
       {
      "bSortable" : false,
      "aTargets" : noSortColumnIndice
    },{
      "bSearchable" : false,
      aTargets : noSearchColumnIndice
    },
      
      ],
    */
      "aoColumns": [    
        
        
         { "mData": null,
           "bSortable": false
            },
         
            { 
              "mData": "planet",           
                fnRender: function ( obj ) {
          
          
          qs = "?planet=" + encodeURIComponent(obj.aData.planet) + "&star=" + encodeURIComponent(obj.aData.starname) + "&action=view";
          
          if (langparam != undefined) qs = "?lang="+ langparam + "&" + "planet=" + encodeURIComponent(obj.aData.planet) + "&star=" + encodeURIComponent(obj.aData.starname) + "&action=view";
          var linkstr = '<a target="_parent" href="../orbiteur/orbiteursim.html'+qs+'">'+obj.aData.planet+'</a>';
          /*
          if (
            ((obj.aData.semimajoraxis==null || obj.aData.semimajoraxis==0) && ((obj.aData.m_et==null || obj.aData.m_et==0) || (obj.aData.period==null || obj.aData.period==0)))
          ||  (obj.aData.period==null)
          ||  (obj.aData.period==0)
            )
            */
          
          if ((obj.aData.semimajoraxis>30) || (obj.aData.semimajoraxis<0.01)) linkstr = obj.aData.planet;
          
          var notOK = isNaN(obj.aData.semimajoraxis) || ( isNaN(obj.aData.period) || isNaN(obj.aData.m_et) );
          if (notOK) linkstr = obj.aData.planet; else linkstr = '<a target="_parent" href="../orbiteur/orbiteursim.html'+qs+'">'+obj.aData.planet+'</a>';
          return linkstr;
        }
            },
        
        
         { "mData": "planetstatus",
              fnRender: function ( obj ) {
                
                var status;

                switch ( obj.aData.planetstatus ) {
                  case "1": 
                    
                    status = langResources["confirmed"];

                    break;

                  case "2": 
                    
                    status = langResources["candidate"];

                    break;

                  case "4": 
                    
                    status = langResources["unconfirmed"];

                    break;

                  default: 
                    
                    status = "";

                    break;  
                }

                return status;

              }
               },
                
        { "mData": "category",
              fnRender: function ( obj ) {
                
                var thermaltype;
                var masstype;
                
                var tmp = obj.aData.category.split("-");
                
                switch ( tmp[0] ) {
                  case "hot": 
                    thermaltype = langResources[tmp[0]];
                    break;
                  case "warm": 
                    thermaltype = langResources[tmp[0]];
                    break;
                  case "cold":          
                    thermaltype = langResources[tmp[0]];
                    break;
                  default: 
                    thermaltype = ""; 
                    break;  
                }
                
                switch ( tmp[1] ) {
                  case "mercurians": 
                    masstype = langResources[tmp[1]];
                    break;
                  case "subterrans": 
                    masstype = langResources[tmp[1]];
                    break;
                  case "terrans": 
                    masstype = langResources[tmp[1]];
                    break;
                  case "superterrans": 
                    masstype = langResources[tmp[1]];
                    break;
                  case "neptunians": 
                    masstype = langResources[tmp[1]];
                    break;
                  case "jovians": 
                    masstype = langResources[tmp[1]];
                    break;
                  default: 
                    masstype = ""; 
                    break;    
                }
                
                if (langparam=="en") return thermaltype+" "+masstype
                else return masstype+" "+thermaltype;
    
              }
        
        
        }, 
        
           
            { "mData": "detectionmode",
              fnRender: function ( obj ) {
                return getDetectionMode( obj.aData.detectionmode );
              }
              
            },
             
            { "mData": "discoveryyear" },
            { 
              "mData": "period",
               sType: "numeric",
            fnRender: function ( obj ) {
          return formatNumber(obj.aData.period);
        } 
            },
            { 
              "mData": "semimajoraxis", 
              sType: 'numeric',
            fnRender: function ( obj ) {      
                
              if (obj.aData.semimajoraxis == null || obj.aData.semimajoraxis == 0) {
                
                if (!isNaN(obj.aData.m_et) && !isNaN(obj.aData.period)) {
                  // G = 6.67384e-11;
                  var period = obj.aData.period/365.25;
                  /* a3 = G*(obj.aData.m_et*obj.aData.period*obj.aData.period)/(4*Math.PI*Math.PI); */
                  var a3 = (period*period) * obj.aData.m_et;
                  var a = Math.pow(a3,1/3);
                  return "<font color='orange'>"+formatNumber(a)+"</font>";
                }
                
                
              }
  
          return formatNumber(obj.aData.semimajoraxis);
        } 
            },
            { "mData": "eccentricity", 
              sType: 'numeric',
            fnRender: function ( obj ) {
          return formatNumber(obj.aData.eccentricity);
        } 
            },
            { "mData": "inclination", 
              sType: 'numeric',
            fnRender: function ( obj ) {
          return formatNumber(obj.aData.inclination);
        } 
            },
            
            { "mData": "omega" , 
              sType: 'numeric',
            fnRender: function ( obj ) {
          return formatNumber(obj.aData.omega);
        } 
            },
            
            { "mData": "molecules" },
            
            { "mData": "m_pl", 
              sType: 'numeric',
            fnRender: function ( obj ) {
              if (obj.aData.m_pl<0.001) return formatNumber5dec(obj.aData.m_pl);
          else return formatNumber(obj.aData.m_pl);
        }     
            },
            { "mData": "r_pl", 
              sType: 'numeric',
            fnRender: function ( obj ) {
          return formatNumber(obj.aData.r_pl);
        } 
            },
            
            { "mData": "teq",
                sType: 'numeric',
            fnRender: function ( obj ) {
              return "<font color='orange'>"+formatNumber(obj.aData.teq)+"</font>";
        } 
            },
            
             { "mData": "density",
                sType: 'numeric',
            fnRender: function ( obj ) {
              return "<font color='orange'>"+formatNumber(obj.aData.density)+"</font>";
        } 
            },
            
            /*
            { "mData": "temp_eq", 
              sType: 'numeric',
            fnRender: function ( obj ) {
              
              var planet = obj.aData.planet;
              var a = obj.aData.semimajoraxis;
              var tstar = obj.aData.temp_eff;
              var rstar = obj.aData.r_et;
              var d = a;
              var spec = obj.aData.spec_type;
              
              var albedo = 0;
              // calculate the equilibrium temperature with the parameters with have
          var TeK = getTeq(planet, tstar, rstar, d, spec);
          var type = getThermalType(TeK);
          return formatNumber(TeK);
        } 
            },
            */
                
            /* { "mData": "log_g" }, */
           
           { 
              "mData": "starname",           
                fnRender: function ( obj ) {
          
          qs2 = "?planet=" + "All" + "&star=" + encodeURIComponent(obj.aData.starname) + "&action=view";
          
          if (langparam != undefined) qs2 = "?lang="+ langparam + "&" + "planet=" + "All" + "&star=" + encodeURIComponent(obj.aData.starname) + "&action=view";
          
          var linkstr2 = '<a target="_parent" href="../orbiteur/orbiteursim.html'+qs2+'">'+obj.aData.starname+'</a>';
      
          if ((isNaN(obj.aData.semimajoraxis) || isNaN(obj.aData.period))) linkstr2 = obj.aData.starname;
          if ((Number(obj.aData.semimajoraxis)>30) || (Number(obj.aData.semimajoraxis)<0.01)) linkstr2 = obj.aData.starname;
          if ((obj.aData.period==null || obj.aData.period==null)) linkstr2 = obj.aData.starname;
          
          
          if ((obj.aData.semimajoraxis>30) || (obj.aData.semimajoraxis<0.01)) linkstr = obj.aData.planet;
          var notOK = isNaN(obj.aData.semimajoraxis) || ( isNaN(obj.aData.period) || isNaN(obj.aData.m_et) );
          if (notOK && obj.aData.nbplanets<2) linkstr = obj.aData.planet; else linkstr2 = '<a target="_parent" href="../orbiteur/orbiteursim.html'+qs2+'">'+obj.aData.starname+'</a>';
          
          return linkstr2;
        }
            },
             
            
            { "mData": "distance", 
              sType: 'numeric',
            fnRender: function ( obj ) {
          return formatNumber(obj.aData.distance);
        } 
            },
            
              { 
              "mData": "ra",
               sType: 'numeric',
            fnRender: function ( obj ) {
          return formatNumber(obj.aData.ra);
        } 
            },
            
            { 
              "mData": "dec",
               sType: 'numeric',
            fnRender: function ( obj ) {
          return formatNumber(obj.aData.dec);
        } 
            },
            
            { 
              "mData": "mag_v",
               sType: 'numeric',
            fnRender: function ( obj ) {
          return formatNumber(obj.aData.mag_v);
        }           
             },
             
            { "mData": "metallicity",
               sType: 'numeric',
            fnRender: function ( obj ) {
          return formatNumber(obj.aData.metallicity);
        } 
            },
            
            { "mData": "m_et" ,
               sType: 'numeric',
            fnRender: function ( obj ) {
          return formatNumber(obj.aData.m_et);
        }     
            },
            
            { "mData": "r_et" ,
               sType: 'numeric',
            fnRender: function ( obj ) {
          return formatNumber(obj.aData.r_et);
        } 
            },
            
            { "mData": "spec_type" },
            
            { "mData": "age" ,
               sType: 'numeric',
            fnRender: function ( obj ) {
          return formatNumber(obj.aData.age);
        } 
            },
            
            { "mData": "temp_eff" ,
               sType: 'numeric',
            fnRender: function ( obj ) {
          return formatNumber(obj.aData.temp_eff);
        }      
           },
           
           { "mData": "detecteddisc",
              fnRender: function ( obj ) {
                return getDetectionMode( obj.aData.detecteddisc );
              }
              
            },
            
            { "mData": "nbplanets",
              fnRender: function ( obj ) {
              return "N"+obj.aData.nbplanets;
              }
            },  
            
            
        ],
      
      "oLanguage" :   langResources["oLanguage"]
       

});   

}

initDt("./../sysdata/json/_systemsg.json");

      } );