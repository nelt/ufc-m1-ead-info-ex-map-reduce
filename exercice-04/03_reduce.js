function reduce(values) {
    var result = {ca: 0, cnt: 1};
    for each(var value in values) {
        result.ca += value.ca;
        result.cnt += value.cnt;
    }
    return result;
}