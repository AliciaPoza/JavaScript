// 1 - Créez une classe Personne
// Intitulé: Créez une clase Personne avec les propiétés nom et âge.
// Ajoutez une méthode sePresenter qui affiche "Je m'appelle [nom] et j'ai [âge] ans."
class Personne{
    constructor(nom, age){
        this.nom = nom;
        this.age = age;
    }
    sePresenter(){
        console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
    }
}
const personne1=new Personne("Alicia", 31);
personne1.sePresenter();

// 2 - Créez un prototype pour les objets Chien
// Intitulé: Créez un prototype Chien avec les propriétés nom et race.
// Ajoutez une méthode aboyer qui affiche "Woof ! Je suis [nom], un[race]."
function Chien(nom, race){
    this.nom=nom;
    this.race=race;
}
Chien.prototype.aboyer = function(){
    console.log(`Woof ! Je suis ${this.nom}, un ${this.race}.`);
};
const chien1 = new Chien("Iron", "Staff");
chien1.aboyer();

// 3 - Créez une classe rectangle
// Créez une classe rectangle avec les propriétés largeur et hauteur.
// Ajoutez des méthodes pour calculer la superficie et le périmètre du rectangle.
class Rectangle{
    constructor(largeur, hauteur){
        this.largeur=largeur;
        this.hauteur=hauteur;
    }
    calculerSuperficie(){
        return this.largeur*this.hauteur;
    }
    calculerPerimetre(){
        return 2 * (this.largeur+this.hauteur);
    }
}
const monRectangle= new Rectangle(6, 13);
console.log("Superficie du rectangle : " + monRectangle.calculerSuperficie());
console.log("Périmètre de rectangle : " + monRectangle.calculerPerimetre());