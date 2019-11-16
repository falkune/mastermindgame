const newGameBtn = document.querySelector('#new-game-btn');
const play = document.querySelector('#play_btn');


new PawnBox('pawn-box');

newGameBtn.addEventListener('click', () => {
    
    if (window.confirm('voulez vous commencer une partie ?')) {
        
        const levelChoice = document.querySelector('#niveau').value;

        new GridGame('grid-game', levelChoice);


    }
});

play.addEventListener('click', () => {

    if(number0fPawnToGame == nbPawns){
    
        if(found == nbPawns){
    
            for(let i = 0; i < found; i++){
                curentrow.elt.lastChild.childNodes[i].style.backgroundColor = "black";
            }
            endGame = true;
            win = true;
    
        }
        else{
            if(nbrOfCurentrow < nbAttempts -1){

                for(let i = 0; i < found; i++){
                    curentrow.elt.lastChild.childNodes[i].style.backgroundColor = "black";
                }
                
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

                for(let i = 0; i < found; i++){
                    curentrow.elt.lastChild.childNodes[i].style.backgroundColor = "black";
                }
                endGame = true;
            }

        }
                
    }
    
    else{
    
        alert("vous devez jouer toutes les cases!!");
            
    }
    
});

