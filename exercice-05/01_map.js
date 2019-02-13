/**
nombre de transactions bancaire :
-  par scheme et par mois
-  par scheme et par an
*/
function map(value) {
    emit(value.scheme + ' - ' + dateFormat(value.date, 'yyyy-MM'), {cnt: 1, montant: value.montant})
    emit(value.scheme + ' - ' + dateFormat(value.date, 'yyyy   '), {cnt: 1, montant: value.montant})
}