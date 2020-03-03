/*
	class permetant de creer une case dans la grille de jeux.
	il prend 2 paramettres que sont :
	1 -> l'element parent correspondant à 'grid-game-row'
	2 -> la couleur quil doit prendre
*/

class PawnContainer{

	constructor(ParentElt, color){

		this.elmt = document.createElement('div');
		this.elmt.className = 'pawn-container';
		ParentElt.appendChild(this.elmt);

		this.nodeValue = color;
		this.value;

		this.elmt.addEventListener('click', e => {

			if(endGame == true){
				if(win == true)
					alert("Partie terminée!!!\n Vous avez gagner...");
				else
					alert("Partie terminée!!!\n Vous avez perdu...");	
			}
			else{
				if(selectedColor != null){
					if(this.elmt.parentNode.parentNode.id == "active"){
						if(this.elmt.id != "played"){
							this.value = selectedColor;
							this.elmt.id = "played";
							this.elmt.style.backgroundColor = selectedColor;
							number0fPawnToGame ++;
						}
						else{
							this.elmt.style.backgroundColor = selectedColor;
						}
					}
					else if(this.elmt.parentNode.parentNode.id == "already-play")
						alert('mauvaise rangée!!!');
					else
						alert('mauvaise rangée!!!');
				}
				else
					alert("selectionner une couleur!!!");
			}

		});

	}

}

class checkPosition{

	constructor(ParentElt, color){

		this.elt = document.createElement('div');
		this.elt.className = 'position-check';
		
		ParentElt.appendChild(this.elt);

	}

}