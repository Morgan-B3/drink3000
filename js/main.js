import Boisson from "./Boisson.js";

/**
 * Recettes
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

let recettes = document.querySelector(".recipes");
let recettesList = [];

for (let boisson of boissons){
    let icone;
    
    if (boisson.type === "energisante"){
        icone = '<i class="fa-solid fa-bolt"></i>';
    } else {
        icone = '<i class="fa-regular fa-snowflake"></i>';
    }
    recettesList.push(
        `<div class="boisson ${boisson.color}">
            <h5>${boisson.name} ${icone}</h5>
            <p>${boisson.description}</p>
            <div>
                <button class="infos">Plus d'infos</button>
                <button>Sélectionner</button>
            </div>
        </div>`);
    }
recettes.innerHTML = recettesList.join('');