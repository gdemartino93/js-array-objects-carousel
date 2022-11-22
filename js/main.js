// array con le img
const imgArray = [ 
  { 
    image: 'img/01.webp',
    title: 'Marvel\'s Spiderman Miles Morale',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', 
  },
  { 
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, 
  { 
    image: 'img/03.webp',
    title: 'Fortnite',
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos."
  },
  {
    image: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  },

  { 
    image: 'img/05.webp',
    title: "Marvel's Avengers", 
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 
  } 
];

let bigImg=document.getElementById("output");
let minImg=document.getElementById("colonna");
let attiva= 0;
let pointercontainer=document.getElementById("pointer-container");
let onImgTxt = document.getElementById("testoImg");
// Dichiaro i due container delle img e puntatore


for (let i = 0 ; i < imgArray.length ; i++) {
  let objArr = imgArray[i];
    bigImg.innerHTML+=`<img src="${objArr.image}" alt="" class="none" id="img-${i}">`;
    minImg.innerHTML+=`<img src="${objArr.image}" alt="" class="" id="min-${i}">`;
    pointercontainer.innerHTML+=`<input type="radio" name="indicator" data-order="1" id="ind-${i}">`;
    bigImg.innerHTML+=`<span id="txt-${i}" class="testo none"><h2>${objArr.title}</h2>${objArr.text}</span> `;
    // bigImg.innerHTML+=`<span id ="tit-${i}" class="title-img">proasdasdva</span>`
}

// Inseriamo le img grandi e piccola
let txtActive = document.querySelector(".testo")
let bigActive=document.getElementById("img-" + attiva)
let minActive=document.getElementById("min-" + attiva)
let indicator=document.getElementById("ind-" + 0)
let indicatorUno=document.getElementById("ind-" + 1)
let indicatorDue=document.getElementById("ind-" + 2)
let indicatorTre=document.getElementById("ind-" + 3)
let indicatorQuattro=document.getElementById("ind-" + 4)


bigActive.classList.add("block");
minActive.classList.add("block");
txtActive.classList.add("block")
// Blocchiamo la prima img

let arrowUp= document.getElementById("arrow-up");
let arrowDown=document.getElementById("arrow-down");
primopointer=document.getElementById("ind-"+ attiva).checked=true

// dichiaro frecce
arrowUp.addEventListener("click", slideUp)
arrowDown.addEventListener("click", slideDown)
indicator.addEventListener("click", indicatorZero)
indicatorDue.addEventListener("click", indicatorDue)
indicatorTre.addEventListener("click", indicatorTre)
indicatorQuattro.addEventListener("click", indicatorQuattro)


// dichiaro le funzioni al click

function slideUp(){
 attiva--
 if (attiva < 0) {
  attiva=imgArray.length - 1
 }
 txtActive.classList.remove("block");
 txtActive=document.getElementById("txt-" + attiva);
 txtActive.classList.add("block");

 bigActive.classList.remove("block");
 minActive.classList.remove("active-colonna");
 bigActive=document.getElementById("img-" + attiva);
 minActive=document.getElementById("min-" + attiva);
 bigActive.classList.add("block");
 bigActive.classList.add("animate__animated");
 bigActive.classList.add("animate__fadeIn");
//  Aggiungi animazione
 minActive.classList.add("active-colonna");
//  Aggiungi filter alla colonna img piccole
 primopointer=document.getElementById("ind-"+ attiva).checked=true
//  Muovi l'indicatore del radio
}
function slideDown(){
  attiva++
  if (attiva > ((imgArray.length)-1)) {
   attiva=0
  }

  txtActive.classList.remove("block");
  txtActive=document.getElementById("txt-" + attiva);
  txtActive.classList.add("block");

  bigActive.classList.remove("block");
  minActive.classList.remove("active-colonna");
  bigActive=document.getElementById("img-" + attiva);
  minActive=document.getElementById("min-" + attiva);
  bigActive.classList.add("block");
  minActive.classList.add("active-colonna");
  bigActive.classList.add("animate__animated")
  bigActive.classList.add("animate__fadeIn")
  pointerActive=document.getElementById("nr-" + attiva);
  primopointer=document.getElementById("ind-"+ attiva).checked=true
 }

 function indicatorZero(){
  attiva--
  if (attiva < 0) {
   attiva=imgArray.length - 1
  }
  bigActive.classList.remove("block");
  minActive.classList.remove("active-colonna");
  primopointer=document.getElementById("ind-"+ attiva).checked=false
 
  bigActive=document.getElementById("img-" + attiva);
  minActive=document.getElementById("min-" + attiva);
  primopointer=document.getElementById("ind-"+ attiva)
  bigActive.classList.add("block");
  minActive.classList.add("active-colonna");
  pointerActive=document.getElementById("nr-" + attiva);
  primopointer=document.getElementById("ind-"+ attiva).checked=true
 }

 function indicatorZero(event) {
    bigActive.classList.remove("block");
    bigActive=document.getElementById("img-" + 0);

    txtActive.classList.remove("block");
    txtActive=document.getElementById("txt-" + 0);
    txtActive.classList.add("block");

    bigActive.classList.add("block");
    bigActive.classList.add("animate__animated");
    bigActive.classList.add("animate__fadeIn");
}
indicatorUno.addEventListener("click", function(){
    bigActive.classList.remove("block");
    bigActive=document.getElementById("img-" + 1);
    bigActive.classList.add("block");
    bigActive.classList.add("animate__animated");
    bigActive.classList.add("animate__fadeIn");

    txtActive.classList.remove("block");
    txtActive=document.getElementById("txt-" + 1);
    txtActive.classList.add("block");
}); 
indicatorDue.addEventListener("click", function(){
    bigActive.classList.remove("block");
    bigActive=document.getElementById("img-" + 2);
    bigActive.classList.add("block");
    bigActive.classList.add("animate__animated");
    bigActive.classList.add("animate__fadeIn");

    txtActive.classList.remove("block");
    txtActive=document.getElementById("txt-" + 2);
    txtActive.classList.add("block");
}); 
indicatorTre.addEventListener("click", function(){
  bigActive.classList.remove("block");
    bigActive=document.getElementById("img-" + 3);
    bigActive.classList.add("block");
    bigActive.classList.add("animate__animated");
    bigActive.classList.add("animate__fadeIn")

    txtActive.classList.remove("block");
    txtActive=document.getElementById("txt-" + 3);
    txtActive.classList.add("block");
}); 
indicatorQuattro.addEventListener("click", function(){
    bigActive.classList.remove("block");
    bigActive=document.getElementById("img-" + 4);
    bigActive.classList.add("block");
    bigActive.classList.add("animate__animated");
    bigActive.classList.add("animate__fadeIn");

    txtActive.classList.remove("block");
    txtActive=document.getElementById("txt-" + 4);
    txtActive.classList.add("block");
}); 

