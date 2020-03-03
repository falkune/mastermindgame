/*
les variables suivant representent:
nbPawns => le nombre de pions d'une rangée de la grille de jeux
nbAttempts => le nombre de tentatives pour une partie
nbrOfCurentrow => le numero de la rangée actif 
found => le nombre de pions bien placés
curentrow => rangée actif c a d la rangée ou on a le droit de jouer
number0fPawnToGame =>controle que touts les cases d'une rangée sont jouées avant de valider
selectedColor => couleur du pion selectionner dans la boite à outil
endGame => controle la partie
*/

const GRIDGAME = document.querySelector('#grid-game');
const GRIDROW = [];
const COMBINATION = [];

let nbPawns = 0;
let nbAttempts = 0;
let nbrOfCurentrow = 0;
let found = 0;
let curentrow = null;
let number0fPawnToGame = 0;
let selectedColor = null;
let endGame = false;
let win = false;


const PAWNS_COLOR = ['deepskyblue', 'purple', 'yellow', 'darkorange', 'red', 'springgreen'];

const LEVELS = {
  EASY : {
    nbPawns : 4, 
    nbAttempts : 7
  },
  MEDIUM : {
    nbPawns : 5,
    nbAttempts : 6
  },
  HARD : {
    nbPawns : 6,
    nbAttempts : 6
  }
}
