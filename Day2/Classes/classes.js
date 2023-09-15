//! ***********************************
//! LES CLASSES
//! ***********************************

//? Pré requis : Les objets
//? Les classes sont un élément essentiel de le Programmation Orientée Objet, pour résumer le concept
//? les classes vont nous permettre de créer plus facilement et rapidement plusieurs objets avec des caractéristiques,
//? d'architectures similaires.
//* Par exemple si une application gère des utilisateurs on peut défénir une classe "user" et pour chaque user
//* on gère les données suivantes: un nom, un mail, un num de téléphone.
//! Pour créer / construire des nouveaux user, le système de class utilise une fonction qui s'appelle constructor
//! (construct dans d'autres langages).
//* On va pouvoir facilement créer de nouveaux user (des nouvelles instances de la classe user).

//! ***********************************
//! SYNTAXE
//! ***********************************

//? Donc côté code, on crée notre class UserProfile, pour pouvoir créer des nouvelles instance on renseigne
//? les données dont on a besoin, que l'on recevra en paramètre (nameUser, mailUser, phoneUser).
//* Le mot clé this va représenter l'objet courant, celui que l'on est entrain de créer, c'est le contexte.
//* Ici pour résumer on assigne aux propriétés de notre classe les valeurs qu'on va recevoir en paramètre.

//TODO EXEMPLE
class UserProfile {
    constructor(nameUser, mailUser, phoneUser){
        this.nameUser = nameUser;
        this.mailUser = mailUser;
        this.phoneUser = phoneUser;
    }
    getProfileInfo(){
        return `infos de l'utulisateur :
            son nom : ${this.nameUser}
            son mail : ${this.mailUser}
            son tel : ${this.phoneUser}`;
    }
}
//* BONUS: On a écrit une fonction au sein de la class, c'est une méthode de classe et elle ne pourra
//* s'utiliser QUE sur des objets (des nouvelles instances) de cette classe.
//* Une fois qu'on a défini la structure de notre classe on va pouvoir utiliser le constructeur pour
//* créer un nouvel utilisateur en faisant new UserProfile().
const exampleUser1 = new UserProfile(`José`, `jose@gmail.com`, `0494678235`);
const exampleUser2 = new UserProfile(`Sarah`, `sarah@gmail.com`, `0791620390`);
exampleUser2.getProfileInfo();
//* Dans notre cas il n'y aura que sur des new UserProfile que l'on pourra utiliser la méthode
//* getProfileInfo().

//! ***********************************
//! L'HERITAGE
//! ***********************************

//? Avec les classes on peut également profiter d'un système d'héritage, cela signifie que nous
//? pourvons étendre (extends) les propriétés, les méthodes d'une classe vers une autre.
//* Par exemple dans notre application on gère déjà des utilisateurs, mais on veut aussi gérer des 
//* utilisateurs un peu plus sprécifiques: des Admins, les admins ils auraient les mêmes propriétés
//* que les utilisateurs (un nom, un mail, un téléphone) mais avec des informations en plus
//* (le secteur dans lequel l'admin travaille et son téléphone personnel) on créer une nouvelle
//* classe "enfant" qui hérite des propriétés et des méthodes d'une classe parent.
//! Une classe enfant peut hériter d'une classe parent mais l'inverse n'est pas possible. Sur une instance
//! de UserAdmin on pour utiliser getProfileInfo() mais sur une instance de UserProdile on ne peut pas
//! utiliser getAdminInfo().
//TODO Dans le code on va utiliser extends() et super().
class UserAdmin extends UserProfile{
    constructor(unNom, unMail, unPhone, sector, personnalPhone){
        super(unNom, unMail, unPhone); // Appel au constuctor du parent
        this.sector = sector;
        this.personnalPhone = personnalPhone;
    }
    getAdminInfo(){
        return `infos de l'utilisateur:
        son nom : ${this.nameUser}
        son secteur d'intervention : ${this.sector}
        son tel personnel : ${this.personnalPhone}`;
    }
}
const exampleAdmin1 = new UserAdmin(`Tim`,`tim@gmail.com`,`012345678`,`administration`,`069874318`);
console.log(exampleAdmin1.getAdminInfo());
console.log(exampleUser2.getProfileInfo());

//TODO =======================
//TODO EXO CLASS IMC
//TODO =======================

//? Créer un programme permettant de calculer l'IMC d'une personne
//TODO Créer une classe IMC avec un constructeur qui recevra un nom, un poids, une taille
//TODO Créer une fonction de calcul d'IMC, qui retourne le résultat du calcul (à 2 nombre après la virgule)
//TODO Créer une fontion d'affichage display, elle a pour rôle d'afficher en console:
//TODO      Le nom de la personne, son poids, sa taille et son imc dans une phrase
//TODO En dehors de la class (donc dans le programme principal), récupérer la variable list (un tableau de nouvelle instances de la class)
//TODO Trouver un moyen de parcourir les éléments dans la variable list, sur chaque élément utiliser la fonction display
class Imc {
    constructor(nom, poids, taille){
        this.nom = nom;
        this.poids = poids;
        this.taille = taille;
    }
    calculerImc(){
        const imc = this.poids / (this.taille*this.taille);
        return imc.toFixed(2);
    }
    display(){
        const imc = this.calculerImc();
        console.log(`${this.nom} (${this.poids} kg, ${this.taille} M) a un IMC de: ${imc}`);
    }
}
let list =[
    new Imc(`Sébastien Chabal`, 135, 1.7),
    new Imc(`Escaladeuse`, 45, 1.68),
    new Imc(`JOJO`, 300, 2),
    new Imc(`Gontrand`, 90, 1.75),
    new Imc(`Colonel Clock`, 200, 1.75),
    new Imc(`Josiane de la Vega`, 99, 1.55),
];
for(const personne of list){
    personne.display();
}

//TODO =======================
//TODO EXO CLASS PME
//TODO =======================
//* CDC
//* Un salarié à un nom, un prénom, un âge, un salaire mensuel
//* Il est payé sur N mois.
//* En plus il a XXX de charges
//* Une PME c'est un nom, une équipe de plusieurs salariés
//* Grace à ses ventes elle a des revenues R
//* Mais aussi ... :
//* - des frais frixes FF (impôts, etc.)
//* - des fais d'achats de matériel et de logiciel FA
//TODO Créer une classe Pme et une classe Employee
//TODO Utiliser des fonctions
//TODO Faire le bilan annuel de l'entreprise et l'afficher en console.
//TODO DETAILS : 
//* - 3 salariés qui gagnent par mois : 2000, 3000 et 4000 euros
//* - R = 300000 (trois cent mille)
//* - FF = 20000 (vingt mille)
//* - FA = 50000 (cinquante mille)
//* - N = 12
//* - XXX = 90%
class Employee{
    constructor(nom,prenom,age,salaireMensuel){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.salaireMensuel = salaireMensuel;
    }
    calculerSalaireAnnuel(){
        return this.salaireMensuel * 12;
    }
}
class Pme{
    constructor(nom, equipe, revenus, fraisFixes, fraisAchats){
        this.nom = nom;
        this.equipe = equipe;
        this.revenus = revenus;
        this.fraisFixes = fraisFixes;
        this.fraisAchats = fraisAchats;
    }
    calculerCharges(){
        let chargesTotales = 0;
        for (const employe of this.equipe){
            chargesTotales += employe.calculerSalaireAnnuel();
        }
        return chargesTotales * 0.9;
    }
    calculerBeneficeAnnuel(){
        return this.revenus - this.fraisFixes - this.fraisAchats - this.calculerCharges();
    }
    bilanCalculed(){
        console.log(`${this.nom}: Cout initial: ${this.fraisFixes + this.fraisAchats}`);
        console.log(`${this.nom}: Cout total equipe: ${this.calculerCharges()}`);
        console.log(`${this.nom}: Ventes : ${this.revenus}`);
        console.log(`${this.nom}: Bilan : ${this.calculerBeneficeAnnuel()}`);
    }
}
const pme = new Pme(
    `Ma Petite Entreprise - `,
    [new Employee (`Duval`, `Paul`, 30, 2000),
    new Employee (`Durand`, `Alain`, 40, 3000),
    new Employee (`Dois`, `Sylvia`, 50, 4000),],
    300000,
    20000,
    50000);
pme.bilanCalculed();

//TODO =======================
//TODO EXO CLASS COMPTES BANCAIRES
//TODO =======================
//? Gérer des comptes en banques
//! Consignes
//TODO Créer une classe CompteBancaire avec des méthodes de crédit, de retrait, de visualisation de
//TODO l'état du compte bancaire en console, on doit pouvoir aussi faire un virement d'un membre à un autre.
//TODO Générer une exception pour ne pas dépasser le solde (pas de retrait ou de virement qui dépasse
//TODO le solde du compte bancaire).
//* DETAILS
//* Faire une scénario avec gestion de 3 comptes crédités à 1000€ chacun (Alex, Clovis, Marco)
//* Puis Alex retire 100
//* Puis Marco fait un virement de 300 à clovis
//* Enfin Alex tente un retrait de 1200
//* Afficher tous les soldes finaux
//* Ces comptes sont placés dans un tableau associatif de clients
class CompteBancaire{
    constructor(titulaire, solde=0){
        this.titulaire = titulaire;
        this.solde = solde;
    }
    crediter(montant){
        this.solde += montant;
        console.log(`Ajout de: ${montant} pour ${this.titulaire}`);
    }
    retirer(montant){
        if (montant <= this.solde){
            this.solde -= montant;
            console.log(`Retrait de: ${montant} pour ${this.titulaire}`);
        } else {
            throw new Error(`${this.titulaire}, retrait de: ${montant} refusé avec solde de ${this.solde}`);
        }
    }
    virement(destinataire, montant){
        if (montant <= this.solde){
            this.solde -= montant;
            destinataire.crediter(montant);
            console.log(`Virement de: ${montant} de: ${this.titulaire} vers: ${destinataire.titulaire}`);
        } else {
            throw new Error(`${this.titulaire}, virement de: ${montant} refusé avec solde de ${this.solde}`);
        }
    }
    afficherSolde(){
        console.log(`titulaire: ${this.titulaire}, solde: ${this.solde}`);
    }
}
const lesComptes = {
    Alex: new CompteBancaire(`Alex`),
    Clovis: new CompteBancaire(`Clovis`),
    Marco: new CompteBancaire(`Marco`),
};
// lecture du tableau associatif ou Objet[`truc`]
// Crédite et décrédit chaque compte
for (let compte in lesComptes) lesComptes[compte].crediter(1000);
// un retrait de 100 par Alex
lesComptes.Alex.retirer(100);
// un petit virement: Marco vire 300 à Clovis
lesComptes.Marco.virement(lesComptes.Clovis, 300);
// un petit retrait incorrect (doit déclencher erreur custom):
// Alex fait un retrait de 1200
try {
    lesComptes.Alex.retirer(1200);
} catch (error) {
    console.log(error.message);
}
// bilan: faire une description de tous les comptes en console (ou Dom?)
for (const compte in lesComptes) lesComptes[compte].afficherSolde();