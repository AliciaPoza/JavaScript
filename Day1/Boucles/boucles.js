//? WHILE
// Correspond à répéter une ou plusieurs instructions TANT QUE une condition est vraie.
let unIndex = 0;
while (unIndex < 10){
    console.log(`Le nombre : ` + unIndex);
    unIndex++;
};

//? FOR
// Autre manière de créer des boucles avec for(), dans les paramètres on vous pouvoir directement initialiser
// un index, définir une condition et incrémenter l'index dans l'exemple ci-dessous nous allons faire une
// boucle visant à parcourir chaque case d'un tableau pour l'afficher en console.
let listeFilm = [`Ultime Décision`,`Mission Alcatraz`,`Attack Force`];
//! Boucle for, on défini un index (ici c'est i),
//! puis on définit une condition qui va définir le nombre de fois que le code dans la boucle sera exécutée
//! puis on définit comment on passe à la prochaine itération de la boucle (ici i++, on augmente de 1 le
//! numéro de la case que l'on console.log)
for(i=0;i<listeFilm.length;i++){
    console.log(`boucle FOR : `,listeFilm[i]);
};

//? FOR EACH
// Une autre alternative, la fonction forEach de JS automatise le parcours d'un tableau ou objet
// (sans que l'on ait à gérer un sytème d'indexation (i++))
// forEach va prendre en paramètre une fonction, cette même fonction pourra avoir un paramètre qui
// correspondra à chaque case parcourue. (Généralement dans la parenthèse de forEach on passe une fonction fléchée).
let listeFilms = [`Ultime Décision`,`Mission Alcatraz`,`Attack Force`];
// la méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
// On va choisir une variable temporaire pour parcourir les éléments du tableau
listeFilms.forEach(unFilm=>console.log(`boucle forEach Tableau : `,unFilm));

//? FOR ... OF
// Encore une alternative pour parcourir des variables tableaux (et autre) c'est la boucle for...of, qui
// de la même manière que dans l'exemple précédent dans lequel on va définir une variable temporaire pour
// parcourir chaque case du tableau:
for(let unElementTablo of listeFilms){
    console.log(`boucle FOR...OF : `,unElementTablo);
};

//? FOR ... IN
// Si l'on prend le cas des objets JS propose aussi un équivalent à for of (pour les variables de type Array),
// les boucles for in qui ont exactement la même utilisation que l'exemple précédent
const userData = {
    name: `John Doe`,
    email: `john.doe@exemple.com`,
    age: 25,
    dob: `08/02/1989`,
    active: true
};
// Il faut définir une variable temporaire qui stockera les clés (propriétés) de l'objet
for(let cleObjet in userData){
    console.log(`boucle FOR...IN (objet) : clé:${cleObjet} - valeur: ${userData[cleObjet]} `);
};
// Ici durant le parcours de l'objet chaque propriété ou clé seront stockées temporairement dans la variable
// cleObjet.
//! Rappel : pour accéder aux propriétés d'un objet on la notation en tableau associatif unObjet[quelque chose]

//? CONVERTIR DES OBJETS EN TABLEAUX
// Depuis sa version ES8 JS propose des fonctions utilisables sur les Objets qui vont pouvoir transformer leurs
// clés et ou leurs valeurs sous forme de tableau (pour utiliser les fonctions forEach ou map par exemple)
//! Parcourir les Objet (Depuis javaScript ES8)
//! La method .keys() qui convertit les clés d'un objet en tableau
//! La method .values() qui convertit les valeurs d'un objet en tableau
//! La method . entries() qui renvoit un tableau dans un tableau pour combiner clé - valeur
const keyUser = Object.keys(userData);
console.log(`les clés de l'objet converties en array : `,keyUser);
const valuesUser = Object.values(userData);
console.log(`les valeurs de l'objet converties en array : `,valuesUser);
const convertedDataUser = Object.entries(userData);
console.log(`les entrées de l'objet converties en array : `,convertedDataUser);
// De fait, une fois les objets convertis en tableau on peut ruser et utiliser forEach par exemple:
valuesUser.forEach((lesValeurs)=>{
    console.log(`FOREACH avec objet converti en tableau chaque valeurs : ${lesValeurs}`);
});
convertedDataUser.forEach(([key, value])=>{
    console.log(`FOREACH avec objet copnverti en tableau : ${key}: ${value}`);
});

//! EXERCICE 1 BOUCLES
// TODO : JS map phase 1
// TODO : côté template html rajouter plein de <p></p>
// TODO : On va récupérer TOUS les <p> de notre page dans une variable lestxt via getElementsByTagName
// TODO : On va faire un console log de lesTxt
const lesTxt = document.getElementsByTagName(`p`);
console.log(lesTxt);

//! EXERCICE 2 BOUCLES
// TODO : JS map phase 2
// TODO : Avec la méthode Array.from(), dans une nouvelle variable textesTab on va transformer notre htmlCollection en array
// TODO : On console log la variable textesTab
//* On transforme le HTMLCollection(qui contient tous nos <p>) en array classique
const textesTab = Array.from(lesTxt);
console.log(textesTab);

//! EXERCICE 3 BOUCLES
// TODO JS Map Phase 3 (on peut travailler sur un Array)
// TODO Sur textesTab on va utiliser la fonction map(),
// TODO dans map(), on va lui passer en paramètre une fonction fléchée qui elle a en paramètre une variable temporaire (nom de la variable au choix)
// TODO cette fonction fléchée elle va modifier le innerHTML ou innerText de la variable temporaire
//* On utilise une variable temporaire uneCase pour que map stock chaque <p> dans
//* Cette variable uneCase, on peut s'en servir pour modifer le innerHTML
const textesModif = textesTab.map((element) => {
    element.innerHTML += " (modifié)";
    return element;
});
console.log(textesModif);
//* OU
textesTab.map(uneCase => uneCase.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui similique dolores quo, non culpa, magnam excepturi dolore ratione voluptas, distinctio eligendi. Distinctio quam voluptatem recusandae dolor numquam voluptatibus perferendis officiis.`);
// textesTab.map(uneCase=>uneCase.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui similique dolores quo, non culpa, magnam excepturi dolore ratione voluptas, distinctio eligendi. Distinctio quam voluptatem recusandae dolor numquam voluptatibus perferendis officiis.`);

//? bonus syntaxe en fonction classique
//! Dans la fonction que l'on passe dans map(), si on met un second paragraphe
//! C'est l'index du tableau
// textesTab.map(function(x,1)){
//      x.style.color = `red`;
//      console.log(i)
// });

//? bonus syntaxe en fonction fléchée
textesTab.map((x,i) => {
    x.style.color = "red";
    console.log(i)
});
console.log(textesTab);

textesTab.map(toto => toto.addEventListener('click',function(){
    console.log("SUPER CA CLICK")
}));