
// Je créer une fonction anonyme
// Principalement parcequ'avec les fonctions anonymes, nous pouvons utiliser le keyword "this" qui fait référence à l'objet en cours
const nameOfTheFunction = (argument,arguments) => {
    return (
        'This is the function body ' +
        argument +
        arguments
    )
}

// Lorsque je n'ai besoin que d'obtenir un simple return, j'ai la possibilité de créer la fonction anonyme comme cela
const addition = (a,b) => a + b
console.log(addition(5,10))

// Je n'ai pas besoin des parentheses lorsque je ne passe qu'un seul paramètre 
const multiplyByTen = a => a * 10
console.log(multiplyByTen(15))


// Grâce au fonction anonymes, je ne suis même pas obligé de passer un paramètre à ma fonction
const getFive = () => 1 + 1 + 3
console.log(getFive())