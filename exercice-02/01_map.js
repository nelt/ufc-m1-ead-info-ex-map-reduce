function map(value) {
    if(dateYear(value.published) == 2018 && dateMonth(value.published) == 12) {
        emit('publiés en décembre 2018', {cnt: 1});
    }
}