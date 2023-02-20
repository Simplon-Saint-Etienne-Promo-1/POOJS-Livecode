class compteEpargne extends Compte {
    constructor(titulaire, montant = 50, taux = 0.005) {
        super(titulaire, montant);
        this.taux = taux;
    }
}