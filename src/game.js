import { getData } from "../src/storage.js";

let players = getData('players') || [];

const activePlayerId = getData("activePlayerId");

let activePlayer = players.find((player) => player.id == activePlayerId);

document.getElementById("player_data").innerHTML = `
    <div class="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-2xl">
        <img src="./resources/${activePlayer.avatar}.png" alt="${activePlayer.avatar}" class="avatar">
    </div>
    <div class="leading-tight">
        <p class="text-sm font-medium">${activePlayer.nickname}</p>
        <p class="text-xs text-neutral-500">Score <span class="font-semibold text-neutral-900">0</span></p>
    </div>

    `

export let cardsTypes = ["empereur", "citoyen", "citoyen", "citoyen", "citoyen"];

export function placeCards(cardsTypes){

    let playerHand = document.getElementById("player-hand");

    playerHand.innerHTML = "";

    cardsTypes.forEach((type)=>{
        playerHand.innerHTML += `
            <button type="button" class="card card-playable" aria-label="${type} card" data-type="${type}">
                <div class="card-inner">
                    <div class="card-face card-back"></div>
                        <div class="card-face card-front"><span class="card-corner">${type[0].toUpperCase()}</span><span class="card-symbol">
                            <img src="./resources/${type}.png" alt="${type}" class="card-img">
                            </span><span class="card-name">${type}</span>
                        </div>
                </div>
            </button>
        `
    })
    return playerHand;

}

export function handCard(){
    let cards = document.querySelectorAll(".card-playable");
    let usersCardChoice = document.getElementById("users-card-choice");
    cards.forEach((card)=>{
        card.addEventListener("click", (e)=>{
            let cardType = e.currentTarget.dataset.type;
            usersCardChoice.innerHTML = `
                <span class="card-corner">${cardType[0].toUpperCase()}</span>
                <span class="card-symbol">
                    <img src="./resources/${cardType}.png" alt="empereur" class="card-img">
                </span>
                <span class="card-name">${cardType}</span>
            `
            card.remove();
        })
    })
}
