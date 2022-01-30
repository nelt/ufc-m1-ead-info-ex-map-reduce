# Corrigés des exercices Map/Reduce

Les énonces des exercices sont données dans le cours de la partie NoSQL du module BDA du master 1 informatique en EAD de l'Université de Bourgogne Franche-Comté.

Les corrigés sont exécutables à l'aide de l'outil [mr-simulation](https://github.com/nelt/mr-simulation). 

## Exécution des corrigés

Cloner ce projet :
```bash
git clone git@github.com:nelt/ufc-m1-ead-info-ex-map-reduce.git
```

Pour exécuter le corrigé d'un des exercice, se placer dans le répertoire de l'exercie choisi, et exécuter la commande **mr.sh** en spécifiant le fichier de la fonction map, celui de la fonction reduce et le fichier de données.

Par exemple, pour exécuter le corrigé de la première question de l'exercice 1 :

```bash
cd exercice-01
../mr.sh --map exercice-01/01_map.js --reduce exercice-01/01_reduce.js --data-set exercice-01/data-set.json
```
