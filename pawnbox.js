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

        if (this.clickedPawn) {		
          this.clickedPawn.style.boxShadow = null;
        }
       
        this.clickedPawn = e.target;
        e.target.style.boxShadow = 'none';
        
      }); 

    }); 
        // on a dans ce cas uniquement besoin d'effectuer une même tâche 
        // pour chaque élément du tableau parcouru.
        // Si on avait eu besoin de récupérer un nouveau tableau correspondant à PAWNS_COLOR modifié,
        // on aurait utilisé la méthode map() et non forEach()
  }
}