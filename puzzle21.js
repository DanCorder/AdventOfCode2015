(function() {
    var password = 'hxbxwxba';
    
    do {
        password = incrementPassword(password);
    }
    while (!isValid(password));
    
    console.log(password);
})();

function incrementPassword(oldPassword) {
    var validLetters = 'abcdefghjkmnpqrstuvwxyz';

    var index = oldPassword.length - 1;
    
    do {
        var carry = false;
        var currentLetter = oldPassword.charAt(index);
        var newLetter;
        if (validLetters.indexOf(currentLetter) === validLetters.length - 1) {
            newLetter = validLetters[0];
            carry = true;
        } else {
            newLetter = validLetters.charAt(validLetters.indexOf(currentLetter) + 1);
        }
        
        oldPassword = replaceAt(oldPassword, index, newLetter);
        index--;
    }
    while (carry);
    
    return oldPassword;
}

function replaceAt(stringToChange, index, character) {
    return stringToChange.substr(0, index) + character + stringToChange.substr(index + character.length);
}

function isValid(password) {
    var lastLetter = '';
    var lastButOneLetter = '';
    var runFound = false;
    var twoPairsFound = false;
    var firstPairLetter = undefined;
    
    for (var i = 0; i < password.length; i++) {
        var currentLetter = password.charAt(i);
        
        if (currentLetter === 'i' || currentLetter === 'o' || currentLetter === 'l') {
            return false;
        }
        
        if (lastButOneLetter.charCodeAt(0) + 1 === lastLetter.charCodeAt(0) &&
            lastLetter.charCodeAt(0) + 1 === currentLetter.charCodeAt(0)) {
                runFound = true;
        }
        
        if (lastLetter === currentLetter) {
            if (firstPairLetter === undefined) {
                firstPairLetter = currentLetter;
            } else if (currentLetter !== firstPairLetter) {
                twoPairsFound = true;
            }
        }
        
        lastButOneLetter = lastLetter;
        lastLetter = currentLetter;
    }
    
    return runFound && twoPairsFound;
}