function reduce(values) {
    var result = {cnt: 0, montant: 0};
    for each(var value in values) {
        result.cnt += value.cnt;
        result.montant += value.montant;
    }
    return result;
}