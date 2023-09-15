//TODO ************************
//TODO DOM F1
//TODO ************************
//? Dans une page j'ai un titre
//? Quand je click sur le titre ça le modifie avec un décompte
//? Une fois que le décompte à atteint 0, le titre dit "GO GO GO"
//* Pour cela vous pouvez aller regarder du côté de la fonction setInterval()
//* et pour pas créer une boucle infinie utiliser la fonction clearInterval()
document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.getElementById('myTitle');
    let interval;

    titleElement.addEventListener('click', function () {
        if (interval) {
            clearInterval(interval);
        }

        let count = 5;
        updateTitle(count);

        interval = setInterval(function () {
            count--;
            updateTitle(count);
        }, 1000);
    });

    function updateTitle(count) {
        if (count === 0) {
            clearInterval(interval);
            titleElement.textContent = "Rendez-vous au premier virage !";
        } else {
            titleElement.textContent = `${count}`;
        }
    }
});
