// array
const images = [
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp',
  'img/02.webp',
]

// elements
const itemsWrapper = document.querySelector('.items-wrapper');
const thumbsWrapper = document.querySelector('.thumbs-wrapper');
const slider = document.querySelector('.slider');

// bottoni
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let counterItem = 0;
let goAutoscroll = true;

// reset
reset();

// inserisco img e thumb
for (let i = 0; i < images.length; i++){
  const imgPath = images[i];
  printHTMLElement(itemsWrapper, `<img class="item hide" src="${imgPath}" alt="">`)
  printHTMLElement(thumbsWrapper, `<img class="thumb" src="${imgPath}" alt="">`)
}

// salvo immagini e thumb

const imagesElements = document.querySelectorAll('.item');
const thumbsElements = document.querySelectorAll('.thumb');

// rendo attivo il primo elemento delle immagini e thumb
imagesElements[counterItem].classList.remove('.hide');
thumbsElements[counterItem].classList.add('.active');

next.addEventListener('click' , goNext)

prev.addEventListener('click' , goPrev)


// AUTOSCROLL ///
slider.addEventListener('mouseover' ()=> goAutoscroll =false);
slider.addEventListener('mouseleave' ()=> goAutoscroll =true);

setInterval(()=>{
  if(goAutoscroll) goNext();
},1000);


// FUNZIONI///
function goNext(){
  toggleImage(counterItem);
  counterItem++;

  if(counterItem === images.length){
    counterItem = 0;
  }
  toggleImage(counterItem);
}
function goPrev(){
  toggleImage(counterItem);
  counterItem--;

  if(counterItem < 0){
    counterItem = images.length -1;
  }
  toggleImage(counterItem);
}
function reset(){
  itemsWrapper.innerHTML = '';
  thumbsWrapper.innerHTML = '';
  document.getElementById('titolo').innerHTML = '';
}

function printHTMLElement(elHTML, stringToPrint){
  elHTML.innerHTML += stringToPrint;
}

function toggleImage(counter){
  imagesElements[counter].classList.toggle('hide'),
}
























// const itemsWrapper = document.querySelector('.items-wrapper');
// const left = document.querySelector('.up');
// const right = document.querySelector('.down');
// let counterImg = 0; 

// const images =[
//   'img/01.webp',
//   'img/02.webp',
//   'img/03.webp',
//   'img/04.webp',
//   'img/05.webp',
// ]

// for (let i=0; i<images.length; i++){
//   const img=images[i];
//   itemsWrapper.innerHtml += `<img class="img hide" src "${img}">;`
// }

// /*prendo elementi cn class img */
// const itemsCollection = document.getElementsByClassName('img');

// /*3*/
// itemsCollection [counterImg].classList.remove('hide');

// /* 5 */
// left.addEventListener('click', function(){
//   right.classList.remove('hide');

//   /* 6 */
//   itemsCollection[counterImg--].classList.add('hide');
// })