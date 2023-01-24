

// Le code asynchrone permet d'executer du code avec du délai, par exemple dans ce code je créer une constante qui contient une fonction anonyme qui créer un timer et renvoie au bout de 1,5s du string
const fetchData = (callback) => {
    setTimeout(() => {
        callback('Done')
    }, 1500)
}


// Ici je créer une constante qui contient fonction anonyme qui contient un objet de type Promise qui prends en constructeur deux paramètres qui peuvent être null, le premier est la réponse et le deuxième est un ThrowError 
const fetchDataWithPromise = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done')
        }, 1500)
    })
    return promise;
}

// Je créer une fonction anonyme qui va tout d'abord executer dans l'ordre le premier console.log qui n'est pas dans la fonction puis au bout de deux secondes c'est le console.log 'Timer is done' et seulement après cela je fais appelle à ma constante qui contient l'objet promise et je n'ai plus besoin d'utiliser resolve à chaque itération je n'ai qu'a utiliser .then qui me retournera le texte de la fonction fetchDataWithPromise puis depuis ce return je créer un autre return asynchrone qui sera executé après le premier .then 
setTimeout(() => {
    console.log('Timer is done')
    fetchDataWithPromise()
    .then(text => {
        console.log(text)
        return fetchDataWithPromise()
    })
    .then(text2 => {
        console.log(text2)
    })
}, 2000)

console.log('Before timer gone.')