(function() {
    var input = [
        'Rudolph can fly 22 km/s for 8 seconds, but then must rest for 165 seconds.',
        'Cupid can fly 8 km/s for 17 seconds, but then must rest for 114 seconds.',
        'Prancer can fly 18 km/s for 6 seconds, but then must rest for 103 seconds.',
        'Donner can fly 25 km/s for 6 seconds, but then must rest for 145 seconds.',
        'Dasher can fly 11 km/s for 12 seconds, but then must rest for 125 seconds.',
        'Comet can fly 21 km/s for 6 seconds, but then must rest for 121 seconds.',
        'Blitzen can fly 18 km/s for 3 seconds, but then must rest for 50 seconds.',
        'Vixen can fly 20 km/s for 4 seconds, but then must rest for 75 seconds.',
        'Dancer can fly 7 km/s for 20 seconds, but then must rest for 119 seconds.'
        ];
    
    var parser = /(\w+) can fly (\d+) km\/s for (\d+) seconds, but then must rest for (\d+) seconds./
    var reindeerDetails = {};
    var raceDuration = 2503;
    var reindeerScores = {};
    
    input.forEach(function(line) {
        var match = parser.exec(line);
        var reindeer = {
            speed: parseInt(match[2]),
            flightTime: parseInt(match[3]),
            restTime: parseInt(match[4])
        }
        reindeerDetails[match[1]] = reindeer;
        reindeerScores[match[1]] = 0;
     });

     var reindeerNames = Object.keys(reindeerDetails);
     for (var time = 1; time <= raceDuration; time++) {
         var furthestDistance = [0, []];
         for (var i = 0; i <  reindeerNames.length; i++) {
             var name = reindeerNames[i];
             var distance = calculateDistance(reindeerDetails[name], time);
             if (distance > furthestDistance[0]) {
                 furthestDistance = [distance, [name]];
             } else if (distance === furthestDistance[0]) {
                 furthestDistance[1].push(name);
             }
         }
         
         for (var i = 0; i < furthestDistance[1].length; i++) {
             reindeerScores[furthestDistance[1][i]]++;
         }
     }
     
     var topScore = [0, ''];
     for (var i = 0; i <  reindeerNames.length; i++) {
        var name = reindeerNames[i];
        if (reindeerScores[name] > topScore[0]) {
            topScore = [reindeerScores[name], name];
        }
    }
    
    console.log(topScore);
})();

function calculateDistance(reindeer, duration) {
    var cycleDuration = reindeer.flightTime + reindeer.restTime;
    
    var numberOfCycles = Math.floor(duration / cycleDuration);
    var timeRemaing = duration % cycleDuration;
    var finalFlightTime = Math.min(timeRemaing, reindeer.flightTime);
    
    var distance = reindeer.speed * ((reindeer.flightTime * numberOfCycles) + finalFlightTime);
    
    return distance;
}