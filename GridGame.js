/*
	cette classe correspond à la grille de jeux.
	sont constructeur prend deux paramettre que sont : 
	1 => l'ement qui doit contenir, 
	2 => le niveau selectionner.
*/
class GridGame{

	constructor(eltId, levelChoice){
		
		this.elt = document.querySelector('#' + eltId);
		this.drawInit(this.elt, levelChoice);
		
	}

	drawInit(ParentId, levelChoice){

		this.elt.innerHTML = '';

		nbAttempts = LEVELS[levelChoice].nbAttempts;
		nbPawns    = LEVELS[levelChoice].nbPawns;

		const PAWN_CONTAINER_COLOR = shuffle(PAWNS_COLOR);//melange aleatoirement le tb PAWNS_COLOR
		// const COMBINATION = [];//combinaison à trouver
		
		for(let j = 0; j < nbPawns; j++){
			COMBINATION[j] = PAWN_CONTAINER_COLOR[j];
		}
		
		nbrOfCurentrow = 0;//le numero de la ligne courante sur laquelle on peut jouer

		for(let i = 0; i < nbAttempts; i++){
			GRIDROW[i] = new GridGameRow(ParentId, COMBINATION);
		}

		number0fPawnToGame = 0;
		found = 0;
    endGame = false;
    win = false;
		curentrow = GRIDROW[nbrOfCurentrow];
		curentrow.elt.style.opacity = 1;
		curentrow.elt.id = "active";

	} 

}

function shuffle(array){
  return array.sort(function() {
		return Math.random() - .5 ;
	});
}

