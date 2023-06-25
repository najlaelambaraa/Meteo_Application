
Notre application  permet de connaître la météo des grandes villes de France. Elle utilise l'API :                      https://iut-weather-api.azurewebsites.net/swagger-ui/#/Cities/get_cities.

Cette application permet aussi d'ajouter une ville en favorite pour accéder à sa météo plus facilement.

## Description
Il y a une  page contenant la liste des villes de l'API. L'utilisateur peut  rechercher une ville en utilisant la barre de recherche. Si l'utilisateur clique sur un des composants de la ville alors les détails de cette ville s'afficheront et  un boutton favoris pour choisir si la ville est favori ou pas , puis les villes favoris sont tous afficher dans une liste dans la page de favoris.

## Sketchs


<div align = center>
<img src="./Documentation/images/" width=200/>
<img src="./Documentation/images/" width=200/>
</div


## Notation
* :white_check_mark: Navigation (3 pts)
  Magasin Redux (10 points)
* :white_check_mark: Lire les données du magasin redux (2 pts)
* :white_check_mark: Mettre à jour les données dans le magasin redux avec des actions et des réducteurs (tranche = 0) (4 pts)
 * :white_check_mark: Mettre à jour les données vers le magasin redux à l'aide de redux-thunk (API AND|OR AsyncStorage) (4 pts) 
  Afficher la liste des éléments (2 pts)

    FlatList, VirtualizedList ou SectionList 

* :white_check_mark:Afficher l'image dynamique (2 pts)
* :white_check_mark:Liaison des accessoires de composant enfant (1 pts)
* :white_check_mark:Gérer correctement un TextInput (2 pts)
 Attention à la gestion du clavier 
* :white_check_mark: Store (2 pts)

## Fonctionnalités de l'application (14 points)

* :white_check_mark:  Récupérer des données à l'aide de l'API Web (6 pts)
* :white_check_mark:    Gérer le rappel de réussite de la récupération (3 pts)
* :white_check_mark:   Gérer le rappel d'erreur de récupération (3 pts) 
* :x: Stocker les données préférées dans la mémoire du téléphone (2 pts)
* :white_check_mark:  Écrire des tests (6 points)
* :white_check_mark:    charge utile de toutes les actions (1 pts)
* :white_check_mark:    tous les cas de réducteurs (2 pts)
* :white_check_mark:    un composant d'interface utilisateur (3 pts) 