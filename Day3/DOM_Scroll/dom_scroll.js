//TODO *****************************
//TODO EXERCICE : REAGIR AU SCROLL
//TODO *****************************
//* Sur toute la page écouter l'évenement scroll, faire un console log de l'évènement ainqi que des console
//* log pour ces variables.
//* Mettez en place une variable scrollMax, dans laquelle on soustrait à document.body.scrollHeight, la variable
//* innerHeight,
//* Faire une variable onEst ou dans laquelle on stock un pourcentage à partir de scrollY et scrollMax
//* Puis faire en sorte d'assigner la variable onEstOu à la largeur de la div qui a la class "bar".
window.addEventListener('scroll', () => {
  const pageHeight = document.body.scrollHeight;
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY;
  const scrollMax = pageHeight - windowHeight;
  const onEstOu = (scrollPosition / scrollMax) * 100;
  
  // Utilisez le même sélecteur que dans votre code HTML (class "progress-bar")
  const scrollBar = document.querySelector('.progress-bar');
  
  scrollBar.style.width = `${onEstOu}%`;
  
  const scrollPercentageElement = document.getElementById('scrollPercentage');
  scrollPercentageElement.textContent = `Pourcentage de défilement : ${onEstOu.toFixed(2)}%`;
console.log(`
Hauteur page : ${document.body.scrollHeight}
Hauteur affichage : ${innerHeight}
Scroll Position : ${scrollY}`);
});