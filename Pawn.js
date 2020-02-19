//class pawn permet d'instancier un pion
//prend deux parametres que sont :
//1 -> la couleur du pion
//2 -> l'element parent

class Pawn {
    
    constructor(color, ParentElt) {

        this.elt = document.createElement('div');
        this.elt.className = 'pawn';

        this.nodeValue = color;
        this.elt.style.backgroundColor = this.nodeValue;
     
        ParentElt.appendChild(this.elt);

        this.elt.addEventListener('click', e => {
            
            selectedColor = this.nodeValue;

        });
        
    }

}