(function() {
    var targetPresents = 34000000;
    var numberOfPresents = 0;
    var houseNumber = 0;
    
    while (numberOfPresents < targetPresents) {
        houseNumber++;
        numberOfPresents = getNumberOfPresentsForHouse(houseNumber);
    }
    
    console.log('' + houseNumber + ' ' + numberOfPresents);
})();

function getNumberOfPresentsForHouse(houseNumber) {
    var limit = Math.sqrt(houseNumber);
    var elfNumber = 0;
    
    for (var i = 1; i <= limit; i++) {
        if (houseNumber % i === 0) {
            elfNumber += i;

            if (i !== limit) {
                elfNumber += (houseNumber / i);
            }
        }
    }
    
    return elfNumber * 10;
}