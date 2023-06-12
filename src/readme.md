Welcome to our Phase 1 project! Our very first project in our journey through web development at the Flatiron School! This project was designed to be a demonstration of our knowledge of core, Javascript fundamentals put to use! 

This is a simple Wild Pokemon Encounter simulation, akin to the real games, built on vanilla Javascript, HTML, and CSS. Upon opening the app, the user is faced with a wild Pokemon, and the goal is to catch it. Create a strategy using the 6 pokemon randomly assigned to your party, and choose one to send to battle. No 2 monsters are alike, and each type of Pokemon has their own game data, stats, typing, and movesets. 

Pokemon is like one big game of rock, paper, scissors. Water hits fire harder (water puts out fire), fire hits grass harder (fire burns grass), and grass hits water harder (grass absorbs water). Pokemon take turns using different attack moves against each other. With 18 different types of Pokemon, battles strategies become dynamic and can get quite interesting. 

The highlight of this project was a dynamic damage calculator that we created. By using ternaries to check the information in the database, the damage is calculated based on a variety of factors. It factors in a Pokemon's health points, their typing, the type of move they are using, the power that move possesses, and the Pokemon's stats. In the Pokemon franchise, moves can either be Special or Physical (an attack that uses some supernatural power to attack at a distance, or an attack that makes physical contact with the opponent), and will calculate damage based on a Pokemon's Special Attack stat or plain Attack stat, respectively. The damage is also calculated with either the defending Pokemon's Special Defense or plain Defense stat. Pokemon who use a move in battle that is the same as their own type get a 50% same-type-attack-boost, meaning a Flying type Pokemon using a Flying type move will deal more damage to their opponent than a Fire type using a Flying type move. Some Pokemon are completely immune to moves of particular typings! Ground type Pokemon take no damage against Electric types.

When a wild Pokemon's health is below 25% of their total health points, the player can throw a pokeball to catch the Pokemon via a press of the spacebar. Knock the Pokemon out with a super strong attack before you can throw a ball, and you're out of luck! The Pokemon faints and disappears. Watch out - the wild Pokemon could knock your own Pokemon out too before you get the chance.

We created a database of 66 fan-favorites for you to play with and catch. Try to catch them all!


https://www.w3schools.com/jsref/event_onmouseover.asp
https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
https://gamerant.com/pokemon-damage-calculation-help-guide/
https://www.pkparaiso.com/pokedex/
https://bulbapedia.bulbagarden.net/wiki/Main_Page
https://codepen.io/dwidomski/pen/DegdPX
http://www.pokemaniablog.com/2017/11/11/CalculatingHP.html
