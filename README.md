# Projet : Mise en place du site Web d'une agence
  
Mise en place du site Web d'une agence
## 1. Introduction
Suite à un entretien, une agence de développement a procédé à ton embauche. Bien joué ! Après quelques mois avec eux, ils te font part de leur envie de refaire leur site Web, et tu es en charge de son prototypage.

Ton agence veut prendre soin des yeux de ses clients, et aimerait donc qu'il y ait un moyen de passer d'un thème clair à un thème sombre rapidement. La classe 😎

## 2. La demande
### 2.1. Les pages
Le site Web est composé de 3 pages :

Home, l'URL étant /
L'agence, l'URL étant /about
Projets, l'URL étant /works
Il te faudra donc mettre en place une barre de navigation, contenant ces 3 liens. Pour le texte, tu peux y mettre du Lorem Ipsum : l'important étant de comprendre comment faire marcher l'application. Le site étant un prototype, le design n'a pas besoin d'être travaillé si tu n'as pas le temps.

## 2.2. Le changement de thème (jour / nuit)
En haut à droite, dans la barre de navigation, un bouton permet de passer du thème clair au thème sombre, et inversement, d'un clic.

Par défaut, on va utiliser le thème clair. Mais quand on change de thème, le choix sera enregistré dans le localStorage. Ainsi, quand l'utilisateur reviendra sur le site, celui-ci utilisera le thème qui avait été choisi lors de la dernière visite.

## 2.3. La page Projets et les études de cas
L'objectif de la prochaine partie est de mettre en place un routing dynamique pour accéder à des études de cas qu'a fait l'agence.

L'agence a choisi de montrer 3 études de cas qu'elle a réalisé pour ses clients. Les clients sont nommés Platon, Solane et Sedal.

La page "Projets", trouvable à l'URL /works est composée de liens vers ces études de cas.

Sur cette page, on peut trouver 3 blocs, chacun composé du titre de l'étude de cas et du lien pour accéder à l'étude. Si l'agence ajoute une quatrième étude de cas, automatiquement, un titre et un lien menant vers cette 4ème étude s'ajoutera ici.

