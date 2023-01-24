
// La création d'un objet se fait avec cette syntax. Un objet à des propriétés et si j'affiche mon objet en console.log j'obtiens le résultat sous forme de JSON (JavaScript Object Notation)

const user = {
    name: "Max",
    age: 30,
}

console.log(user)

// Il est également possible d'utiliser des fonctions à l'intérieur d'objets. On pourra utiliser le mots clé "this" comme je souhaite faire références à une propriété de l'objet en cours.

// /!\ si j'utilise une fonction anonyme, alors le this fera référence au scope global du fichier et non de l'objet en cours 
const userIntroducing = {
    name: "Max",
    age: 30,
    introducing() {
        return "Hello, my name is " + this.name
    }
}

console.log(userIntroducing.introducing())