var censoredWords = ["sad", "mad", "bad"];
var customerCensoredWords = [];

function censor(inStr){
    for(idx in censoredWords){
        inStr = inStr.replace(censoredWords[idx], "****");
    }

    for(idx in customerCensoredWords){
        inStr = inStr.replace(customerCensoredWords[idx], "****");
    }

    return inStr;
}

function addCensoredWord(word){
    customerCensoredWords.push(word);
}

function getCensoredWord(word){
    return censoredWords.concat(customerCensoredWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWord = getCensoredWord;