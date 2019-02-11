// nombre d'occurence de chaque mot

function map(value) {
    var wordList = words(value.content);
    for each(var word in wordList) {
        emit(word, {cnt: 1});
    }
}