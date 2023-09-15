//TODO *******************************
//TODO EXERCICE : Réagir au clavier 1
//TODO *******************************
//! Dans ce là plusieurs évènements s'offrenr à nous keyup, keypress ou keydown, cela correspond
//! au différentes phase lorsque l'on presse une touche du clavier.
//! Généralement pour pouvoir exploiter ce que tape l'utlisateur on va priviligier l'évènement keyup.
//TODO Dans une page web : rajouter un formulaire (au moins un textarea)
//TODO Ce que l'on écrit dans textarea doit aussi s'afficher sur la droite en dehors du formulaire.
document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('myTextarea');
    const output = document.getElementById('output');
    if (textarea && output) {
        textarea.addEventListener('keyup', (event) =>{
            const text = event.target.value;
            output.textContent = text;
        });
    } else {
        console.error("Les éléments textarea ou output n'ont pas été trouvés.");
    }
});

//TODO *******************************
//TODO EXERCICE : Réagir au clavier 2
//TODO *******************************
//? Dans une page web on a un iput ou textarea et un bouton, faire en sorte que:
//? Au bout de 5 lettres tapées au clavier cela désactive le bouton
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('myInput');
    const button = document.getElementById('myButton');

    input.addEventListener('input', () => {
        if (input.value.length >= 5) {
            button.disabled = true;
        } else {
            button.disabled = false;
        }
    });
});