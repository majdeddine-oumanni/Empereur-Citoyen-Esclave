let players = [
    {
        id: "p_1730112000000",          // identifiant unique (par ex. avec Date.now())
        nickname: "Yanis_07",           // pseudo
        avatar: "panda",                // un avatar choisi dans une liste
        createdAt: "2026-10-28"         // date de création
    },
    {
        id: "p_1730112000001",          // identifiant unique (par ex. avec Date.now())
        nickname: "Yanis_07",           // pseudo
        avatar: "penguin",               // un avatar choisi dans une liste
        createdAt: "2026-10-28"         // date de création
    },
    {
        id: "p_1730112000002",          // identifiant unique (par ex. avec Date.now())
        nickname: "Yanis_07",           // pseudo
        avatar: "frog",                 // un avatar choisi dans une liste
        createdAt: "2026-10-28"         // date de création
    },
    {
        id: "p_1730112000003",          // identifiant unique (par ex. avec Date.now())
        nickname: "Yanis_07",           // pseudo
        avatar: "lion",                 // un avatar choisi dans une liste
        createdAt: "2026-10-28"         // date de création
    }
];

function error(id, msg, inputId) {
  const errorEL = document.getElementById(id);
  errorEL.innerHTML = msg;
  errorEL.style.display = "block";
  const input = document.querySelector(inputId);
  input.classList.remove("border-brand-light");
  input.classList.add("border-red-600");
}


function errorRemovale(id, inputId) {
  const errorEL = document.querySelector(id);
  errorEL.textContent = "";
  errorEL.style.display = "none";
  const input = document.querySelector(inputId);
  input.classList.remove("border-red-600");
  input.classList.add("border-brand-light");
}

function nameValidation(){
    const name = document.getElementById("player-name");
    errorRemovale("#error", "#player-name");
    if(name.value.trim() == ""){
        error("error", "the name field is empty, fill it with your name please", "#player-name");
        return false;
    }
    if(name.value.trim().length < 3){
        error("error", "the name is too short", "#player-name");
        return false;
    }
    return true;
}


function renderPlayers(){
    const players_container = document.getElementById("players_list");
    players_container.innerHTML = "";

if(players.length == 0){
    // players_container.innerHTML = `
    // <p id="players_empty" class="hidden rounded-xl border border-dashed border-neutral-300 px-4 py-8 text-center text-sm text-neutral-400">
    //     No accounts yet. Create one on the left.
    // </p>

    //`
}else{
    players.forEach((player)=>{
        players_container.innerHTML += `
            <li class="player-row rounded-xl border border-neutral-200 bg-neutral-50 p-3" data-id="1">
            <div class="flex items-center gap-3">

                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white">
                <img src="./resources/${player.avatar}.png" alt="penguin" class="avatar">
                </div>

                <h3 class="min-w-0 flex-1 truncate text-sm font-medium">${player.nickname}</h3>
            </div>

            <div class="mt-3 grid grid-cols-3 gap-2">
                <button type="button" data-action="update"
                class="cursor-pointer rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs font-medium transition hover:border-neutral-900">
                Update
                </button>
                <button type="button" data-action="delete"
                class="cursor-pointer rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs font-medium text-neutral-500 transition hover:border-neutral-900 hover:text-neutral-900">
                Delete
                </button>
                <button type="button" data-action="play"
                class="cursor-pointer rounded-lg bg-neutral-900 px-3 py-2 text-xs font-medium text-white transition hover:bg-neutral-700">
                Play
                </button>
            </div>
            </li>

            `
        })
    }
}

renderPlayers()

function formValidation(){
    const name = document.getElementById("player-name");
    nameValidation();

    const form = document.getElementById('player-form');
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        if(nameValidation()){
            const newPlayer = {
                id: `p_${Math.random() * 92838}`,
                nickname: name.value.trim(),
                avatar: document.querySelector('input[name="avatar"]:checked').value,
                createdAt: new Date().toISOString().split("T")[0]
            };
            name.value = "";
            players.push(newPlayer);
            renderPlayers();
        }
        
    })
}
formValidation();

