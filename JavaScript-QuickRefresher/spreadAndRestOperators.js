// Si je ne souhaite pas changer les valeurs de mon tableau afin de créer une erreur dans le programme. Il est possible de recréer ce tableau dans une nouvelle variable avec la méthode slice par exemple.

const names = ['Théo', 'Margaux', 'Amélie', 'Arthur']

const copiedNames = names.slice()

console.log(names)
console.log(copiedNames)


// Contrairement à slice, cette façon pourra bien récupérer le tableau mais il le copiera dans un nouveau tableau, cela créera un tableau dans un tableau
const arrayNames = [names]
console.log(arrayNames)


// Un spread operator se présente de cette manière "...variable" il va pull le contenu de la variable passé dans la variable dans laquelle il est intégré un par un, ce qui veut dire que si je passe [] je récupère un nouveau tableau avec les valeurs, si je passe {} je récupère un objet avec ces propriétés.
const spreadArray = [...names]
const spreadObject = {...names}

console.log(spreadArray)
console.log(spreadObject)


// Un rest operator est l'opposé de spread, prenons par exemple une fonction fléché qui attends trois paramètre dans le constructeur de la fonction. 
// Je vais bien récupérer [1,2,3] dans cette exemple, mais si j'aimerais y ajouter un quatrième éléments ? Je suis obligé de réécrire ma fonction. 
const toArray = (args1, args2, args3) => {
    return [args1, args2, args3]
}

console.log(toArray(1,2,3))

// Le même exemple de façon dynamique avec le rest operator qui s'écrit également de la même manière que spread mais avec des paramètres à la place de variables "...paramètre" de cette manière, je peux permettre à l'utilisateur de passer X paramètre dans ma fonction. 

const toArrayWithRest = (...args) => {
    return args
}

console.log(toArrayWithRest(1,2,3,4,5))


// Maintenant pour clarifier, entre spread et rest il faut se poser la question:
// Est-ce que l'on souhaite récupérer des données d'une variable (spread) ou est-ce que l'on souhaite injecter des données à l'intérieur (rest)? D'un point de vue de syntaxe, évidemment cela est la même chose "..." mais on lui attribuera rest ou spread en nom selon là où on l'utilises.