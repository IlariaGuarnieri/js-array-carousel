const itemsWrapper = document.querySelector('.items-wrapper')
const left = document.querySelector('.up')
const right = document.querySelector('.down') 

const images =[
  img/01.webp,
  img/02.webp,
  img/03.webp,
  img/04.webp,
  img/05.webp,
]

for (let i=0; i<images.length; i++){
  const img=images[i];
  itemsWrapper.innerHtml += `<img class="img hide" src "${img}">;`
}

/*prendo elementi cn class img */
const itemsCollection = document.getElementsByClassName('img')

/*3*/
itemsCollection [counterImg].classList.remove('hide')

75