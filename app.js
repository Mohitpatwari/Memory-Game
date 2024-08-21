const gridDisplay=document.querySelector('#grid')
let cardsChosen=[]
let cardsChosenId=[]
const resultDisplay=document.querySelector('#score')
const flip=document.querySelector('#flip')
const unMatch=document.querySelector('#unmatched')
const Match=document.querySelector('#match')
const win=document.querySelector('#Win')
const cardsWon=[]
const cardArray=[
    {
        name: 'cheeseburger',
        img: 'img/cheeseburger.png',
    },
    {
        name: 'fries',
        img: 'img/fries.png',
    },
    {
        name: 'ice-cream',
        img: 'img/ice-cream.png',
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png',
    },
    {
        name: 'milkshake',
        img: 'img/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'img/pizza.png',
    },
    {
        name: 'cheese',
        img: 'img/cheese.jpg'

    },
    {
        name: 'choco',
        img: 'img/choco.jpg'

    },
    {
        name: 'grapes',
        img: 'img/grapes.jpg'

    },
    {
        name: 'milk',
        img: 'img/milk.jpg'

    },
    {
        name: 'cheeseburger',
        img: 'img/cheeseburger.png',
    },
    {
        name: 'fries',
        img: 'img/fries.png',
    },
    {
        name: 'ice-cream',
        img: 'img/ice-cream.png',
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png',
    },
    {
        name: 'milkshake',
        img: 'img/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'img/pizza.png',
    },
    {
        name: 'cheese',
        img: 'img/cheese.jpg'

    },
    {
        name: 'choco',
        img: 'img/choco.jpg'

    },
    {
        name: 'grapes',
        img: 'img/grapes.jpg'

    },
    {
        name: 'milk',
        img: 'img/milk.jpg'

    }
    ]
    cardArray.sort(()=>0.5-Math.random()) //Shortcut to reshuffle the array
    
    function createBoard(){
        for(let i=0;i<20;i++){
            const card=document.createElement('img')
            card.setAttribute('src','img/blank.png')
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipCard)
            gridDisplay.appendChild(card)
        }
    }

    function flipCard(){
        const cardId=this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        flip.play()
        this.setAttribute('src',cardArray[cardId].img)
         setTimeout(checkMatch,500)
        }

   function checkMatch(){
    const cards=document.querySelectorAll('img')
    const option1=cardsChosenId[0]
    const option2=cardsChosenId[1]

    if(option1==option2)
        alert("You have clicked on the same card")
      cards[option1].setAttribute('img','img/blank.png')
      cards[option2].setAttribute('img','img/blank.png')
    
     if(cardsChosen[0]==cardsChosen[1]){
        cards[option1].setAttribute('src','img/back.png')
        cards[option2].setAttribute('src','img/back.png')
        Match.play()
        cards[option1].removeEventListener('click',flipCard)
        cards[option2].removeEventListener('click',flipCard)
        cardsWon.push(cardsChosen)
   } else{
    unMatch.play()
      cards[option1].setAttribute('src','img/blank.png')
      cards[option2].setAttribute('src','img/blank.png')
   }
   resultDisplay.textContent=cardsWon.length
   cardsChosen=[]
   cardsChosenId=[]

   if(cardsWon.length==(cardArray.length/2)){
    resultDisplay.textContent='Congralutations You Win!'
    win.play()
   }
}

    
    createBoard()
    