// le montant facturé, par numéro d’abonné et par mois
function map(value) {
    var amount = 1;
    if(value.nombreStations > 5) {
        amount += 0.2;
    }
    if(value.fin == null) {
        amount += 2;
    }

    emit(dateFormat(value.debut, 'yyyy-MM') + '-' + value.numeroAbonne, {amount: amount});
}
