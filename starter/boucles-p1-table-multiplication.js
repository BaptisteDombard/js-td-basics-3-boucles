/*
BOUCLES - PRÉPA 1 : Une table de multiplication
Affichez les x premières valeurs de la table de multiplication choisie par l'utilisateur.
1. Demandez à l'utilisateur de choisir la table de multiplication qu'il souhaite afficher :
	"Quelle table de multiplication souhaitez-vous afficher ? La table de multiplication par"
2. Demandez-lui combien de valeurs il souhaite voir pour cette table :
	"Combien de valeurs souhaitez-vous afficher pour cette table ?"
3. Affichez le résultat avec un titre :
	"Voici les … premières valeurs de la table de multiplication par … :"
N.B. Faites-le de deux manières différentes :
	1°) avec une boucle FOR
	2°) avec une boucle WHILE
*/

// avec FOR
let iPRMulti = parseInt(prompt("Entrez nombre dont vous souhaité la table de multiplication"));
console.log(`Voici les 10 premières valeurs de la table de multiplication par ${iPRMulti}`)
for (let iMulti = parseInt(prompt("Combien de valeurs souhaitez-vous afficher pour cette table ?")); iMulti <= 10; iMulti++){
    console.log(`${iMulti} * ${iPRMulti} = ${iMulti*iPRMulti}`)
}

// avec WHILE
