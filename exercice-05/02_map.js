/**
statistiques sur le montant des transactions :
- le montant moyen des transactions
- le montant de la transaction minimale
- le montant de la transaction maximale

*/
function map(value) {
    var stat = {
       avg: value.montant,
       cnt: 1,
       min: value.montant,
       max: value.montant
   };
    emit('statistiques - total  ', stat);
    emit('statistiques - ' + dateFormat(value.date, 'yyyy   '), stat);
    emit('statistiques - ' + dateFormat(value.date, 'yyyy-MM'), stat);
}