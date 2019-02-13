/**
chiffre d’affaires (montant généré) par aéroport de départ
*/
function map(value) {
    emit(value.aeroportDepart + ' - CA ' + dateFormat(value.date, 'yyyy'), {ca: value.prix, cnt: 1});
}