const allCards = document.querySelectorAll('.card');
const playerCards = document.querySelectorAll("#player-hand .card");
const dealBtn = document.getElementById('deal-btn');

const DEAL_DELAY = 120;
const FLIP_DELAY = 350;

function dealCards(){
    allCards.forEach((card) => {card.classList.remove('dealt', 'flipped')});

    allCards.forEach((card, i) => {
        setTimeout(() => card.classList.add('dealt'), 100 + i * DEAL_DELAY);
    })

    const total = 100 + allCards.length * DEAL_DELAY + FLIP_DELAY;
    playerCards.forEach((card, i) => {
        setTimeout(() => card.classList.add('flipped'), total + i * 100);
    });

}

// playerCards.forEach((card)=>{
//     card.addEventListener('dblclick', () => card.classList.toggle('flipped'));
// });

dealBtn.addEventListener('click', dealCards);
window.addEventListener('DOMContentLoaded', dealCards);