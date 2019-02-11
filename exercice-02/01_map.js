function map(value) {
    emit('nombre de documents publiés', {cnt: 1});
    if(dateYear(value.published) == 2018 && dateMonth(value.published) == 12) {
        emit('publiés en décembre 2018', {cnt: 1});
    }
    emit('' + dateFormat(value.published, 'yyyy-MM'), {cnt: 1});
}