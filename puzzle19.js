(function() {
    var input = '1113122113';
    
    var stepCount = 0;
    
    while (stepCount < 40) {
        input = nextStep(input);
        stepCount++;
    }
    
    console.log(input.length);
})();

function nextStep(input) {
    var nextStep = '';
    
    var currentRunChar = '';
    var runLength = 1;
    
    for (var i = 0; i < input.length; i++) {
        var char = input.charAt(i);
        
        if (char !== currentRunChar) {
            if (currentRunChar !== '') {
                nextStep += runLength + currentRunChar;
            }
            currentRunChar = char;
            runLength = 1;
        } else {
            runLength++;
        }
    }
    
    nextStep += runLength + currentRunChar;

    return nextStep;
}
