// Nous pouvons placer n'importe quoi dans un tableau en terme de valeur, mixé ou non. L'index commence toujours à 0.
const hobbies = ['Coding', 'Football']
const numbers = [1, 2, 3, 4]
const mixed = ['Text', 1, true, {title: 'string'}]

// Pour parcourir un tableau, on utiliseras généralement une boucle for
for(let hobby of hobbies) {
    console.log(hobby)
}

// Il y'a énormément de méthodes qui peuvent être utilisé sur un tableau en saisissant nomTableau.method


// Nous pouvons utilisé la méthode map sur un tableau, qui va reconstruire un autre tableau en se basant sur lequelle on l'a appelé mais nous permet de reconstuire le tableau
console.log(hobbies.map(hobby => 
    'Hobbie: ' + hobby
))
console.log(hobbies)