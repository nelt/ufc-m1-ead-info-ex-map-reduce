function map(value) {
    emit(value.id_publicite + '::' + value.region, {cnt: 1});
}