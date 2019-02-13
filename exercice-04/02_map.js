/**
prix moyen des trajets par mois
*/
function map(value) {
    emit(dateFormat(value.date, 'yyyy-MM'), {avg: value.prix , cnt: 1});
}