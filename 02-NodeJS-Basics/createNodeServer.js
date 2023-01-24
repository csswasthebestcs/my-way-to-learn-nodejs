// Normalement, le fichier du server doit s'appeller server.js ou app.js

// Voici quelques module souvent utiliés par Node.js  
// - http (lancer un serveur et envoyer des requêtes, par exemple envoyer une requête à l'API de la poste pour récupérer les infos..)
// - https (lancer un serveur SSL)
// - fs (qui permet de créer un fichier)
// - path (qui aide à générer des chemins vers un fichier)
// - os (aide avec les informations des os)

// La méthode Node.js require permet de récupérer un chemin vers un fichier (absolue / ou non ./) il n'y a pas besoin de rajouter .js à la fin. Dans notre cas, comme je renvoie le string http, Node.js comprends que je souhaite récupérer le module http.
const http = require('http')


// // Comme j'ai réaliser le require de http plus haut, j'ai acces à toutes les méthodes appartenant à http, comme par exemple ici createServer
// La méthode createServer prends dans constructeur deux paramètre, une requête qui permet d'envoyer des requêtes vers un serveur et réponse qui permet de renvoyer une réponse vers un serveur, je créer une fonction requestListener qui va me permettre de définir ces deux paramètres. In a nutshell ces constructeurs sont un "If X happens, do Y"
// function requestListener(request, response){

// }

// http.createServer(requestListener)

// // Je peux également faire ça par le biais d'une fonction anonyme
// http.createServer(function(req,res) {

// })

// Pour utiliser la "next-gen" syntax, je peux créer une fonction fléché c'est la méthode que je choisis.
// Il faut stocker la méthode http.createServer dans une constante car elle ne sera appellé qu'une seule fois car le serveur ne s'arrêtera pas et la valeur ne sera pas changé
const server = http.createServer((req,res) => {
    console.log(req)
})

// Comme les méthodes de http, server me permet d'acceder à d'autres méthodes notemment .listen qui permet de créer le serveur sur le port passer en paramètre. Concrètement, c'est avec aussi peu de lignes que l'on créer un serveur Node.js
server.listen(8000)