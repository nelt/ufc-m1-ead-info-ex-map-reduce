function reduce(values) {
    var result = {avg: 0, cnt: 0, min: -1, max: 0};
    for each(var value in values) {
        result.avg = (result.avg * result.cnt + value.avg * value.cnt) / (result.cnt + value.cnt);
        result.cnt += value.cnt;
        if(result.max < value.max) {
            result.max = value.max;
        }
        if(result.min > value.min) {
            result.min = value.min;
        }
    }
    return result;
}