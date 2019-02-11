// nombre moyen de stations parcourue par trajet (en excluant les trajets non clos)
function map(value) {
    if(value.fin != null) {
        emit('nombre moyen de stations', {avg: value.nombreStations, cnt: 1});
    }
}