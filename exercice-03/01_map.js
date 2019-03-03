function map(value) {
    emit(dateFormat(value.debut, 'yyyy-MM-dd'), {cnt: 1})
}