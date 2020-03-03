const newGameBtn = document.querySelector('#new-game-btn');
const play = document.querySelector('#play_btn');


new PawnBox('pawn-box');

newGameBtn.addEventListener('click', () => {   

  if (window.confirm('voulez vous commencer une partie ?')){
    const levelChoice = document.querySelector('#niveau').value;
    new GridGame('grid-game', levelChoice);
  }

});

play.addEventListener('click', () => {

  // je recupere la combinaison du joueur 
  let joueur = curentrow.elt.firstChild.childNodes;
  let combinaisonJoueur = [];
  
  for(let j = 0; j < nbPawns; j++){
    combinaisonJoueur[j] = joueur[j].style.backgroundColor;
  }

  if(number0fPawnToGame == nbPawns){
    
    for(let i = 0; i < nbPawns; i++){

      // je compare la combinaison du joueur à la combinaison à trouver
      if(combinaisonJoueur[i] === COMBINATION[i]){
        curentrow.elt.lastChild.childNodes[i].style.backgroundColor = "black";
        found++;
      }

    }

    if(found == nbPawns){
      endGame = true;
      win = true;
    }
    else{

      if(nbrOfCurentrow < nbAttempts -1){

        nbrOfCurentrow++;
        found = 0;
        curentrow.elt.style.opacity = 0.6;
        curentrow.elt.id = "already-play";
        curentrow = GRIDROW[nbrOfCurentrow];
        curentrow.elt.id = "active";
        curentrow.elt.style.opacity = 1;
        number0fPawnToGame = 0;

      }
      else if(nbrOfCurentrow == nbAttempts -1){
        endGame = true;
      }

    }   

  }  
  else{
    alert("vous devez jouer toutes les cases!!");        
  }  

});

