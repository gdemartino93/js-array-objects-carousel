const imgArray=[
`img/01.webp`,
`img/02.webp`,
`img/03.webp`,
`img/04.webp`,
`img/05.webp`,


]
// array con img

let bigImg=document.getElementById("output");
let minImg=document.getElementById("colonna");
let attiva= 0;
let pointercontainer=document.getElementById("pointer-container");
// Dichiaro i due container delle img e puntatore

for (let i = 0 ; i < imgArray.length ; i++) {
  bigImg.innerHTML+=`<img src="${imgArray[i]}" alt="" class="none" id="img-${i}">`;
  minImg.innerHTML+=`<img src="${imgArray[i]}" alt="" class="" id="min-${i}">`
  pointercontainer.innerHTML+=`<input type="radio" name="indicator" data-order="1" id="ind-${i}">`
  
}
// Inseriamo le img grandi e piccola

let bigActive=document.getElementById("img-" + attiva)
let minActive=document.getElementById("min-" + attiva)
let indicator=document.getElementById("ind-" + 0)
let indicatorUno=document.getElementById("ind-" + 1)
let indicatorDue=document.getElementById("ind-" + 2)
let indicatorTre=document.getElementById("ind-" + 3)
let indicatorQuattro=document.getElementById("ind-" + 4)


bigActive.classList.add("block");
minActive.classList.add("block");
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
 bigActive.classList.remove("block");
 minActive.classList.remove("active-colonna");
 bigActive=document.getElementById("img-" + attiva);
 minActive=document.getElementById("min-" + attiva);
 bigActive.classList.add("block");
 bigActive.classList.add("animate__animated")
 bigActive.classList.add("animate__fadeIn")
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
    bigActive.classList.add("block");
    bigActive.classList.add("animate__animated")
    bigActive.classList.add("animate__fadeIn")
}
indicatorUno.addEventListener("click", function(){
  bigActive.classList.remove("block");
    bigActive=document.getElementById("img-" + 1);
    bigActive.classList.add("block");
    bigActive.classList.add("animate__animated")
  bigActive.classList.add("animate__fadeIn")
}); 
indicatorDue.addEventListener("click", function(){
  bigActive.classList.remove("block");
    bigActive=document.getElementById("img-" + 2);
    bigActive.classList.add("block");
    bigActive.classList.add("animate__animated")
    bigActive.classList.add("animate__fadeIn")
}); 
indicatorTre.addEventListener("click", function(){
  bigActive.classList.remove("block");
    bigActive=document.getElementById("img-" + 3);
    bigActive.classList.add("block");
    bigActive.classList.add("animate__animated")
    bigActive.classList.add("animate__fadeIn")
}); 
indicatorQuattro.addEventListener("click", function(){
  bigActive.classList.remove("block");
    bigActive=document.getElementById("img-" + 4);
    bigActive.classList.add("block");
    bigActive.classList.add("animate__animated")
    bigActive.classList.add("animate__fadeIn")
}); 