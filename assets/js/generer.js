//selection éléments du dom
let ressayer = document.querySelector("#reessayer");
let liste = document.querySelector("#liste_aleatoire");
let numero_choisi = document.querySelector("#numero_choisi");

let dernierecitation = 0;
let nombreAleatoire = 0;

// Tableau aléatoire
let plots_aleatoires = [
    ["plot un", "lorem ipsum1"],
    ["plot deux", "lorem ipsum2"],
    ["plot trois", "lorem ipsum3"],
    ["plot quatre", "lorem ipsum4"],
    ["plot cinq", "lorem ipsum5"],
    ["plot six", "lorem ipsum6"],
    ["plot sept", "lorem ipsum7"],
    ["plot huit", "lorem ipsum8"]
];

//génère un nombre aléatoire qui soit forcément un entier
function genererNombre(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//détecte le clic sur le bouton
reessayer.addEventListener("click", () => {
    do {
        nombreAleatoire = genererNombre(plots_aleatoires.length);
    } while (nombreAleatoire == dernierecitation);

    //console.log(nombreAleatoire); pour tester

    numero_choisi.textContent = plots_aleatoires[nombreAleatoire][0];
    liste_aleatoire.textContent = plots_aleatoires[nombreAleatoire][1];
    dernier = nombreAleatoire;
});
