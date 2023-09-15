//! *************************
//! WEB STORAGE
//! *************************
//? Dans le navigateur on peut profiter de plusieurs espaces pour pouvoir sauvegarder des données, vous
//? connaissez dékà (surtout depuis RGPD) les cookies qui permettent par exemple d'enregistrer
//? un email et un mot de passe dans un formulaire, ou reprendre l'épisode d'une série au moment où
//? nous l'avions quitté, etc.
//? Dans l'exemple suivant nous allons nous intéresser au local Storage (la façon de l'utiliser est assez
//? similaire pour la session et les cookies)
//* Gardez en tête que ces espaces de stockage ne sont pas définitif, l'utilisateur peut toujours aller
//* dans les paramètres du navigateur (ou si il est navigation privée) et supprimer ces espaces de stockage,
//* de plus ils ont une capacité de stockage limitée.
//* Local Storage, évidemmment il y a un objet localStorage avec des fonctions natives de JS permettant
//* de gérer cet espace de mémoire commun à tous les navigateurs.
//! La fonction setItem()
//? Qui prend 2 paramètres, (une clé et une valeur), ci dessous dans le local Storage on sauvegarde
//? une clé 'lastname' avec une valeur à 'smith'
// localStorage.setItem("lastname","Smith");
//!La fonction getItem()
//? Qui prend 2 paramètres, (une clé), ci dessous dans le local Storage on récupère le contenu
//? de la clé 'lastname'
// localStorage.getItem("lastname");
//TODO *********************
//TODO EXERCICE : LocalStorage
//TODO *********************
//* En se basant sur l'exercice précédent (le mini éditeur de texte)
//? Dans une page web avec un formulaire (ou au moins un textarea)
//? Dans votre programme JS
//TODO Stocker l'input ou le textarea dans une variable monTxt
//TODO Stocker la div (ou le tire ou paragraphe, etc.) dans une variable rendu
//TODO A la valeur du textarea assigner que l'on récupère dans le local Storage sous le nom (la clé)
//TODO "monSuperTexte"
//TODO Ensuite mettre en place une condition: Si la valeur de monTxt est défini Alors on le innerText
//TODO du rendu récupère dans le local Storage sous le nom (la clé) "monSuperTexte"
//TODO Aprés cette condition mettre en place une écoute de l'évènement du clavier sur monTxt et faire:
//TODO - Placer dans le local Storage la valeur de monTxt sous le nom "monSUperTexte"
//TODO - Afficher la valeur de monTxt dans le rendu
document.addEventListener('DOMContentLoaded', function() {
    const monTxt = document.getElementById('myTextarea');
    const rendu = document.getElementById('output');
    const texteLocalStorage = localStorage.getItem('monSuperTexte');
    if (texteLocalStorage) {
        rendu.textContent = texteLocalStorage;
    }
    monTxt.addEventListener('keyup', () => {
        const texteSaisi = monTxt.value;
        localStorage.setItem('monSuperTexte', texteSaisi);
        rendu.textContent = texteSaisi;
    });
});