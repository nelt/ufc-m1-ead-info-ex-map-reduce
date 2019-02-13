/**
le nombre de trajets par destination, par mois
le nombre de trajets par destination, par an
le nombre de trajet par an
*/
function map(value) {
    emit('par mois, par destination-' + dateFormat(value.date, 'yyyy-MM') + '-' + value.aeroportDepart, {cnt: 1});
    emit('par an, par destination  -' + dateFormat(value.date, 'yyyy') + '-' + value.aeroportDepart, {cnt: 1});
    emit('par an                   -' + dateFormat(value.date, 'yyyy'), {cnt: 1});
}