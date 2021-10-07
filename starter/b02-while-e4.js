/*****************************
* 6. BOUCLES ET ITÉRATIONS
* BOUCLE = STRUCTURE DE CONTRÔLE N° 2 = MOYEN DE RÉPÉTER DES INSTRUCTIONS
*/

/* 6.2. Boucle WHILE
  La boucle `while` permet de répéter des instructions tant qu'une condition est vérifiée.
  Syntaxe :
    while (condition) {
      // instructions exécutées tant que la condition est vérifiée
    }
*/

/* EXEMPLE 4 :
- Affichez les 10 premières valeurs de la table de multiplication choisie par l'utilisateur
  1. Demandez à l'utilisateur de choisir la table de multiplication qu'il souhaite afficher :
    "Je voudrais afficher les 10 premières valeurs de la table de multiplication par"
  2. Affichez le résultat avec :
    - un titre : "Voici les 10 premières valeurs de la table de multiplication par …"
    - pour chaque valeur, le calcul et le résultat (par exemple : 1 * 7 = 7)
*/
let iMulti = 0;
let iPRMulti = parseInt(prompt("Entrez nombre dont vous souhaité la table de multiplication"));
console.log(`Voici les 10 premières valeurs de la table de multiplication par ${iPRMulti}`)
while (iMulti < 10){
    iMulti++;
    console.log(`${iMulti} * ${iPRMulti} = ${iMulti*iPRMulti}`)
}