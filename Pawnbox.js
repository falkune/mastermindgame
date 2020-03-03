/*class qui permet d'instancier tout les pion dans leur conteneur*/
class PawnBox {
    
  constructor(eltId) {

    this.elt = document.querySelector('#' + eltId);
    this.pushPawns();
    this.clickedPawn = null;
    
  }

  pushPawns() {
        
    PAWNS_COLOR.forEach(color => {
            
      const pawn = new Pawn(color, this.elt);
            
      pawn.elt.addEventListener('click', e => {

        if(this.clickedPawn) {
          this.clickedPawn.style.boxShadow = null;
        }

        this.clickedPawn = e.target;
        e.target.style.boxShadow = 'none';
        
      });

    }); 
    
  }

}
