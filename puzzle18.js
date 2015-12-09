(function() {
    var input = [
        'AlphaCentauri to Snowdin = 66',
        'AlphaCentauri to Tambi = 28',
        'AlphaCentauri to Faerun = 60',
        'AlphaCentauri to Norrath = 34',
        'AlphaCentauri to Straylight = 34',
        'AlphaCentauri to Tristram = 3',
        'AlphaCentauri to Arbre = 108',
        'Snowdin to Tambi = 22',
        'Snowdin to Faerun = 12',
        'Snowdin to Norrath = 91',
        'Snowdin to Straylight = 121',
        'Snowdin to Tristram = 111',
        'Snowdin to Arbre = 71',
        'Tambi to Faerun = 39',
        'Tambi to Norrath = 113',
        'Tambi to Straylight = 130',
        'Tambi to Tristram = 35',
        'Tambi to Arbre = 40',
        'Faerun to Norrath = 63',
        'Faerun to Straylight = 21',
        'Faerun to Tristram = 57',
        'Faerun to Arbre = 83',
        'Norrath to Straylight = 9',
        'Norrath to Tristram = 50',
        'Norrath to Arbre = 60',
        'Straylight to Tristram = 27',
        'Straylight to Arbre = 81',
        'Tristram to Arbre = 90'
    ];
    
    var places = [];
    var routes = [];
    var distances = {};
    var parseInput = /^(\w+) to (\w+) = (\d+)$/;
    
    for (var k = 0; k < input.length; k++) {
        var matches = parseInput.exec(input[k]);
        addPlace(matches[1], places);
        addPlace(matches[2], places);
        addDistance(matches[1], matches[2], parseInt(matches[3]), distances);
    }
    
    generateRoutes(places, distances, [], routes, 0);
    
    var longestRoute = routes[0];
    for (var i = 1; i < routes.length; i++) {
        if (routes[i][0] > longestRoute[0]) {
            longestRoute = routes[i];
        }
    }
    
    console.log(longestRoute);
})();

function addPlace(place, places) {
    if (places.indexOf(place) === -1) {
        places.push(place);
    }
}

function addDistance(place1, place2, distance, distances) {
    if (!(place1 in distances)) {
        distances[place1] = {};
    }
    distances[place1][place2] = distance;
    
    if (!(place2 in distances)) {
        distances[place2] = {};
    }
    distances[place2][place1] = distance;
}

function generateRoutes(unvisitedPlaces, distances, routeSoFar, completeRoutes, distanceSoFar) {
    for (var i = 0; i < unvisitedPlaces.length; i++) {
        var nextPlace = unvisitedPlaces[i];
        var newRouteSoFar = copyArray(routeSoFar);
        newRouteSoFar.push(nextPlace);
        var newUnvisitedPlaces = copyArray(unvisitedPlaces);
        newUnvisitedPlaces.splice(newUnvisitedPlaces.indexOf(nextPlace), 1);
        
        var distance = distanceSoFar;
        if (routeSoFar.length > 0) {
            distance += distances[routeSoFar[routeSoFar.length - 1]][nextPlace];
        }
        
        if (newUnvisitedPlaces.length === 0) {
            completeRoutes.push([distance, newRouteSoFar]);
        } else {
            generateRoutes(newUnvisitedPlaces, distances, newRouteSoFar, completeRoutes, distance);
        }
    }
}

function copyArray(array) {
    var newArray = [];
    
    for (var i = 0; i < array.length; i++) {
        newArray.push(array[i]);
    }
    
    return newArray;
}
