function map(value) {
    emit(dateFormat(value.date, 'yyyy-MM') + '::' + value.id_publicite, {cnt: 1});
}