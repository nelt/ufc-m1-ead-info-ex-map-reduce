function reduce(values) {
    var result = {avg: 0, cnt: 0};
    for each(var value in values) {
        result.avg += value.avg * value.cnt;
        result.cnt += value.cnt;
    }
    result.avg /= result.cnt;
    return result;
}