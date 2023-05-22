// BOUTONS RETOUR & SUIVANT
let actualStep = 0; // on déclare un état actuel, une variable de base

// on déclare nos éléments
const steps = document.getElementById("steps");
const previousButton = document.getElementById("previous"); // bouton retour
const nextButton = document.getElementById("next"); // bouton suivant
const stepsBodies = document.getElementsByClassName('buttons');

for(let i = 0; i < steps.childElementCount; i++){ // permet de parcourir les états
  steps.children[i].addEventListener('click', () => {
    setStep(i); // fonction pour changer d'état
  })
}

function setStep(number){
  actualStep = number; // mise à jour de l'état

  // condition pour modifier le texte du bouton suivant en fonction de l'état
  if(number == steps.childElementCount-1) {nextButton.innerText = 'Finaliser'; document.querySelector("#next").addEventListener("click",Capture); } 
  else {nextButton.innerText = 'Etape Suivante'; document.querySelector("#next").removeEventListener("click",Capture);  };
  // condition pour cacher le bouton précédent à la première étape
  if(number == 0) previousButton.classList.add('hidden');
  else previousButton.classList.remove('hidden');

  // modifier l'état et la visibilité
  for(let i = 0; i < steps.childElementCount; i++){
    if(i == number){
      steps.children[i].classList.add('active');
      stepsBodies[i].classList.remove('hidden');
    } else {
      steps.children[i].classList.remove('active');
      stepsBodies[i].classList.add('hidden');
    }
  }
}

previousButton.addEventListener('click', () => {
  if(actualStep >= 1) setStep(actualStep-1); // permet de revenir à l'étape précédente en cliquant
});

nextButton.addEventListener('click', () => {
  if(actualStep < 2) setStep(actualStep+1); // permet de passer à l'étape suivante en cliquant
});




// TYPOGRAPHIES
const fonts = ['Poppins', 'Arial', 'Belarius Serif'];
const colors = ['#ffffff', '#000000'];

const titleTypoChoices = document.getElementById('titleTypoChoices');
const titleColorChoices = document.getElementById('titleColorChoices');
const dateTypoChoices = document.getElementById('dateTypoChoices');
const dateColorChoices = document.getElementById('dateColorChoices');
const textTypoChoices = document.getElementById('textTypoChoices');
const textColorChoices = document.getElementById('textColorChoices');




// COULEUR DU TITRE
// liste d'éléments de couleur cliquables où chaque clic sur une couleur modifie la couleur du txt d'un élément avec la class "title"
for(let i = 0; i < colors.length; i++){ // boucle de répétition (d'itération)
  let color = document.createElement('div'); // 'div' = une couleur
  color.classList.add('choice');
  color.style.backgroundColor = colors[i]; // la couleur de chaque div est définie en fonction de la couleur actuelle de la boucle
  color.addEventListener('click', () => {
    setTitleColor(i); // nvlle fonct°
  });

  titleColorChoices.append(color); // la couleur est associé à l'élément déclaré en amont
  if(i == 0) setTitleColor(i); // la fonct° est appelée pour définir la couleur du titre initial
}

function setTitleColor(colorNumber){
  document.getElementsByClassName('title')[0].style.color = colors[colorNumber];
  // modifie la couleur du txt de l'élément ayant la class "title" pour correspondre à la couleur sélectionnée

  for(let y = 0; y < colors.length; y++) titleColorChoices.children[y]?.classList.remove('selected'); // permet de réinitialiser la sélection
  titleColorChoices.children[colorNumber].classList.add("selected");
}


// COULEUR DE LA DATE
for(let i = 0; i < colors.length; i++){
  let color = document.createElement('div');
  color.classList.add('choice');
  color.style.backgroundColor = colors[i];
  color.addEventListener('click', () => {
    setDateColor(i);
  });

  dateColorChoices.append(color);
  if(i == 0) setDateColor(i);
}

function setDateColor(colorNumber){
  document.getElementsByClassName('date')[0].style.color = colors[colorNumber];

  for(let y = 0; y < colors.length; y++) dateColorChoices.children[y]?.classList.remove('selected');
  dateColorChoices.children[colorNumber].classList.add("selected");
}


// COULEUR DU TEXTE
for(let i = 0; i < colors.length; i++){
  let color = document.createElement('div');
  color.classList.add('choice');
  color.style.backgroundColor = colors[i];
  color.addEventListener('click', () => {
    setTextColor(i);
  });

  textColorChoices.append(color);
  if(i == 0) setTextColor(i);
}

function setTextColor(colorNumber){
  document.getElementsByClassName('concert')[0].style.color = colors[colorNumber];
  document.getElementsByClassName('infos')[0].style.color = colors[colorNumber];
  document.getElementsByClassName('place')[0].style.color = colors[colorNumber];

  for(let y = 0; y < colors.length; y++) textColorChoices.children[y]?.classList.remove('selected');
  textColorChoices.children[colorNumber].classList.add("selected");
}




// TYPOGRAPHIE DU TITRE
for(let i = 0; i < fonts.length; i++){
  let font = document.createElement('div'); // 'div' = typo
  font.classList.add('button');
  font.innerText = i+1;

  font.addEventListener('click', () => {
    setTitleFont(i);
  });

  titleTypoChoices.append(font);
  if(i == 0) setTitleFont(i);
}

function setTitleFont(fontNumber){
  document.getElementsByClassName('title')[0].style.fontFamily = fonts[fontNumber];
  // modifie la propriété fontFamily pour utiliser la police de caractères correspondante

  for(let y = 0; y < fonts.length; y++) titleTypoChoices.children[y]?.classList.remove('selected');
  titleTypoChoices.children[fontNumber].classList.add("selected");
}


// TYPOGRAPHIE DE LA DATE
for(let i = 0; i < fonts.length; i++){
  let font = document.createElement('div');
  font.classList.add('button');
  font.innerText = i+1;

  font.addEventListener('click', () => {
    setDateFont(i);
  });

  dateTypoChoices.append(font);
  if(i == 0) setDateFont(i);
}

function setDateFont(fontNumber){
  document.getElementsByClassName('date')[0].style.fontFamily = fonts[fontNumber];

  for(let y = 0; y < fonts.length; y++) dateTypoChoices.children[y]?.classList.remove('selected');
  dateTypoChoices.children[fontNumber].classList.add("selected");
}


// TYPOGRAPHIE DE TEXTE
for(let i = 0; i < fonts.length; i++){
  let font = document.createElement('div');
  font.classList.add('button');
  font.innerText = i+1;

  font.addEventListener('click', () => {
    setTextFont(i);
  });

  textTypoChoices.append(font);
  if(i == 0) setTextFont(i);
}

function setTextFont(fontNumber){
  document.getElementsByClassName('concert')[0].style.fontFamily = fonts[fontNumber];
  document.getElementsByClassName('infos')[0].style.fontFamily = fonts[fontNumber];
  document.getElementsByClassName('place')[0].style.fontFamily = fonts[fontNumber];

  for(let y = 0; y < fonts.length; y++) textTypoChoices.children[y]?.classList.remove('selected');
  textTypoChoices.children[fontNumber].classList.add("selected");
}




// FORMES
const ticketShapesCount = 10; // changer le nombre selon le nombre d'élément

const shapeChoices = document.getElementById('shapeChoices');

for(let i = 0; i < ticketShapesCount; i++){
  let button = document.createElement('div');
  button.classList.add("button");
  button.innerText = i+1;
  if(i == 0) button.classList.add('selected');

  button.addEventListener('click', () => {
    setTicketShape(i);
  });

  shapeChoices.append(button);
}

document.getElementById('shapeRandomChoice').addEventListener('click', () => {
  const randomValue = Math.floor(Math.random() * (ticketShapesCount)); // génère une valeur aléatoire entre 0 et le nbr de formes disponibles
  setTicketShape(randomValue);
});

function setTicketShape(number){
  document.getElementById('shape').src = `/assets/images/shapes/`+(number+1)+`.svg`; // modifie la forme
  document.getElementById('container').style.backgroundImage = `url('/assets/images/backgrounds/bg`+(number+1)+`.jpg')`; // modifie l'arrière-plan en fonction de la forme générée

  for(let y = 0; y < ticketShapesCount; y++){
    shapeChoices.children[y].classList.remove('selected');
  }

  shapeChoices.children[number].classList.add("selected");
}




// DEGRADES
const ticketBackgroundsCount = 25 // changer le nombre selon le nombre d'élément

const backgroundChoices = document.getElementById('backgroundChoices');

for(let i = 0; i < ticketBackgroundsCount; i++){
  let button = document.createElement('div');
  button.classList.add("button");
  button.innerText = i+1;
  if(i == 0) button.classList.add('selected');

  button.addEventListener('click', () => {
    setTicketBackground(i);
  });

  backgroundChoices.append(button);
}

document.getElementById('backgroundRandomChoice').addEventListener('click', () => {
  const randomValue = Math.floor(Math.random() * (ticketBackgroundsCount));
  setTicketBackground(randomValue);
});

function setTicketBackground(number){
  document.getElementById('ticket').style.backgroundImage = `url('/assets/images/tickets/b`+(number+1)+`.jpg')`; // dégradé adapté à la forme

  

// LOGO
// condition imposée à certains fonds
if(number+1==2 || number+1==5 || number+1==7 || number+1==9 || number+1==10 || number+1==16 || number+1==17 || number+1==20 || number+1==22 || number+1==23 || number+1==24){
  document.querySelector(".logoblanc").style.display="block" // affiche le logo blanc sur fond foncé
  document.querySelector(".logonoir").style.display="none" // masque le logo noir
} else { // si number+1 ne correspond pas aux dégradés sélectionnés
  document.querySelector(".logonoir").style.display="block" // affiche le logo noir sur fond clair
  document.querySelector(".logoblanc").style.display="none" // masque le logo blanc
}



  for(let y = 0; y < ticketBackgroundsCount; y++){
    backgroundChoices.children[y].classList.remove('selected');
  }

  backgroundChoices.children[number].classList.add("selected");
}
