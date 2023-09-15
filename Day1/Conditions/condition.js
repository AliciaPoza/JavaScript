//! CONDITION avec IF ELSE
// ? Avec if on va pouvoir créer un bloc de code qui s'exécute si une condition est remplie
function calculTableResto(nombreDeReservation){
    if (nombreDeReservation>=30){
        return `il nous reste pas beaucoup de tables, ça serait pour combien de personnes`;
    }
    else if(nombreDeReservation<10){
        return `il nous reste une table`
    }
    else{
        return `On est fermé !`
    }
};
console.log(calculTableResto(50));

//! EXERCICE IF ELSE
// TODO: Créer une fonction qui reçoit un tableau de 3 notes et qui calcule une moyenne entre ces 3 notes
// TODO: Dans cette fonction, SI la moyenne est supérieur ou égale à 15 on renvoi une string (très bien)
// TODO: Dans cette fonction, SINON SI la moyenne est supérieure ou égale à 10 on renvoi une string (assez bien)
// TODO: Dans cette fonction, SINON renvoi une string (refus)
function moyenne([note1, note2, note3]) {
    let moyenne = (note1 + note2 + note3)/3;
    if (moyenne>=15){
        return `Moyenne de : ${moyenne} : Trés bien`;
    } else if (moyenne>=10){
        return `Moyenne de : ${moyenne} : Assez bien`;
    } else {
        return `Moyenne de : ${moyenne} : Refus`;
    }
}
console.log(moyenne([15, 17.5, 6]));
//* Une autre solution:
function msgMentionBacOfficiel(tabNotes) {
    let moyenneCalc = (tabNotes[0]+tabNotes[1]+tabNotes[2])/tabNotes.length;
    console.log('la Moyenne au Bac : ',moyenneCalc);
    if (moyenneCalc >=16) {
        return "Tu as Gagné !"
    } else if (moyenneCalc >=10 && moyenneCalc<16) {
        return 'Assez Bien'
    } else {
        return 'YO T NUL GRO'
    }
};
console.log(msgMentionBacOfficiel([13,6,3]));