//cette class permet de dessiner une ligne de grille de jeu
//il prend un paramettre qu'est :
//le nobre de pion à jouer
class GridRows{
    constructor(nbOfPawns){
        this.elt = document.createElement('div');
        this.elt.className = 'grid-game-raw';
    }
}