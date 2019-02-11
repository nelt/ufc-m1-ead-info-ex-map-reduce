function reduce(values) {
    var result = {indexed: [], cnt: 0};

    for each(var value in values) {
        for each(var id in value.indexed) {
            result.indexed.push(id);
            result.cnt ++;
        }
    }

    return result;
}