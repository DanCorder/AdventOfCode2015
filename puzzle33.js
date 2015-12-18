(function() {
    var input = [
        43,
        3,
        4,
        10,
        21,
        44,
        4,
        6,
        47,
        41,
        34,
        17,
        17,
        44,
        36,
        31,
        46,
        9,
        27,
        38
        ];

    var combinations = addNextContainer(0, 0, input, 0, 150);

     console.log(combinations);
})();

function addNextContainer(capacitySoFar, index, containers, combinationsSoFar, target) {
    for (var i = index; i < containers.length; i++) {
        capacitySoFar += containers[i];
        if (capacitySoFar === target) {
            combinationsSoFar++;
        } else if (capacitySoFar < target) {
            combinationsSoFar = addNextContainer(capacitySoFar, i + 1, containers, combinationsSoFar, target);
        }
        
        capacitySoFar -= containers[i];
    }
    
    return combinationsSoFar;
}