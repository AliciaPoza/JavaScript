//TODO ********************
//TODO EXERCICE DOM setTimeout
//TODO ********************
//* Dans une page web, en utilisant la fonction settimeout, faire en sorte qu'au bout de 3 secondes
//* (soit 3000ms), un titre apparait sur la page et des modifications du sytle sont effectuées.
document.addEventListener('DOMContentLoaded', function() {
    const myTitle = document.getElementById('myTitle');

    setTimeout(() => {
        myTitle.textContent = "Et coucou !"; // Nouveau titre <h1>
        myTitle.style.color = 'red'; // Nouvelle couleur de <h1>
        document.documentElement.style.background = 'linear-gradient(to bottom, pink, yellow)'; // Nouveau background
    }, 3000); // après 3 secondes
});