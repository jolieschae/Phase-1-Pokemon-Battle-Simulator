let wildPkmn
let party
let pokeballs = document.querySelectorAll(".partypkmn")
let activePkmnImg = document.getElementById("activepkmnimg")
let wildPkmnImg = document.getElementById("wildpkmnimg")
let form = document.getElementById("battleform")
let move1 = document.getElementById("move1")
let move2 = document.getElementById("move2")
let move3 = document.getElementById("move3")
let move4 = document.getElementById("move4")
let h1 = document.createElement("h1")
let displayDiv = document.querySelector(".div-block")
displayDiv.append(h1)
let activeHealth = document.getElementById("activehealth")
let wildHealth = document.getElementById("wildhealth")

fetch("http://localhost:3000/pokemon") 
.then((response) => response.json())
.then((data) => {
    wildPkmn = data[Math.floor(Math.random() * data.length)];
    party = [];
    for (let i = 0; i < 6; i++) {
        randomParty = data[Math.floor(Math.random() * data.length)];
        party.push(randomParty);
    };
        wildPkmnImg.src = wildPkmn.image1;
        wildHealth.max = wildPkmn.stats.hp;
});

let activePkmn

pokeballs.forEach((pokeball, index)=> {
    pokeball.addEventListener("click", () => {
        activePkmn = party[index];
        activePkmnImg.src = activePkmn.image2;
        activeHealth.max = activePkmn.stats.hp; 
        move1.textContent = activePkmn.moveset[0].name;
        move2.textContent = activePkmn.moveset[1].name;
        move3.textContent = activePkmn.moveset[2].name;
        move4.textContent = activePkmn.moveset[3].name;
    });
    pokeball.addEventListener("mouseover", () => {
        h1.textContent = party[index].name;
    pokeball.setAttribute('data-pokemon', party[index].name);
    });

    pokeball.addEventListener("mouseout", () => {
        h1.textContent = "";
    });
});

function calculateDamage(attacker, defender, move) {
    const attackStat = move.category === 'Special' ? attacker.stats.spAtk : attacker.stats.atk;
    const defenseStat = move.category === 'Special' ? defender.stats.spDef : defender.stats.def;
    const stab = move.type === attacker.type1 || move.type === attacker.type2 ? 1.5 : 1;
    const effectiveness = defender.weaknesses[move.type] || 1;
    const resistances = defender.resistances[move.type] || 1;
    const immunity = defender.immunity[move.type] || 1;
    const damage = Math.floor((((2 * 50) / 5 + 2) * move.power * (attackStat / defenseStat)) / 50 + 2);
    let finalDamage = Math.floor(damage * stab * effectiveness * resistances * immunity);
    return finalDamage;
};

let attack

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let moveIndex = e.target.field.value;
    attack = activePkmn.moveset[moveIndex];
    let randomIndex = Math.ceil(Math.random() * 3);
    wildPkmnAttack = wildPkmn.moveset[randomIndex];
    wildHealth.value -= calculateDamage(activePkmn, wildPkmn, attack);
    if (wildHealth.value > 0){
    alert(`The wild ${wildPkmn.name} used ${wildPkmnAttack.name}!`)};
    activeHealth.value -= calculateDamage(wildPkmn, activePkmn, wildPkmnAttack);
    if (wildHealth.value <= (wildHealth.max * .25) && wildHealth.value > 0){
        alert(`The wild ${wildPkmn.name} is weak! Use the spacebar to throw a pokeball at it!`);
        document.addEventListener("keydown", (event) => {
            if (event.code === "Space") {
                wildPkmnImg.src = "https://s2.gifyu.com/images/pokeball.gif", wildPkmnImg.style.height = "29px", wildPkmnImg.style.top = "135px", wildPkmnImg.style.left = "340px";
                window.alert(`You caught the wild ${wildPkmn.name}! ${wildPkmn.name} has been sent to your PC.`);
            };
        });
    };
    if (wildHealth.value === 0){
        alert(`The wild ${wildPkmn.name} fainted!`);
        window.location.reload();
    }
    else if (activeHealth.value === 0){
        alert(`Oh, no! Your ${activePkmn.name} fainted!`);
        window.location.reload();
    };
});








