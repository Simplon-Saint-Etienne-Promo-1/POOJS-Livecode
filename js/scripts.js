let titulaire1 = new Titulaire("Farre", "Mickael");

console.log(titulaire1);

titulaire1.identite();

let compte1 = new Compte(titulaire1, 50);

compte1.crediter(50);
console.log(compte1);
compte1.debiter(40);
console.log(compte1);