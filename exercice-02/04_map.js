//index inversé

function map(value) {
    var wordList = words(value.content);
    var found = {};

    for each(var word in wordList) {
        if(! found[word]) {
            emit(word, {indexed: [value.id], cnt: 1});
            found[word] = true;
        }
    }
}