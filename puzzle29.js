(function() {
    var input = [
        'Sprinkles: capacity 2, durability 0, flavor -2, texture 0, calories 3',
        'Butterscotch: capacity 0, durability 5, flavor -3, texture 0, calories 3',
        'Chocolate: capacity 0, durability 0, flavor 5, texture -1, calories 8',
        'Candy: capacity 0, durability -1, flavor 0, texture 5, calories 8'
        ];
    
    var parser = /(\w+)\: capacity (-?\d+), durability (-?\d+), flavor (-?\d+), texture (-?\d+), calories (-?\d+)/;
    var ingredientDetails = {};
    
    input.forEach(function(line) {
        var match = parser.exec(line);
        var ingredient = {
            capacity: parseInt(match[2]),
            durability: parseInt(match[3]),
            flavor: parseInt(match[4]),
            texture: parseInt(match[5]),
            calories: parseInt(match[6])
        }
        ingredientDetails[match[1]] = ingredient;
     });
     
     var bestScore = 0;
     
     for (var sprinklesCount = 0; sprinklesCount <= 100; sprinklesCount++) {
         for (var butterscotchCount = 0; butterscotchCount <= 100 - sprinklesCount; butterscotchCount++) {
             for (var chocolateCount = 0; chocolateCount <= 100 - sprinklesCount - butterscotchCount; chocolateCount++) {
                 var candyCount = 100 - sprinklesCount - butterscotchCount - chocolateCount;
                 var score = calculateScore(sprinklesCount, butterscotchCount, chocolateCount, candyCount, ingredientDetails);
                 if (score > bestScore) {
                     bestScore = score;
                 }
             }
         }
     }
    
     console.log(bestScore);
})();

function calculateScore(sprinklesCount, butterscotchCount, chocolateCount, candyCount, ingredientDetails) {
    var capacity = (sprinklesCount * ingredientDetails.Sprinkles.capacity) +
                    (butterscotchCount * ingredientDetails.Butterscotch.capacity) +
                    (chocolateCount * ingredientDetails.Chocolate.capacity) +
                    (candyCount * ingredientDetails.Candy.capacity);
    capacity = capacity < 0 ? 0 : capacity;
    var durability = (sprinklesCount * ingredientDetails.Sprinkles.durability) +
                    (butterscotchCount * ingredientDetails.Butterscotch.durability) +
                    (chocolateCount * ingredientDetails.Chocolate.durability) +
                    (candyCount * ingredientDetails.Candy.durability);
    durability = durability < 0 ? 0 : durability;
    var flavor = (sprinklesCount * ingredientDetails.Sprinkles.flavor) +
                    (butterscotchCount * ingredientDetails.Butterscotch.flavor) +
                    (chocolateCount * ingredientDetails.Chocolate.flavor) +
                    (candyCount * ingredientDetails.Candy.flavor);
    flavor = flavor < 0 ? 0 : flavor;
    var texture = (sprinklesCount * ingredientDetails.Sprinkles.texture) +
                    (butterscotchCount * ingredientDetails.Butterscotch.texture) +
                    (chocolateCount * ingredientDetails.Chocolate.texture) +
                    (candyCount * ingredientDetails.Candy.texture);
    texture = texture < 0 ? 0 : texture;
    
    return capacity * durability * flavor * texture;
}
