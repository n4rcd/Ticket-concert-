let actualStep = 0;

// BUTTONS SWITCH

const steps = document.getElementById("steps");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const stepsBodies = document.getElementsByClassName('buttons');

for(let i = 0; i < steps.childElementCount; i++){
  steps.children[i].addEventListener('click', () => {
    setStep(i);
  })
}

function setStep(number){
  actualStep = number;
  if(number == steps.childElementCount-1) {nextButton.innerText = 'Finaliser'; document.querySelector("#next").addEventListener("click",Capture); } 
  else {nextButton.innerText = 'Etape Suivante'; document.querySelector("#next").removeEventListener("click",Capture);  };
  if(number == 0) previousButton.classList.add('hidden');
  else previousButton.classList.remove('hidden');

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
  if(actualStep >= 1) setStep(actualStep-1);
});

nextButton.addEventListener('click', () => {
  if(actualStep < 2) setStep(actualStep+1);
});

// TICKET COMPOSITION

const fonts = ['Poppins', 'Arial', 'Belarius Serif'];
const colors = ['#ffffff', '#000000'];

const titleTypoChoices = document.getElementById('titleTypoChoices');
const titleColorChoices = document.getElementById('titleColorChoices');
const dateTypoChoices = document.getElementById('dateTypoChoices');
const dateColorChoices = document.getElementById('dateColorChoices');
const textTypoChoices = document.getElementById('textTypoChoices');
const textColorChoices = document.getElementById('textColorChoices');

// Title colors
for(let i = 0; i < colors.length; i++){
  let color = document.createElement('div');
  color.classList.add('choice');
  color.style.backgroundColor = colors[i];
  color.addEventListener('click', () => {
    setTitleColor(i);
  });

  titleColorChoices.append(color);
  if(i == 0) setTitleColor(i);
}

function setTitleColor(colorNumber){
  document.getElementsByClassName('title')[0].style.color = colors[colorNumber];

  for(let y = 0; y < colors.length; y++) titleColorChoices.children[y]?.classList.remove('selected');
  titleColorChoices.children[colorNumber].classList.add("selected");
}

// Date colors
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

// Texts colors
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

// Title typo
for(let i = 0; i < fonts.length; i++){
  let font = document.createElement('div');
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

  for(let y = 0; y < fonts.length; y++) titleTypoChoices.children[y]?.classList.remove('selected');
  titleTypoChoices.children[fontNumber].classList.add("selected");
}

// Date typo
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

// Texts typo
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

// TICKET SHAPES

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
  const randomValue = Math.floor(Math.random() * (ticketShapesCount));
  setTicketShape(randomValue);
});

function setTicketShape(number){
  document.getElementById('shape').src = `/assets/images/shapes/`+(number+1)+`.svg`;
  document.getElementById('container').style.backgroundImage = `url('/assets/images/backgrounds/bg`+(number+1)+`.jpg')`;

  for(let y = 0; y < ticketShapesCount; y++){
    shapeChoices.children[y].classList.remove('selected');
  }

  shapeChoices.children[number].classList.add("selected");
}


// TICKET BACKGROUNDS

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
  document.getElementById('ticket').style.backgroundImage = `url('/assets/images/tickets/b`+(number+1)+`.jpg')`; // fond d'écran adapté à la forme

if(number+1==2 || number+1==5 || number+1==7 || number+1==9 || number+1==10 || number+1==16 || number+1==17 || number+1==20 || number+1==22 || number+1==23 || number+1==24){
  document.querySelector(".logoblanc").style.display="block"
  document.querySelector(".logonoir").style.display="none"
} else {
  document.querySelector(".logonoir").style.display="block"
  document.querySelector(".logoblanc").style.display="none"
}

  for(let y = 0; y < ticketBackgroundsCount; y++){
    backgroundChoices.children[y].classList.remove('selected');
  }

  backgroundChoices.children[number].classList.add("selected");
}
