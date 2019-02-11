function reduce(values) {
    var result = {avg: 0, cnt: 0};
    for each(var value in values) {
        result.avg = (result.avg * result.cnt + value.avg * value.cnt) / (result.cnt + value.cnt);
    }
    return result;
}