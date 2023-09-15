//! *************************
//! API
//! *************************

//? Une API (Application Programming Interface ou Interface de Programmation Applicative) est une
//? interface, c'est-à-dire un ensemble de codes grâce auxquels un logiciel fournit des services à des
//? clients. Le principe et l'intérêt principal d'une API est de permettre à des personnes externes
//? de pouvoir réaliser des opérations complexes et cachant justement cette complexité.
//? En effet, en tant que développeur nous n'aurons pas besoin de connaître les détails de la logique
//? interne du logiciel tiers et n'y aura d'ailleurs pas accès directement puisque nous devrons justement
//? passer par l'API qui va nous fournir en JavaScript un ensemble d'objets et donc de propriétés
//? et de méthodes prêtes à l'emploi et nous permettant de réaliser des opérations complexes.
//? Il existe des API pour à peu près tout, les plus classiques que vous connaissez sont par exemple
//? les API Google Maps, la météo, l'API Geolocalisation qui va nous permettre de définir des données
//? de géolocalisation ou encore l'API Canvas qui permet de dessiner et de manipuler des graphiques
//? dans une page. Nous allons donc organiser notre code de manière à pouvoir contacter une API
//? qui va nous renvoyer une réponse contenant des données, il existe plusieurs types d'API qui renvoi
//? plusieurs type de réponse.
//? Actuellement la plupart des API sont des API restful cest-à-dire que le format des réponses
//? que renvoi l'API peut-être en JSON, HTML, XLT, Phyton, PHP ou simplement du texte brut.
//? Désormais, beaucoup d'API vont renvoyer des réponses au format JSON (JavaScript Object Notation)
//? une notation d'objet en JavaScript. (il existe une méthode native de JS pour 
//? transformer des objets JSON, la méthode .json()). Dans les fait techniquement pour nous une API ça sera simplement
//? une URL que l'on contactera via JavaScript pour en extraire les informations.

//! *************************
//! FETCH()
//! *************************
//? Dans JavaScript, nous allons utiliser la méthode fetch, qui nous permettra de contacter n'importe
//? qu'elle API via son URL, la méthode renvoi des objets de type Response ou Promise.
//? L'API fetch et sa méthode fetch() qui correspondent à la "nouvelle façon" d'effectuer des requêtes HTTP.

//! *************************
//! CODE ASYNCHRONE
//! *************************
//? Un autre concept essentiel lorsque nous allons contacter des API, c'est d'organiser notre code
//? de manière synchrone. L'idée c'est que de base nos programmes JavaScript sont en mode synchrone, à savoir
//? qui chaque ligne de code qui représente une instruction, celle-ci se termine ET seulement ensuite
//? JS passe à l'exécution de la ligne de code suivante. A la différence d'un code asynchrone
//? qui va permettre d'exécuter (ou finir d'exécuter une ou plusieurs instructions) en parallèle.

//! *************************
//! ASYNC AWAIT
//! *************************
//? On va pouvoir indiquer à JavaScript sur certaines instructions que celle ci soit complété avant de
//? passé à l'instruction suivante.
//? On déclare une fonction avec le mot clé async pour indiquer que le code contenu dans cette fonction
//? devra être exécuté de manière asynchrone et sur certaines instructions de cette fonction
//? utiliser le mot clé await (généralement sur la fonction fetch() et la fonction json() qui
//? manipule les données de l'API).

//TODO ************************
//TODO EXEMPLE
//TODO ************************
//! Ci dessous on contacte une url d'API météo pour afficher la latitude dans la page web:
//! pour cet exemple on fait une fonction fléchée anonyme stocké dans une variable (pour
//! s'habituer à ce genre de syntaxe), on précise avant la fonction qu'elle est en mode async puis quand
//! on contact l'API via fetch() on précise que cette instruction est en mode await elle doit se finir
//! totalement pour continuer la suite du programme, et quand on transforme la réponse de l'API
//! avec la fonction json(), afin de transformer la réponse en objet JavaScript (plus facile à manipuler),
//! idem on précise que c'est en mode await.
// TODO Récupérer la div dans une variable apiDiv
// TODO Créer une variable contactAPI à laquelle on assigne une fonction fléchée
// TODO Dans la F =>, créer une variable data à laquelle on assigne la fonction fetch()
// TODO fetch(), prend en param l'Url de l'API
// TODO Faire un console.log de data
// TODO Tjrs dans la F =>,créer une variable dataTransformed à laquelle on assigne data
// TODO Sur la variable data on utilise la fonction .json()
// TODO Faire un console log de dataTransformed
// TODO Tjrs dans la F =>,au InnerHTML de apiDiv, assigner la latitude dans dataTransformed
// TODO On éxecute notre fonction contactAPI quelquepart dans notre programme
const apiDiv = document.querySelector('.apiContact');
//de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
const contactApi =  async () => {
    //Data va récup Toutes les données de l'api
    const data = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
    console.log(data);
    //Plutot que de Travailler sur la réponse, on va la transformé pour 
    //qu'elle deviennt un OBJET JS (+ pratique)
    const dataTransformed = await  data.json();
    console.log(dataTransformed);
    apiDiv.innerText = dataTransformed.latitude;
};
contactApi();
//! Prenez le réflexe de toujours se référencer à la documentation officielle des API

//TODO *********************
//TODO EXERCICE POKEMONS
//TODO *********************
//! Afficher les 20 premiers pokemon dans une page web
const divApi = document.querySelector('.pokeListe');
const apiListe = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
        const data = await response.json();
        const pokemons = data.results;
        let pokemonNames = ``;
        pokemons.forEach(pokemon => {
            pokemonNames += `${pokemon.name}\n`;
        });
        pokemonNames = pokemonNames.slice(0, -2);
        divApi.innerHTML = `<pre>Les 20 premiers Pokémon sont :\n${pokemonNames}</pre>`;
    } catch (error) {
        console.log(`Une erreur s'est produite: `, error);
    }
};
apiListe();

//! *************************
//! THEN CATCH
//! *************************

//? Autre manière de gérer le code de manière asynchrone avec le chainage à la fonction fetch(),
//? des fonction(s) then() et enfin la fonction catch() pour capter et gérer les erreurs.
//? Si on adapte cette méthode à notre premier exemple d'API (celle de la météo)
//* METHODE avec Fetch + .then() + catch()
const apiDiv1 = document.querySelector(`.apiContact`);
console.log(apiDiv);
const contactApi1 = () => {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m`)
    .then(response => response.json())
    .then(data =>(apiDiv.innerText = data.latitude))
    .then(data => console.log(data))
    .catch(error => console.log(`Erreur custom : ` + error));
};
contactApi1();

//! *************************
//! GESTION DES ERREURS RESPONSE ET PROMISE
//! *************************

//? Pour aller encore plus loin on peut également, en plus des erreurs de la Promise, via JS gérer
//? les erreurs également au niveau de la response en accédant aux propriétés de l'objet rappelez-vous:
//? Ci dessous le code permet de gérer dès la response une erreur si l'url du fetch est invalide.
//? C'est mieux pour travailler en collaboratif et assurer un aspect qualitatif de votre code.

//* METHODE avec Fetch + then() + catch() + async await
const apiDiv2 = document.getElementById(`apiContact`);
const contactApi2 = () => {
    //! tester si jamais on se trompe dans l'url (mettre l'un des 2 fetch en commentaire)
    // fetch(`https://api.npms.io/on-s-est-trompe-dans-l-url`)
    //! Ci dessous une url valide
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m`)
    .then(async (response) => {
        const dataTransformed1 = await response.json();
        // Ici on gère aussi les erreurs au niveau de la réponse de l'API
        // Si dans la response la propriété ok n'est pas définie
        if (!response.ok){
            // on récupère les messages d'erreur ou la propriété statusText par default de la response
            const error = (dataTransformed1 && dataTransformed1.message) || response.statusText;
            // la fonction native de JS utilisé sur les objets de type Promise
            return Promise.reject(error);
        }
        apiDiv2.innerText = dataTransformed1.latitude;
    })
    .catch((error) => {
        console.log(error);
        // Ici on créer un error custom et l'objet error
        console.error(`Attention une fusée décolle depuis Grenoble`, error);
    });
};
contactApi2();