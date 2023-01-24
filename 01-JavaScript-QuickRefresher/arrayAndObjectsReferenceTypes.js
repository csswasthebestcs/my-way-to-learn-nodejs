const names = ['Antony', 'Thomas', 'Romain', 'Baptiste']

// Normalement, comme vu dans le fichier ./coreSyntax il n'est pas possible de réattribuer des valeurs dans des constantes. Mais avec les tableaux cela est différent, je peux utiliser la méthode push qui va ajouter un élément dans mon tableau. Car la méthode ne va pas changer "l'addresse" de la variable il va seulement ajouter une nouvelle valeur. 

names.push('Jordan')
console.log(names)