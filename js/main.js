import Boisson from "./Boisson.js";

/**
 * Affichage recettes
 */
let boissons = [];

boissons.push(new Boisson(
    "Original",
    "Boisson énergisante gazeuse, à la taurine et chargée en caféine.",
    "energisante",
    "red"));

boissons.push(new Boisson(
    "Mojito",
    "Boisson énergisante gazeuse, saveur mojito à la caféine et sans alcool.",
    "energisante",
    "green"));

boissons.push(new Boisson(
    "Tropical",
    "Boisson énergisante gazeuse, aux fruits, taurine, caféine et extrait de gingembre.",
    "desalterante",
    "orange"));

let recettes = document.querySelector(".boissonsList");
let recettesList = [];

for (let boisson of boissons){
    let icone;
    
    if (boisson.type === "energisante"){
        icone = '<i class="fa-solid fa-bolt"></i>';
    } else {
        icone = '<i class="fa-regular fa-snowflake"></i>';
    }
    recettesList.push(
        `<div class="boisson ${boisson.color} ${boisson.type}">
            <div>
                <div class="title">
                    <h5>${boisson.name}</h5>
                    ${icone}
                </div>
                <p class="text">${boisson.description}</p>
            </div>
            <div class="buttons">
                <button class="infos">Plus d'infos</button>
                <button class="select">Sélectionner</button>
            </div>
        </div>`);
    }
recettes.innerHTML = recettesList.join('');

/**
 * Choix catégorie
 */
let choixBtn = document.querySelectorAll(".choixBtn");
let boissonsCards = document.querySelectorAll(".boisson");

for (let btn of choixBtn){
    btn.addEventListener("click", (e) => {
        choixBtn.forEach(item => item.classList.remove("chosen"));
        let type = btn.getAttribute('id');

        btn.classList.toggle("chosen");
        
        for (let card of boissonsCards){
            let boisson = boissons.find(item => item.name === card.querySelector("h5").innerHTML);

            if (card.classList.contains(type)){
                card.querySelector(".text").innerText = boisson.description;
            } else {
                card.querySelector(".text").innerText = "Boisson indisponible";
            }
        }
    }); 
}

console.table(boissons);