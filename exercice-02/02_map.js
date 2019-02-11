// nombre moyen de mot par document
function map(value) {
    var wordList = words(value.content);
    emit('nombre moyen de mot par document', {avg: wordList.length, cnt: 1});
}