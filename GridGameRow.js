 /*
    cette classe permet de creer les rangés de le grille de jeu,
    methode qui permet de dessiner le nombre de cage de chaque rangée dans la grille de jeux,
    prend trois parametres :
    1 => l'element parent de chaque cage,
    2 => le nombre de cages de chaque rangée,
    3 => le tableau de couleur melangé au hazard pour attribuer à chaque cage une couleur à deviner.
*/

class GridGameRow{

  constructor(ParentElt, COMBINATION){

    this.elt = document.createElement('div');
    this.elt.className = 'grid-game-row';
    ParentElt.appendChild(this.elt);
        
    const LEFTSIDE = document.createElement('div');
    LEFTSIDE.className = 'grid-game-row-left';
    this.elt.appendChild(LEFTSIDE);

    const RIGHTSIDE = document.createElement('div');
    RIGHTSIDE.className = 'grid-game-row-rigth';
    this.elt.appendChild(RIGHTSIDE);

    this.drawContainer(LEFTSIDE, COMBINATION);
    this.drawCheckbox(RIGHTSIDE, COMBINATION);
        
  }
 
  //methode qui permet de dessiner le nombre de cage de chaque rangée dans la grille de jeux, 
  drawContainer(ParentElt, COMBINATION){

    COMBINATION.forEach(color => {
      new PawnContainer(ParentElt, color);
    });
       
  }

  //methode permettant de dessiner le nombre le petit bouton de droite,
  drawCheckbox(ParentElt, COMBINATION){

    COMBINATION.forEach(color => {
      new checkPosition(ParentElt, color);
    });

  }

}