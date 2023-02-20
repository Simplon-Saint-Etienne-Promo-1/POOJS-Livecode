class Titulaire {

    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }

    identite() {
        console.log("Le titulaire s'appelle " + this.prenom + " " + this.nom);
    }
}