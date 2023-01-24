let title = "Une variable qui peut être réutilisé et réaffecté dans le code"
const name = "Une variable qui peut être réutilisé mais ne peut pas voir sa valeur réaffecté dans le code. On l'utilises lorsque l'on est sûr que la valeur ne changera pas."



// Je créer des variables qui peuvent être réutilisé dans le code
let userName = "Max"
let userAge = 30
let userHobbies = "Coding"


// Je créer une fonction qui prends en paramètre trois variables qui devront être créer à l'appel de cette fonction
function introducingNewUser(name,age,hobbie) {
    return (
        'Hello, my name is ' +
        name +
        ' I am ' +
        age +
        ' years old.' +
        'I have an hobbie, it is: ' +
        hobbie
    )
}

// Je ne pourrais pas réutiliser les variables "name, age et hobbie" car elle ne sont utilisé seulement qu'à l'intérieur de la fonction introducingNewUser

console.log(introducingNewUser('Antony',25,'Playing video-games'))

console.log(introducingNewUser(userName,userAge,userHobbies))