(function() {
    var input = [
        '###.##..##.#..#.##...#..#.####..#.##.##.##..###...#....#...###..#..###..###.#.#.#..#.##..#...##.#..#',
        '.#...##.#####..##.......#..####.###.##.#..###.###.....#.#.####.##.###..##...###....#.##.....#.#.#.##',
        '.....#.#.....#..###..####..#.....##.#..###.####.#.######..##......#####.#.##.#########.###..#.##.#.#',
        '...###......#.#..###..#.#.....#.##..#.##..###...#.##.#..#..#.##.#..##......##.##.##.######...#....##',
        '.###.....#...#.#...####.#.###..#..####.#..#.##..####...##.#...#..###...###...####..##....####.##..#.',
        '..#....#...#.......#..###.###....#.##..#.....###.#.##.#....#.#....##.##..#.##.#..###.###.##.##..##.#',
        '##..#####.#.#....#.#...#.#.####..#....#..#....#.#..#.#####...#..##.#.....#.##..##.####......#.#.##..',
        '.#..##..#.#.###..##..##...#....##...#..#.#..##.##..###.####.....#.####.#.....##.#.##...#..####..#...',
        '#.#####.......#####...#...####.#.#.#....#.###.#.##.#####..#.###.#..##.##.#.##....#.##..#....####.#.#',
        '#.##...#####....##.#.#.....##......##.##...#.##.##...##...###.###.##.#.####.####.##..#.##.#.#.####..',
        '#.##.##....###.###.#..#..##.##.#..#.#..##..#.#...#.##........###..#...##.#.#.##.......##.....#...###',
        '###..#.#..##.##.#.#.#...#..#...##.##.#.########.......#.#...#....########..#.#.###..#.#..#.##..#####',
        '####.#.#...#.##.##..#.#...#....#..###..#.#.#.####.#.##.##.#..##..##..#..#####.####.##..########..##.',
        '.#.#...#..##.#..#..###.#..####.......##.#.#.#.##.#####..#..##...#.##...#..#....#..#..###..####.#....',
        '..#.#...#....##...#####..#..#...###.###.....#.###.#....#.#..##...#.##.##.####.#.#.#..#.##.#....#.#..',
        '#....###.####.##..#.#.###..###.##.##..#.#...###..#.##.#####.##.#######..#.#...##.#..........####.###',
        '#.#####.#......#.#......#.....##...##.#.#########.#......##..##..##.#..##.##..#....##...###...#.#...',
        '#..#..##..###.#.#.#.#.....###.#.####.##.##....#.#..##....#.#..#.####..###.##...#######.#####.##.#.#.',
        '..###.#........##.#...###..#.##..#.#....##.#......#..#.##..#.#..#.#..#.####.#####..###.##..#.##.#...',
        '##.###....#..##...#..#.#......##..#...#..#.####..#.##...##.####.#...#..###...#.#.#....###.##..#.#...',
        '..##.##.#.##..##.#..#.###...##..##..#....##..##...####.#..####.###...#.....#..#.##..##..###..#.#...#',
        '#.#....#.....#...##.#...####..#..##..##.####..##..##...####...#....##.#.#######..##.#......######.#.',
        '#.#...###.######.######..##..##....#.#......#......#.#.##.#.##.#.#.#...#...#....#.#.#.#..#.##..#...#',
        '####.###.#.#.##..#.##.#...#.##...#.##.##...#.....#.#..#.####.##..######.#..#.#..##....#.#.#..#.#.#.#',
        '..##......#.#...#.##.##..##..##..#..##..#########.#..###..###.##...#..##.#..#.#.#.######..#....#.#..',
        '..##.##.#...###.#...##..######.##.#..####..#..#.#.##.####.##.##.#...##....#...###.##.####..#....#.#.',
        '####...###..#.#.##.#.#....###..##.#.#..########..#...#.#...#.##....##.##...#.....#.#.....#.....#....',
        '.#.###############....#.##..###..#.####.#.##.##..#..#.#...###...##..##.##.#.....##...###.###.....#..',
        '.###..#..##.##..####.#.###.##.##..#..##....#.#......#......##.#...#.#...#..##.#.#...#...#.##..#.##..',
        '###.#.#.########.#.#..####.#..##.#.##.##.###.##..######...#..##.##.#..#.#...#.##..#####.....#.#.#..#',
        '.##.##..#.#...#####.#.#.###...##...####...#......#...#..####..#.##..........#..#.#..###....######.##',
        '..#####...#.#.#.#..#.##..#...#.#..#.##...##..##.##.#.##.#..#.#...#.......##.#...###.....#...#.#.#.##',
        '##.##.#..######.##...#.....#.###.#..##.#.#.#..####.#....##.#....####...##....#.#.##.#..###.##.##..##',
        '.###.##.#..#.###.####..#.##..####.#.#.##..###.#######.###.###...####........##....###.#...#.#.####.#',
        '........#..#.#..##..########..........#.##.#..##.#...#.....####....##..#..#.#####.###...#...#.##.###',
        '.....#..##.####...##.#####..######.##.#.###.####.##.##.#..##.##.######.##......#..#.####..##....#.##',
        '##...####....#.##.##.###....#.#...#.####..##.#.##.#.#...####.#.#.#.#...##.###...##...###...######.##',
        '.#....#.#.####...#.##.....##...###.#.#.##...##.#####....#.######.#.#....##..##...##....##.#.##.#.#.#',
        '.###..###.#.......#.#######..#.#.#.######....#.#####.#.....#.#########...#....##...##.####.#..#.....',
        '##.#..##..##.....#..##...#..##.##.#..#.#####.##.##.#.##.##...##.######.####..#.##..#####.##...##..#.',
        '#.###...##.#.#.#.##....#.#.##.##..#....#...#.#.........#..#..####..####.####..#.##.##.#....####..##.',
        '.#..######..#####.####.##.#.....#.#.#####..##..###.#.#.#..#.#...#.#######..##....##.##...#######..#.',
        '#...#....#.#.##..#####..#########..#.....#...##.#.#.###...#####..##...##...####.......#######.#..###',
        '.#......#...##.###..#....#...#.#.....#.#...##.#.#..#..###.##.###.#.##..##...#.##......#.###..#.#..##',
        '.#....####...###..#.....##..#...#.#.###.#.#.##...#.##.##.#.#.#..####..###.#.#.#.##.#.#...#..#...####',
        '......##.##.#...#####.##..#.###..#.#####..##.#..##.###......#...#...#..#......###.######...#.#.##..#',
        '###..#...#.##..###.#....##...#..#####.#.#..#.###...#####.#....##..####.#.##...#.#...##..#.#.#.#..#.#',
        '...##.#.##.##..#.#.#.###.#.#...#.....###.###.##...#.###.##...##..#..###.#..##.##..###.#....###..##..',
        '.##.#..###..###.##.##...#..#####...#.....#####.##..####...#.##.#.#..##.#.#.#....###.....#....##.....',
        '######.#..#.#..#....#.###...####.####.#.........#..##.#..##..##.....#..#.##.##...#...#####.#.##..#.#',
        '.##.###...####....#.####...#####..#..#...#..#.....###.#..#.###..#.###.#.......##.####..#.##.#...##..',
        '........#.#.##.#.....#####.###......##..#.##.#..#...####.#...#..###.#.#...##..#.#...#.####...#.#.###',
        '.#..#.##..##...######.###.##.#.#...#.#.#.#.##..##..##.#.##..#....#.##...#.##.##...##....##.###.##.#.',
        '##...#...#...###.#.#...#...#..###......##.#.#....##..##.#..##.#.######...#..##.#.##.#.#....#.##.##..',
        '...#..###.#....#...#.##..##.#.##.#..###.##..#.##..####.#########....#.....##.#.##.##..##.##.######.#',
        '#.##.#..##.......###...#.###....###.#..####..##.#####.##.###....##....#.###...####..#.#.#.##.....###',
        '.......#...#...##.#...##.#.#..#.##..##.#....###...##.#####...#.........#.......###.##.#.#.###....##.',
        '###.#.##.##.....#.#..#.#..####.####..#..###..........####.#.##...#######.###..#####..#.....#..###..#',
        '#...##.##..####.##.###.#.#######..###.#..#######..#.##.####...#..#.##.####..####.#.#.......####.#...',
        '...#.##..#..#..##........#.#..#..#.#....#.###.#.###..#.......###..#.....#....#..##.#...#.###...##.#.',
        '###.##..#.##.#.#####..#.##.####....#####..###.#.#..#...#...###.#.##..#.#.#.....#.####.#.#.#.#.#.#...',
        '..##..##..#..##.##.#...#..#....####....#...#..####..#.....######.###.####.#....##....##.#.#.###....#',
        '.#.#.#.##..####..#.....#.####.#....#.....#....#.##..#.#..#.#...#.#.#.#..#..#..##.#....####.......#..',
        '..##.##..###......#...#..##...#.###.####.#...#.####..#.#.#.....#.#...####...#.########.##.#.#.#..###',
        '#....#.##.....##.###.##.###..#.####.....####.##...#..##.###...###..###.#....####.#..#..#..#.#..##.#.',
        '.#.#.##....#.##......#.#..###.#....###....#......#.#.##.##.#########..##..#...#.####..#...####..#..#',
        '.#.#.......##.#.##.#...#...#.##.#..#.#.#.##....#..###.###.##.#.#...##.#..#..##....#..###.#...#.#.##.',
        '#.##.#....####...#..##..#.#.#.#.##.#...#####.#...#..#..#.####.####.#.#....#......##..##..###...#..##',
        '..##.###..##.####..#..#..##...###.#.#.#######.####...####......##.##..#...#.##...##....#..#..#.....#',
        '....#..#..#.#.####.#...##..#....####.#..####...#.#...###...#..#..##...#....##...#.....#.#..#.#.#...#',
        '...#.#.#.##..##.###..#.######....####.###...##...###.#...##.####..#.#..#.#..#.##.....#.#.#..##......',
        '.#.##.##.....##.#..###.###.##....#...###.#......#...##.###.#.##.##...###...###...#.######..#......#.',
        '###..#...#......#..##...#....##.#..###.##.####..##..##....####.#...#.#....##..#.#######..#.#.#####..',
        '##...#####..####..##....#.#.###.##.#..#.#..#.....###...###.#####.....#..##.#......#...#.###.##.##...',
        '...#.#.#..#.###..#.#.#....##.#.#..####.##.#.####.#.#.#...#....##....#.##.####..###.#.#...##.#..#..##',
        '#.#.#..#.##..##.##.#...##.#....#...###..##..#.#######.#.###..##......##.#..###.########.#.##..#.#.##',
        '######.###....##..#..#...####....#.#.#..#...#..######.#.#.##..##....##....##.##.##...#..#.####.#.#..',
        '#####.###..#..###......##...##.####.#.#.#.###.......##..##.####..##.####.#..#..####..#.####.#####...',
        '##.#.#.###..##.#.##.#.#.#.##.#...##........###.#.##..####....###.#.####.####.#.......##.##.##...##..',
        '#.#..###...#..##.....##.#..#.#..##..######.#####...###.#.......###...#..##..#..#..##.#.#....#..#..#.',
        '#.#..####.###..#...#...#...#.###..#.#.#.#.#.#.#..#....#.##.##.##..###..####.#..##..##.###.###....##.',
        '#..#.##.#####........#..#.##.#..##.#...#....#..#.##..###..##..##.##..#..##.#.#...#.#.##.#.##....#.#.',
        '.......##..#.....#..#.#.....#.##...####.###..####..#.#.#.#..#.....#....##...#..#.##..###.#.#....#...',
        '#...###########.##.....##...###.#.##.##..####.##...#.####.#####.#####.####...###.##...##..#.#.###..#',
        '....#.#.###.####.###...#...#.#..###.#.#.##...#..#.#.#..#.####..#..###.######.#.####.###...###.#.##.#',
        '.....#..#..########...#.#.#.#.#.#.#.#..###.##..####...##.#.#.#...##..#####.##.#...#.####.#######.##.',
        '.......#...#.#..#..#...#..#..##.....#.##....##.##...##..##.##...##...#.#..#.##.#.###.#.####.#.#..##.',
        '.####...#...#.#.#....##..........##.##.###.##.#.#..#.#.#......########.#...#.####.##.###..##...####.',
        '#.#.#...##.###..##..#..#.....####.#.....##.##.#..#.#.###.#..#######...##..#.#..#.#..############.###',
        '.##..####.#..#.....###..#..#.#.....#.#.#...##.##.#....#..#..###.#...#....#.#...####..#.....###.####.',
        '..#...#.###.###....##.#..#.##..####.##.#.##.##.##...###.####..#.#.#.##.#.#.#..###..##.##.##.##.#..##',
        '#...............##.....######.#.#####.##.#....#.#..#.##...#.##....#........##.##...#.##.##.#..#.##.#',
        '#..##..#.#.#.##.#..#.#.##.##...#...#..#.#.##..#.#...###...##...###..#####.#.#..#..#.#..#.#.##...##.#',
        '.#######.#.....##...#.#.####.######.#..#......#....##.#.#..#..###.#...###...#....#.#..#.##.#...#.#..',
        '#.###......##.#.##..#.###.###..####..##....#..###......##..##..#####.####....#...###.....###.#..#...',
        '###...#....###.#..#.###.##...###.##.......##.##.#.#.#....####....###..##.###...#..##....#.#.##..##..',
        '.##.......##.######.#.#..#..##....#####.###.#.##.....####....#......####....#.##.#.##..#.##...##.#.#',
        '.#.###...#.#.#.##.###..###...##..#.##.##..##..#.....###.#..#.##.##.####........##.#####.#.#....#...#',
        '##...##..#.##.#######.###.#.##.#####....##.....##.#.....#.#.##.#....#.##.#....##.#..#.###..#..#.#...',
        '##..#.#.#.#...#.##...###.##.#.#...###.##...#.#..###....###.#.###...##..###..#..##.##....###...###.##'
    ];
    
    var lights = [];
    lights.push([]);
    for (var i = 0; i < input.length + 2; i++) {
        lights[0].push(0);
    }
    
    for (var i = 0; i < input.length; i++) {
        lights.push([]);
        lights[i+1].push(0);
        for (var j = 0; j < input[i].length; j++) {
            lights[i+1].push(input[i][j] === '#' ? 1 : 0);
        }
        lights[i+1].push(0);
    }
    
    lights.push([]);
    for (var i = 0; i < input.length + 2; i++) {
        lights[input.length + 1].push(0);
    }
    
    for (var i = 0; i < 100; i++) {
        lights = step(lights);
    }
    
    console.log(countOn(lights));
})();

function step(lights) {
    var newLights = getNewLights(lights);
    
    for (var x = 1; x < lights[0].length - 1; x++) {
        for (var y = 1; y < lights[0].length - 1; y++) {
            if ((x === 1 && y === 1) ||
                (x === 1 && (y === lights[0].length - 2)) ||
                (x === lights[0].length - 2 && y === 1) ||
                (x === lights[0].length - 2 && y === lights[0].length - 2)) {
                    newLights[x][y] = 1;
            } else {
                var onNeighbours = countOnNeighbours(x, y, lights);
                if (lights[x][y] === 1) {
                    newLights[x][y] = (onNeighbours === 2 || onNeighbours === 3) ? 1 : 0;
                } else if (lights[x][y] === 0) {
                    newLights[x][y] = onNeighbours === 3 ? 1 : 0;
                }
            }
        }
    }
    return newLights;
}

function getNewLights(lights) {
    var newLights = [];
    for (var x = 0; x < lights[0].length; x++) {
        newLights.push([]);
        for (var y = 0; y < lights[0].length; y++) {
            newLights[x].push(0);
        }
    }
    
    return newLights;
}

function countOnNeighbours(x, y, lights) {
    return  lights[x-1][y-1] +
            lights[x-1][y] +
            lights[x-1][y+1] +
            lights[x][y-1] +
            lights[x][y+1] +
            lights[x+1][y-1] +
            lights[x+1][y] +
            lights[x+1][y+1];
}

function countOn(lights) {
    var count = 0;
    for (var x = 1; x < lights[0].length - 1; x++) {
        for (var y = 1; y < lights[0].length - 1; y++) {
            count += lights[x][y];
        }
    }
    return count;
}
