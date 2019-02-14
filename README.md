# Corrigés des exercices Map/Reduce

Les énonces des exercices sont données dans le cours de la partie NoSQL du module BDA du master 1 informatique en EAD de l'Université de Bourgogne Franche-Comté.

Les corrigés sont exécutables à l'aide de l'outil [mr-simulation](https://github.com/nelt/mr-simulation). 

## Exécution des corrigés

Télécharger ce projet.

Depuis la page [release du projet mr-simulation](https://github.com/nelt/mr-simulation/releases) , télécharger le fichier mr-_version_.jar de la dernière release.

Placer le fichier téléchargé à la racine du projet des exercices (à côté du fichier mr.sh) en le renommant **mr.jar**.

Ensuite, pour exécuter le corrigé d'un des exercice, se placer dans le répertoire de l'exercie choisi, et exécuter la commande **mr.sh** en spécifiant le fichier de la fonction map, celui de la fonction reduce et le fichier de données.

Par exemple, pour exécuter le corrigé de la première question de l'exercice 1 :

```bash
cd exercice-01
../mr.sh --map 01_map.js --reduce 01_reduce.js --data-set data-set.json
```
