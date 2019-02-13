/**
nombre de transactions bancaire :
-  par scheme et par mois
-  par scheme et par an
*/
function map(value) {
    if(value.montant >= 30) {
        emit("arrondissement " + value.arrondissement + ' - transactions suspectes', {cnt: 1});
    }
    emit("arrondissement " + value.arrondissement + ' - nombre de transactions', {cnt: 1});
}