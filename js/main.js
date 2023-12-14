import Boisson from "./Boisson.js";

let header = document.querySelector(".header1");

window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
        header.classList.remove("header1");
        header.classList.add("header2");
    } else {
        header.classList.remove("header2");
        header.classList.add("header1");
    }
});

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
                <button class="select ${boisson.name}">Sélectionner</button>
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
        boissonsCards.forEach(item => item.classList.remove("notChosen"));
        boissonsCards.forEach(item => item.querySelector(".select").classList.remove("notChosen"));
        let type = e.target.getAttribute('id');
        
        for (let card of boissonsCards){
            let boisson = boissons.find(item => item.name === card.querySelector("h5").innerHTML);

            if (card.classList.contains(type)){
                card.querySelector(".text").innerText = boisson.description;
            } else {
                card.classList.toggle("notChosen");
                card.querySelector(".select").classList.toggle("notChosen");
                card.querySelector(".text").innerText = "Boisson indisponible";
            }
            console.log(card.querySelector(".select").classList.contains(".notChosen"));
        }
    }); 
}

console.table(boissons);

/**
 * Choix boisson
 */
let selectBtns = document.querySelectorAll(".select");
let selectedP = document.querySelector(".choix");

let choix = "Aucune";
selectedP.innerText = choix;

for (let selectBtn of selectBtns){
    selectBtn.addEventListener("click", (e) => {
        if(!e.target.classList.contains("notChosen")){
            console.log(e.target.classList.contains("notChosen"));
            let btnClasses = e.target.classList;
            console.log(btnClasses);
            for(let boisson of boissons){
                if(btnClasses.contains(boisson.name)){
                    console.log(boisson.name);
                    choix = boisson.name;
                    selectedP.innerText = choix;
                }
            }
        }
    })
}
