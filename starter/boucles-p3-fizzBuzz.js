/*
BOUCLES - PRÉPA 3 : FizzBuzz
Ecrivez un programme qui affiche tous les nombres entre 1 et 100 avec les exceptions suivantes :
- Il affiche "Fizz" à la place du nombre si celui-ci est divisible par 3 ;
- Il affiche "Buzz" à la place du nombre si celui-ci est divisible par 5 et non par 3 ;
- Il affiche "FizzBuzz" à la place du nombre si celui-ci est divisible à la fois par 3 et par 5.
*/

/*
RAPPELS - AIDES :
- Vous aurez besoin pour réaliser cet exercice des deux structures de contrôle que nous avons vues :
	les tests et les boucles.
- Vous aurez aussi besoin de l'opérateur modulo %
	qui renvoie le reste de la division d'un entier par un autre.
- TIP : Cet exercice constitue un test d'embauche classique qui élimine un nombre significatif de candidats.
	Accrochez-vous pour le réussir !
*/
for (let iNombre = 1; iNombre <=100; iNombre++){
    if (iNombre % 3 === 0){
        if (iNombre % 5 === 0){
            console.log("FizzBuzz");
        }
        console.log("Fizz");
    }
    else if (iNombre % 5 === 0 && iNombre % 3 !== 0){
        console.log("Buzz");
    }
    else
    console.log(iNombre)
}
