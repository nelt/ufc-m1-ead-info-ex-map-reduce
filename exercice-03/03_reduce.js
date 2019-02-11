function reduce(values) {
    var result = {amount: 0};
    for each(var value in values) {
        result.amount += value.amount;
    }
    return result;
}