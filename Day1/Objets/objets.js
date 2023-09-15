//? synthawe { unePropriete:uneValeur}
//? dans un objet on assigne avec : plutôt qu'avec =
let user = {
    id:3657826,
    'name':'Seagal',
    firstName:'Steven',
    badges: [`📽`,`👮`, `🎸`,`👘`, `🎤`] 
};
console.log(user);
// On peut accéder aux propriétés d'un objet avec la notation en point
console.log(user.name);
console.log(user.id);
// Ou avec la notation en tableau associatif
console.log(user[`id`]);
// On peut supprimer une propriété
//? delete user.badges;
// On peut ajouter simplement des propriétés dans un objet avec une assignation de valeur
// Si on assigne à une propriété déjà existante cela écrase la valeur
// Mais si on assigne à une propriété non existante cela crée la propriété
user.dps = 9999;
// Une fonction native de JS pour connaître les propriétés d'un objet, hasOwnProperty()
let menuDuJour={
    entree:`Bassine d'Aioli`,
    plat:`Rat Adulte`,
    dessert:`Île Fidji`
};
console.log(menuDuJour);
console.log(menuDuJour.hasOwnProperty(`entree`));
//! EXERCICE OBJECTS
//TODO : Faire l'exercice avec le User et les passions en mode objet
//TODO : (un objet user avec des propriétés pour le nom age et passions qui est lui aussi un objet avec 
//TODO 2 propriétés)
let userObjet={
    nom: `Pingu Le Ping`,
    age: 11,
    passions: {
        passion1: `pécher des poissons`,
        passion2: `bouder`
    }
};
console.log(`Nom de l'utilisateur: `+userObjet.nom);
console.log(`Âge de l'utilisateur: `+userObjet.age);
console.log(`Mes passions: `+ userObjet.passions.passion1 + ` et ` + userObjet.passions.passion2);