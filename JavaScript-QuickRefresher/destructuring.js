const user = {
    name: 'Antony',
    age: 25,
    job: 'Trainee in CS'
}

// Si je souhaite récupérer seulement une propriété de mon objet je pourrais faire cela
const getUserName = (userData) => {
    return userData.name
}

console.log(getUserName(user))

// On pourrais utiliser la destructuration de cette manière, en ajoutant autant de propriétés que l'on souhaite. Le code est plus lisible et on sais exactement ce que l'on attends
const getUserNameDestructured = ({name, job}) => {
    return name + ' ' + job
}

console.log(getUserNameDestructured(user))

// Nous pouvons également créer une variable destructured comme cela le résultat sera donc le nom et l'âge de l'objet user ils sont pull par position (par exemple name peut être appellé n'importe comment mais il fera toujours référence à la première propriétée de l'objet, la deuxième variable est la deuxième propriétée etc....)
const {name, ages} = user; 


// Il est également possible d'utiliser le destructuring sur un tableau comme ceci ils sont pull par position (par exemple hobby1 peut être appellé n'importe comment mais il fera toujours référence à l'index 0 du tableau, la deuxième variable est l'index 1 etc....)
const hobbies = ['Code', 'Football']

const [hobby1,hobby2] = hobbies
console.log(hobby1, hobby2)

