// SYNTAXE 1

const Station = {
    places : 0,
    nom    : '',
    numero : 0,
    ville  : 'Lyon',
    adresse : '',
    newProp : 'prop',
    init   : function(places, nom, numero, adresse) {
        this.places = places;
        this.nom = nom;
        this.adresse = adresse;
        if (numero) {
            this.numero = numero;
        } 
        
    }
};

const station1 = {
    places : 17,
    nom    : 'Toto',
    numero : 1234,
    ville  : 'Lyon',
    adresse : '12 rue '
}

const station2 = {
    places : 15,
    nom    : 'Titi',
    numero : 1235,
    ville  : 'Lyon',
    adresse : '13 avenue '
}

const station3 = Object.create(Station);
station3.init(17, 'Toto', null, '12 rue ');

const station4 = Object.create(Station);
station4.init(15, 'Tutu', 161517, '30 bd des ');

console.log('Syntaxe 1 : ', station4.ville, station4.nom);

// SYNTAXE 2

function Station_ (places, nom, numero, adresse) {
    this.places = places || 0;
    this.nom = nom || '';
    this.numero = numero || 0;
    this.adresse = adresse || 'Non communiqué';
    this.ville = 'Lyon';
}

const station5 = new Station_(17, 'Toto', null, '12 rue ');
console.log('Syntaxe 2 : ', station5.nom);


// SYNTAXE 3

class Station__ {

    constructor(places, nom, numero, adresse) {
        this.places = places || 0;
        this.nom = nom || '';
        this.numero = numero || 0;
        this.adresse = adresse || 'Non communiqué';
        this.ville = 'Lyon'; 
    }

    add2ToNumberAndPlaces() {
        this.places += 2;
        this.numero += 2;
    }
}

const station6 = new Station__(17, 'Tata', null, '12 rue ');
console.log('Syntaxe 3 : ', station6.nom);